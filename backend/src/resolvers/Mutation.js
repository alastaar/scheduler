const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const { promisify } = require('util');
const { transport, makeANiceEmail } = require('../mail');
const { hasPermission, hasPreference } = require('../utils');
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


    return item;
  },

  async createRequest(parent, args, ctx, info) {

    const user = await ctx.db.query.user({ where: { id: args.requestedId  } },
      `{
        id
        name
        lastName
        email
        password
        emailPreference
        price
      }`
    );

    const user2 = await ctx.db.query.user({ where: { id: ctx.request.userId  } },
      `{
        id
        name
        lastName
        email
        password
        emailPreference
        price
      }`
    );


    const request = await ctx.db.mutation.createRequest({
      data: {
        user: {
          connect:{
            id: ctx.request.userId,
          },
        },
        ...args,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        price: user.price,
      }
    }, info);

    console.log(user.emailPreference);

    const hasPreference = user.emailPreference.some(preference =>
      ['REQUESTCREATED'].includes(preference)
    );

    const hasPreference2 = user2.emailPreference.some(preference =>
      ['REQUESTCREATED'].includes(preference)
    );



    if(request && hasPreference) {
      const mailRes = await transport.sendMail({
        from: 'palazar@palazar.com',
        to: user.email,
        subject: 'You have a new Appointment Request',
        html: makeANiceEmail(`Your have new appointment request!
        \n\n
        <a href="${process.env
          .FRONTEND_URL}/request-item?id=${request.id}">Click Here to check it out</a>`),
      });
    }

    if(request && hasPreference2) {
      const mailRes1 = await transport.sendMail({
        from: 'palazar@palazar.com',
        to: user2.email,
        subject: 'Appointment Submission',
        html: makeANiceEmail(`Your have new successfully requested an Appointment!
        \n\n
        For ${user.name}
        \n\n
        <a href="${process.env
          .FRONTEND_URL}/request-item?id=${request.id}">Click Here to see the status</a>`),
      });

    }

    return request;
  },

  async updateRequest(parent, args, ctx, info) {


    const user = await ctx.db.query.user({ where: { id: args.requestedId } });

    const request = await ctx.db.mutation.updateRequest({
      data: {
        user: {
          connect:{
            id: ctx.request.userId,
          },
        },
        ...args,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        price: user.price,
        rejectReason: null,
      }
    }, info);

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
          emailPreference: { set: ['REQUESTCREATED', 'REQUESTAPPROVED', 'REQUESTCONFIRMED', 'REQUESTREJECTED', 'REQUESTDELETED', 'APPOINTMENTTOMORROW', 'UPDATEDSTRIPEACCOUNT', 'UPDATEDCARD', 'CREATECHAT', 'NEWCHATMESSAGE'] },
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
    if(user && user.artist == "yes") {
      const mailRes = await transport.sendMail({
        from: 'palazar@palazar.com',
        to: user.email,
        subject: 'Thanks for Signing Up',
        html: makeANiceEmail(`To start taking appointment requests and recieving payouts we need some information.
        \n\n
        Please fill in information so that people can find you!
        <a href="${process.env.FRONTEND_URL}/update?id=${user.id}">HERE</a>
        \n\n
        Please fill in card information to recieve payouts!
        <a href="${process.env.FRONTEND_URL}/bank?id=${user.id}">HERE</a>
        \n\n
        And Finally information so that we can process your account!
        <a href="${process.env.FRONTEND_URL}/accupdate?id=${user.id}">HERE</a>
        \n\n
        Thanks for signing up for palazar!
        `),
      });

    } else if(user && user.artist == "no") {

      const mailRes = await transport.sendMail({
        from: 'palazar@palazar.com',
        to: user.email,
        subject: 'Thanks for Signing Up!',
        html: makeANiceEmail(``),
      });
    }

    // Finalllllly we return the user to the browser
    return user;
  },
  async signin(parent, { email, password }, ctx, info) {
    // 1. check if there is a user with that email
    const user = await ctx.db.query.user({ where: { email } },
      `{
        id
        name
        lastName
        email
        password
      }`
    );

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
    const user = await ctx.db.query.user({ where: { email: args.email } },
      `{
          id
          name
          lastName
          email
        }`
      );

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
      from: 'palazar@palazar.com',
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

  async updateBlackoutDates(parent, args, ctx, info) {
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
          blackOut: {
            set: args.blackOut,
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

async approveRequests(parent, args, ctx, info) {


    const updates = { ...args };

    const request = await ctx.db.query.request(
      {
        where: {
          id: args.id,
        },
      }, `{ id name user { id email emailPreference }}`);

    delete updates.id;

    const hasPreference = request.user.emailPreference.some(preference =>
      ['REQUESTAPPROVED'].includes(preference)
    );

    if(hasPreference){
      const mailRes = await transport.sendMail({
        from: 'palazar@palazar.com',
        to: request.user.email,
        subject: 'Your Request has been approved',
        html: makeANiceEmail(`Your appointment request has been approved!
        \n\n
        <a href="${process.env
          .FRONTEND_URL}/request-item?id=${args.id}">Please go here to pay for the deposit!</a>`),
      });
    }



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

  async rejectRequests(parent, args, ctx, info) {

    const updates = { ...args };

    delete updates.id;

    const request = await ctx.db.query.request(
    {
      where: {
        id: args.id,
      },
    }, `{ id name email user { id email emailPreference }}`);

    const hasPreference = request.user.emailPreference.some(preference =>
      ['REQUESTREJECTED'].includes(preference)
    );

    if(hasPreference) {
      const mailRes = await transport.sendMail({
        from: 'palazar@palazar.com',
        to: request.email,
        subject: 'Your Request has been Rejected',
        html: makeANiceEmail(`Your appointment request has been rejected!
        \n\n
        Because ${args.rejectReason}
        \n\n
        <a href="${process.env
          .FRONTEND_URL}/request-item?id=${args.id}">Please go here to see why and update your request!</a>`),
      });
    }


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

  async addBlackoutRanges(parent, args, ctx, info) {
    // 1. Make sure they are signed in
    const { userId } = ctx.request;
    if (!userId) {
      throw new Error('You must be signed in soooon');
    }
    // 2. Query the users current car
    // 4. If its not, create a fresh CartItem for that user!
    return ctx.db.mutation.createBlackOutDates(
      {
        data: {
          ...args,
          user: {
            connect: { id: userId },
          },
        },
      },
      info
    );
  },

  async deleteBlackOutRanges(parent, args, ctx, info) {
    // 1. Find the cart item
    const blackoutRange = await ctx.db.query.blackOutDates(
      {
        where: {
          id: args.id,
        },
      },
      `{ id, user { id }}`
    );
    // 1.5 Make sure we found an item
    if (!blackoutRange) throw new Error('No CartItem Found!');
    // 2. Make sure they own that cart item
    if (blackoutRange.user.id !== ctx.request.userId) {
      throw new Error('Cheatin huhhhh');
    }
    // 3. Delete that cart item
    return ctx.db.mutation.deleteBlackOutDates(
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
      emailPreference
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


    const requested = await ctx.db.query.user(
        { where: { id: requestedId } },
        `{
          email
          accId
          emailPreference
          }`
      );

    const fee = amount * .05;

    if(amount == 2) {
      const charge = await stripe.charges.create({
        amount: amount,
        currency: 'USD',
        source: args.token,
        destination: requested.accId,
        application_fee: 200,
        },function(err, charge) {
            stripe.accounts.retrieve(
              requested.accId,
              function(err, account) {
              }
          );
      });
    } else {
      const charge = await stripe.charges.create({
        amount: amount,
        currency: 'USD',
        source: args.token,
        destination: requested.accId,
        application_fee: 200,
        },function(err, charge) {
            stripe.accounts.retrieve(
              requested.accId,
              function(err, account) {
              }
          );
      });
    }

    const finalCharge = amount + fee;
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

    // 5. create the Order
    const order = await ctx.db.mutation.createOrder({
      data: {
        total: amount,
        charge: requestedId,
        requests: { create: orderItems },
        user: { connect: { id: userId } },
      },
    });

    const hasPreference = requested.emailPreference.some(preference =>
      ['REQUESTCONFIRMED'].includes(preference)
    );

    const hasPreference2 = user.emailPreference.some(preference =>
      ['REQUESTCONFIRMED'].includes(preference)
    );

    if(order && hasPreference) {
      const mailRes = await transport.sendMail({
        from: 'palazar@palazar.com',
        to: requested.email,
        subject: 'A Requested appointment has been confirmed',
        html: makeANiceEmail(`An appointment has been confirmed. This means you will be getting paid shortly.
        \n\n
        <a href="${process.env
          .FRONTEND_URL}/order?id=${order.id}">Check here to see the order information!</a>`),
      });
    }

    if(order && hasPreference2) {
      const mailRes1 = await transport.sendMail({
        from: 'palazar@palazar.com',
        to: user.email,
        subject: 'Your appointment has been confirmed. Thanks for creating it and using Palazar.',
        html: makeANiceEmail(`Your appointment has been confirmed. Thanks for creating it and using Palazar.
        \n\n
        Your total was : ${finalCharge} including the 5% fee to palazar.
        <a href="${process.env
          .FRONTEND_URL}/order?id=${order.id}">Check here to see the order information!</a>`),
      });
    }
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
    const account = await stripe.accounts.create({
      country: "US",
      type: "custom",
      default_currency: "USD",
      account_token: token,
    }).then(function(acct) {
      accountId = acct.id;
    });


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
    const account = await stripe.accounts.createExternalAccount(
      accountId,
      { external_account: token}).
      then(function(err, card) {
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
      const account = await stripe.accounts.createExternalAccount(
        accountId,
        {
          external_account: token,
         }).
        then(function(err, card) {
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

    const ownsRequest2 = request.user.id === ctx.request.userId;


    if (!ownsRequest ) {
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
    // 1. find the item
    const requests = await ctx.db.query.requests(
      {
        requestedId,
      }, `{ id requestedId name lastName approved dateOne user { id }}`);


    requests.map(request => {
      if(request.approved == 'yes' || request.approved == 'no' ) {
        i++;
      } else if ( request.approved == "confirmed") {
        if( date <= request.dateOne ) {
          i++;
        }
      }

    });


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

  async createChat(parent, args, ctx, info) {

    const { userId } = ctx.request;
    if (!userId) {
      throw new Error('You must be logged in to do that!');
    }

    const [chats] = await ctx.db.query.chats(
      {
        where: {
          vendor: args.vendor,
          client: args.client,
        },
      }, `{ id vendor client}`);

      const user1 = await ctx.db.query.user(
        {
          where: {
            id: args.vendor,
          },
        }, `{ email emailPreference}`);

      const user2 = await ctx.db.query.user(
        {
          where: {
            id: args.client,
          },
        }, `{ email emailPreference}`);


    if(chats) {
      return ctx.db.mutation.updateChat(
        {
          where: { id: chats.id },
          data: {
            ...args,
          },
        },
        info
      );
    }

    const chat = await ctx.db.mutation.createChat(
      {
        data: {
          ...args,
        },
      },
      info
    );

    const hasPreference = user1.emailPreference.some(preference =>
      ['CREATECHAT'].includes(preference)
    );

    const hasPreference2 = user2.emailPreference.some(preference =>
      ['CREATECHAT'].includes(preference)
    );


    if(chat && hasPreference) {
      const mailRes = await transport.sendMail({
        from: 'palazar@palazar.com',
        to: user1.email,
        subject: 'There is a new chat for you!',
        html: makeANiceEmail(`
        <a href="${process.env
          .FRONTEND_URL}/chat?id=${chat.id}">See it here</a>`),
      });
    }

    if(chat && hasPreference2) {

      const mailRes1 = await transport.sendMail({
        from: 'palazar@palazar.com',
        to: user2.email,
        subject: 'There is a new chat for you!',
        html: makeANiceEmail(`
        <a href="${process.env
          .FRONTEND_URL}/chat?id=${chat.id}">See it here</a>`),
      });
    }


    if(args.vendor !== args.client) {
      const res = await ctx.db.mutation.updateUser(
        {
          data: {
            chats: {
              set: {
                id: chat.id,
                vendor: chat.vendor,
                client: chat.client,
              },
            },
          },
          where: {
            id: args.vendor,
          },
        },
        info
      );

      const res2 = await ctx.db.mutation.updateUser(
        {
          data: {
            chats: {
              set: {
                id: chat.id,
                vendor: chat.vendor,
                client: chat.client,
              },
            },
          },
          where: {
            id: args.client,
          },
        },
        info
      );

    } else {
      const res = await ctx.db.mutation.updateUser(
        {
          data: {
            chats: {
              set: {
                id: chat.id,
              },
            },
          },
          where: {
            id: args.vendor,
          },
        },
        info
      );

    }
    return chat;
  },

  async createChatMessage(parent, args, ctx, info) {

    const { userId } = ctx.request;

    if (!userId) {
      throw new Error('You must be logged in to do that!');
    }


    const chatMessage = await ctx.db.mutation.createChatMessage(
      {
        data: {
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

    const chat1 = await ctx.db.query.chat(
      {
        where: {
          id: args.chatId,
        },
      }, `{ client vendor }`);

    const user1 = await ctx.db.query.user(
      {
        where: {
          id: chat1.vendor,
        },
      }, `{ email emailPreference}`);

    const user2 = await ctx.db.query.user(
      {
        where: {
          id: chat1.client,
        },
      }, `{ id email emailPreference}`);


    const res1 = await ctx.db.mutation.updateChat(
      {
        data: {
          clientMessages: {
            connect: { id: chatMessage.id },
          },
        },
        where: {
          id: args.chatId,
        },
      },
      info
    );

    const hasPreference = user1.emailPreference.some(preference =>
      ['CREATECHAT'].includes(preference)
    );

    const hasPreference2 = user2.emailPreference.some(preference =>
      ['NEWCHATMESSAGE'].includes(preference)
    );


    if(res1) {
      if(ctx.request.userId != user1.id && hasPreference) {
        const mailRes = await transport.sendMail({
          from: 'palazar@palazar.com',
          to: user2.email,
          subject: 'You have a new message!',
          html: makeANiceEmail(`Below is a new message
            \n\n
            ${args.message}
            \n\n
            \n\n
            <a href="${process.env
            .FRONTEND_URL}/chat?id=${args.chatId}">Click here to respond</a>`),
        });
      } else {
        if( hasPreference2) {
          const mailRes = await transport.sendMail({
            from: 'palazar@palazar.com',
            to: user1.email,
            subject: 'You have a new message!',
            html: makeANiceEmail(`Below is a new message
              \n\n
              ${args.message}
              \n\n
              <a href="${process.env
              .FRONTEND_URL}/chat?id=${args.chatId}">Click here to respond</a>`),
          });
        }
      }
    }



    return chatMessage;

  },



};

module.exports = Mutations;
