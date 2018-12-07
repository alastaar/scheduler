const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const { promisify } = require('util');
const { transport, makeANiceEmail } = require('../mail');
const { hasPermission } = require('../utils');

const Mutations = {
  async createItem(parent, args, ctx, info) {
    //TOdo: check if they are logged in
    if(!ctx.request.userId){
      throw new Error('You must be logged in to do things on this site');
    }

    const item = ctx.db.mutation.createItem({
      data: {
        user: {
          connect:{
            id: ctx.request.userId,
          },
        },
        ...args
      }
    }, info)

    return item;
  },

  async createRequest(parent, args, ctx, info) {
    // TODO: Check if they are logged in
    // if(!ctx.request.userId){
    //   throw new Error('You must be logged in to do things on this site');
    // }

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
    const where =  { id: args.id };

    const item = await ctx.db.query.item({ where }, `{ id, title user { id } }`);

    const ownsItem = item.user.id === ctx.request.userId;
    const hasPermissions = ctx.request.user.permissions.some(permission => ['ADMIN', 'ITEMDELETE'].includes(permission));

    if(!ownsItem || !hasPermissions){
      throw new Error('That aint it bruh');
    }

    return ctx.db.mutation.deleteItem({ where }, info)

  },

  async signup(parent, args, ctx, info){
    args.email = args.email.toLowerCase();

    const password = await bcrypt.hash(args.password, 10);


    if(args.artist == 'yes') {
      args.permissions = { set: ['USER', 'TATTOOARTIST'] };
    } else {
      args.permissions = { set: ['USER'] };
    }

    const user = await ctx.db.mutation.createUser({
      data: {
        ...args,
        password,
      },
    }, info);

    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });

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
    return { message: 'Good bye bitch' };
  },

  async requestReset(parent, args, ctx, info) {
    const user = await ctx.db.query.user({ where: { email: args.email }});
    if(!user){
      throw new Error(`No such user found for email ${args.email}`);
    }

    const randomBytesPromiseified = promisify(randomBytes);
    const resetToken = (await randomBytesPromiseified(20)).toString('hex');
    const resetTokenExpiry = Date.now() + 3600000;
    const res = await ctx.db.mutation.updateUser({
      where: {email: args.email },
      data: { resetToken, resetTokenExpiry},
    });

    const mailRes = await transport.sendMail({
      from: 'alistm12@gmail.com',
      to: user.email,
      subject: 'Password Reset Foooool',
      html: makeANiceEmail(`Your password reset link is \n\n <a href="${ process.env.FRONTEND_URL }/reset?resetToken=${ resetToken }">here</a>`)
    });


    return { message: 'Thanks!'};
  },

  async resetPassword(parent, args, ctx, info) {
    if(args.password !== args.confirmPassword) {
      throw new Error("Yo, ur password don\'t match");
    }

      const [user] = await ctx.db.query.users({
        where: {
          resetToken: args.resetToken,
          resetTokenExpiry_gte: Date.now() - 3600000,
        }
      });
      if(!user){
        throw new Error('This token is either invalid or expired!');
      }

      const password = await bcrypt.hash(args.password, 10);

      const updatedUser = await ctx.db.mutation.updateUser({
        where: { email: user.email },
        data: {
          password,
          resetToken: null,
          resetTokenExpiry: null,
        },
      });

      const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);

      ctx.response.cookie('token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 365,
      });

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
    const { userId } = ctx.request;

    if (!userId) {
      throw new Error('You must be logged in!');
    }

    const [existingCartItem] = await ctx.db.query.cartItems({
      where: {
        user: { id: userId },
        request: { id: args.id }
      }
    }, info);

    if(existingCartItem) {
      throw new Error('You can only request one tattoo at a Time');
    }

    return ctx.db.mutation.createCartItem({
      data: {
        user: {
          connect: { id: userId },
        },
        request: {
          connect: { id: args.id },
        },
      },
    }, info);

  },

  async removeFromCart(parent, args, ctx, info){
    const cartItem = await ctx.db.query.cartItem({
      where: {
        id: args.id,
      },
    }, `{id, user{id}}`);

    if(!cartItem) throw new Error('no cart item found');

    if(cartItem.user.id !== ctx.request.userId) {
      throw new Error('fuck you');
    }

    return ctx.db.mutation.deleteCartItem({
      where: {
        id: args.id,
      },
    }, info);
  },


};

module.exports = Mutations;
