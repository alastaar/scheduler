const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const { promisify } = require('util');
const { transport, makeANiceEmail } = require('../mail');
const { hasPermission } = require('../utils');
const stripe = require('../stripe');

const Mutations = {
  async createItem(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error('You must be logged in to do that!');
    }

    const item = await ctx.db.mutation.createItem(
      {
        data: {
          // This is how to create a relationship between the Item and the User
          user: {
            connect: {
              id: ctx.request.userId,
            },
          },
          ...args,
        },
      },
      info
    );

    console.log(item);

    return item;
  },

  async createRequest(parent, args, ctx, info) {

    console.log(args);

    const request = await ctx.db.mutation.createRequest({
      data: {
        user: {
          connect:{
            id: ctx.request.userId,
          },
        },
        ...args
      }
    }, info)

    console.log(request);

    return request;
  },


  updateItem(parent, args, ctx, info) {
    // first take a copy of the updates
    const updates = { ...args };
    // remove the ID from the updates
    delete updates.id;
    // run the update method
    return ctx.db.mutation.updateItem(
      {
        data: updates,
        where: {
          id: args.id,
        },
      },
      info
    );
  },
  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };
    // 1. find the item
    const item = await ctx.db.query.item({ where }, `{ id title user { id }}`);
    // 2. Check if they own that item, or have the permissions
    const ownsItem = item.user.id === ctx.request.userId;
    const hasPermissions = ctx.request.user.permissions.some(permission =>
      ['ADMIN', 'ITEMDELETE'].includes(permission)
    );

    if (!ownsItem && !hasPermissions) {
      throw new Error("You don't have permission to do that!");
    }

    // 3. Delete it!
    return ctx.db.mutation.deleteItem({ where }, info);
  },
  async signup(parent, args, ctx, info) {
    // lowercase their email
    args.email = args.email.toLowerCase();
    // hash their password
    const password = await bcrypt.hash(args.password, 10);
    // create the user in the database
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args,
          password,
          permissions: { set: ['USER'] },
        },
      },
      info
    );
    // create the JWT token for them
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // We set the jwt as a cookie on the response
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
    });
    // Finalllllly we return the user to the browser
    return user;
  },
  async signin(parent, { email, password }, ctx, info) {
    // 1. check if there is a user with that email
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`No such user found for email ${email}`);
    }
    // 2. Check if their password is correct
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid Password!');
    }
    // 3. generate the JWT Token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // 4. Set the cookie with the token
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });
    // 5. Return the user
    return user;
  },
  signout(parent, args, ctx, info) {
    ctx.response.clearCookie('token');
    return { message: 'Goodbye!' };
  },
  async requestReset(parent, args, ctx, info) {
    // 1. Check if this is a real user
    const user = await ctx.db.query.user({ where: { email: args.email } });
    if (!user) {
      throw new Error(`No such user found for email ${args.email}`);
    }
    // 2. Set a reset token and expiry on that user
    const randomBytesPromiseified = promisify(randomBytes);
    const resetToken = (await randomBytesPromiseified(20)).toString('hex');
    const resetTokenExpiry = Date.now() + 3600000; // 1 hour from now
    const res = await ctx.db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry },
    });
    // 3. Email them that reset token
    const mailRes = await transport.sendMail({
      from: 'wes@wesbos.com',
      to: user.email,
      subject: 'Your Password Reset Token',
      html: makeANiceEmail(`Your Password Reset Token is here!
      \n\n
      <a href="${process.env
        .FRONTEND_URL}/reset?resetToken=${resetToken}">Click Here to Reset</a>`),
    });

    // 4. Return the message
    return { message: 'Thanks!' };
  },
  async resetPassword(parent, args, ctx, info) {
    // 1. check if the passwords match
    if (args.password !== args.confirmPassword) {
      throw new Error("Yo Passwords don't match!");
    }
    // 2. check if its a legit reset token
    // 3. Check if its expired
    const [user] = await ctx.db.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - 3600000,
      },
    });
    if (!user) {
      throw new Error('This token is either invalid or expired!');
    }
    // 4. Hash their new password
    const password = await bcrypt.hash(args.password, 10);
    // 5. Save the new password to the user and remove old resetToken fields
    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: {
        password,
        resetToken: null,
        resetTokenExpiry: null,
      },
    });
    // 6. Generate JWT
    const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);
    // 7. Set the JWT cookie
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });
    // 8. return the new user
    return updatedUser;
  },
  async updatePermissions(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // 2. Query the current user
    const currentUser = await ctx.db.query.user(
      {
        where: {
          id: ctx.request.userId,
        },
      },
      info
    );
    // 3. Check if they have permissions to do this
    hasPermission(currentUser, ['ADMIN', 'PERMISSIONUPDATE']);
    // 4. Update the permissions
    return ctx.db.mutation.updateUser(
      {
        data: {
          permissions: {
            set: args.permissions,
          },
        },
        where: {
          id: args.userId,
        },
      },
      info
    );
  },

  async updateUserInfo(parent, args, ctx, info) {
  if (!ctx.request.userId) {
    throw new Error('You must be logged in!');
  }

  const updates = { ...args };
  delete updates.userId;
  // 2. Query the current user
  const currentUser = await ctx.db.query.user(
    {
      where: {
        id: ctx.request.userId,
      },
    },
    info
  );


  return ctx.db.mutation.updateUser(
    {
      data: updates,
      where: {
        id: args.userId,
      },
    },
    info
  );
},

  approveRequests(parent, args, ctx, info) {
    console.log(args);

    const updates = { ...args };

    delete updates.id;


    return ctx.db.mutation.updateRequest(
      {
        data: updates,
        where: {
          id: args.id,
        },
      },
      info
    );
  },

  async addToCart(parent, args, ctx, info) {
    // 1. Make sure they are signed in
    const { userId } = ctx.request;
    if (!userId) {
      throw new Error('You must be signed in soooon');
    }
    // 2. Query the users current cart
    const [existingCartItem] = await ctx.db.query.cartItems({
      where: {
        user: { id: userId },
        request: { id: args.id },
      },
    });
    // 3. Check if that item is already in their cart and increment by 1 if it is
    if (existingCartItem) {
      console.log('This item is already in their cart');
      return ctx.db.mutation.updateCartItem(
        {
          where: { id: existingCartItem.id },
          data: { quantity: existingCartItem.quantity },
        },
        info
      );
    }
    // 4. If its not, create a fresh CartItem for that user!
    return ctx.db.mutation.createCartItem(
      {
        data: {
          user: {
            connect: { id: userId },
          },
          request: {
            connect: { id: args.id },
          },
        },
      },
      info
    );
  },
  async removeFromCart(parent, args, ctx, info) {
    // 1. Find the cart item
    const cartItem = await ctx.db.query.cartItem(
      {
        where: {
          id: args.id,
        },
      },
      `{ id, user { id }}`
    );
    // 1.5 Make sure we found an item
    if (!cartItem) throw new Error('No CartItem Found!');
    // 2. Make sure they own that cart item
    if (cartItem.user.id !== ctx.request.userId) {
      throw new Error('Cheatin huhhhh');
    }
    // 3. Delete that cart item
    return ctx.db.mutation.deleteCartItem(
      {
        where: { id: args.id },
      },
      info
    );
  },
  async createOrder(parent, args, ctx, info) {
    // 1. Query the current user and make sure they are signed in
    const { userId } = ctx.request;
    if (!userId) throw new Error('You must be signed in to complete this order.');
    const user = await ctx.db.query.user(
      { where: { id: userId } },
      `{
      id
      name
      lastName
      email
      cart {
        id
        quantity
        request {
          requestedId
          name
          lastName
          email
          price
          id
          details
          referenceImage
          approved
        }
      }}`
    );

    // 2. recalculate the total for the price
    const amount = user.cart.reduce(
      (tally, cartItem) => tally + cartItem.request.price * cartItem.quantity,
      0
    );


    // 3. Create the stripe charge (turn token into $$$)
    const requestedIds = user.cart.reduce(cartItem => cartItem.request.requestedId);

    const requestedId = requestedIds.request.requestedId;

    const anotherId = requestedIds.request.id;

    const requestUpdate = await ctx.db.mutation.updateRequest(
    {
        data: {
          approved: 'confirmed',
        },
        where: {
          id: anotherId,
        },
      },
      info
    );

    console.log(requestedIds);
    console.log(requestedId);

    const requested = await ctx.db.query.user(
        { where: { id: requestedId } },
        `{
          accId
          }`
      );

    const fee = amount * .05;

    const charge = await stripe.charges.create({
      amount: amount,
      currency: 'USD',
      source: args.token,
      destination: requested.accId,
      application_fee: fee,
      },function(err, charge) {
          stripe.accounts.retrieve(
            requested.accId,
            function(err, account) {
            }
        );
    });
    // 4. Convert the CartItems to OrderItems
    const orderItems = user.cart.map(cartItem => {
      const orderItem = {
        ...cartItem.request,
        quantity: cartItem.quantity,
        user: { connect: { id: userId } },
      };
      delete orderItem.id;
      return orderItem;
    });

    console.log(charge);
    // 5. create the Order
    const order = await ctx.db.mutation.createOrder({
      data: {
        total: amount,
        charge: requestedId,
        requests: { create: orderItems },
        user: { connect: { id: userId } },
      },
    });
    // 6. Clean up - clear the users cart, delete cartItems
    const cartItemIds = user.cart.map(cartItem => cartItem.id);
    await ctx.db.mutation.deleteManyCartItems({
      where: {
        id_in: cartItemIds,
      },
    });
    // 7. Return the Order to the client
    return order;
  },

  async createStripeAccount(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }

    const updates = { ...args };
    delete updates.userId;
    // 2. Query the current user
    const currentUser = await ctx.db.query.user(
      {
        where: {
          id: ctx.request.userId,
        },
      },
      info
    );

    var token = args.stripeToken;
    var accountId = currentUser.accId;
    console.log(currentUser);
    const account = await stripe.accounts.create({
      country: "US",
      type: "custom",
      default_currency: "USD",
      account_token: token,
    }).then(function(acct) {
      accountId = acct.id;
    });

    console.log(accountId);

    return ctx.db.mutation.updateUser(
      {
        data: {
          ...updates,
          accId: accountId,
        },
        where: {
          id: args.userId,
        },
      },
      info
    );
  },

  async updateStripeAccount(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }

    const updates = { ...args };
    delete updates.userId;
    // 2. Query the current user
    const currentUser = await ctx.db.query.user(
      {
        where: {
          id: ctx.request.userId,
        },
      },
      info
    );
    var accountId = currentUser.accId;
    var token = args.stripeToken;
    console.log(token);
    const account = await stripe.accounts.update(
      accountId,
      {
        account_token: token,
      }
    );


    return ctx.db.mutation.updateUser(
      {
        data: updates,
        where: {
          id: args.userId,
        },
      },
      info
    );
  },

  async createBankInfo(parent, args, ctx, info){
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }

    const updates = { ...args };
    delete updates.userId;
    // 2. Query the current user
    const currentUser = await ctx.db.query.user(
      {
        where: {
          id: ctx.request.userId,
        },
      },
      info
    );

    var accountId = currentUser.accId;
    var token = args.bankToken;
    console.log(token);
    const account = await stripe.accounts.createExternalAccount(
      accountId,
      { external_account: token}).
      then(function(err, card) {
          console.log(card);
      });

    return ctx.db.mutation.updateUser(
      {
        data: updates,
        where: {
          id: ctx.request.userId,
        },
      },
      info
    );
  },

  async updateBankInfo(parent, args, ctx, info){
      if (!ctx.request.userId) {
        throw new Error('You must be logged in!');
      }

      const updates = { ...args };
      delete updates.userId;
      // 2. Query the current user
      const currentUser = await ctx.db.query.user(
        {
          where: {
            id: ctx.request.userId,
          },
        },
        info
      );

      var accountId = currentUser.accId;
      var token = args.bankToken;
      console.log(token);
      console.log(accountId);
      const account = await stripe.accounts.createExternalAccount(
        accountId,
        {
          external_account: token,
         }).
        then(function(err, card) {
            console.log(card);
        });


      return ctx.db.mutation.updateUser(
        {
          data: updates,
          where: {
            id: args.userId,
          },
        },
        info
      );
  },

  async deleteRequest(parent, args, ctx, info) {
    const where = { id: args.id };
    // 1. find the item
    const request = await ctx.db.query.request({ where }, `{ id requestedId name lastName user { id }}`);
    // 2. Check if they own that item, or have the permissions
    const ownsRequest = request.requestedId === ctx.request.userId;
    const hasPermissions = ctx.request.user.permissions.some(permission =>
      ['ADMIN', 'ITEMDELETE'].includes(permission)
    );

    if (!ownsRequest) {
      throw new Error("You don't have permission to do that!");
    }

    // 3. Delete it!
    return ctx.db.mutation.deleteRequest({ where }, info);
  },

  async deleteUser(parent, args, ctx, info) {
    const requestedId = { id: args.id };
    const where = { id: args.id };

    var i = 0;
    const date = new Date();
    console.log(requestedId);
    // 1. find the item
    const requests = await ctx.db.query.requests(
      {
        requestedId,
      }, `{ id requestedId name lastName approved dateOne user { id }}`);

    console.log(requests);

    requests.map(request => {
      if(request.approved == 'yes' || request.approved == 'no' ) {
        i++;
      } else if ( request.approved == "confirmed") {
        if( date <= request.dateOne ) {
          i++;
        }
      }

    });

    console.log(i);

     if(i >= 0) {
       throw new Error("You still have open requests, that must be finalized first!")
     }

    //if requests with pending/approved >= 0 return error still open requests
    //if none but requests confirmed >= 0 check that no dates are in the future else throw new error upcoming request

    // 1. find the item
    const user = await ctx.db.query.user({ where }, `{ id }`);
    // 2. Check if they own that item, or have the permissions
    const isUser = user.id === ctx.request.userId;
    const hasPermissions = ctx.request.user.permissions.some(permission =>
      ['ADMIN', 'ITEMDELETE'].includes(permission)
    );

    if (!isUser) {
      throw new Error("This is not your account!");
    }

    // 3. Delete it!
    return ctx.db.mutation.deleteUser({ where }, info);
  },

  async updatePreferences(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // 2. Query the current user
    const currentUser = await ctx.db.query.user(
      {
        where: {
          id: ctx.request.userId,
        },
      },
      info
    );
    // 3. Check if they have permissions to do this
    // 4. Update the permissions
    return ctx.db.mutation.updateUser(
      {
        data: {
          emailPreference: {
            set: args.emailPreference,
          },
        },
        where: {
          id: args.userId,
        },
      },
      info
    );
  },



};

module.exports = Mutations;
