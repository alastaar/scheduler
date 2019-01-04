const { forwardTo } = require('prisma-binding');
const { hasPermission } = require('../utils');

const Query = {
  items: forwardTo('db'),
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),
  user: forwardTo('db'),
  requests: forwardTo('db'),
  request: forwardTo('db'),
  requestsConnection: forwardTo('db'),

  me(parent, args, ctx, info) {
    if(!ctx.request.userId){
      return null;
    }
    return ctx.db.query.user({
      where: { id: ctx.request.userId },
    }, info);
  },

  async users(parent, args, ctx, info){
    if(!ctx.request.userId) {
      throw new Error('Bruh log in!');
    }

    // hasPermission(ctx.request.user, ['ADMIN', 'PERMISSIONUPDATE']);

    return ctx.db.query.users({}, info);

  },

  async order(parent, args, ctx, info){
    if(!ctx.request.userId){
        throw new Error('You are not logged in bb');
    }

    const order = await ctx.db.query.order({
      where: { id: args.id },
    }, info);

    const ownsOrder = order.user.id === ctx.request.userId;

    if(!ownsOrder) {
      throw new Error('You cant see this bb');
    }

    return order;

  },

  async orders(parent, args, ctx, info) {
    const { userId } = ctx.request;
    if (!userId) {
      throw new Error('you must be signed in!');
    }
    return ctx.db.query.orders(
      {
        where: {
          user: { id: userId },
        },
      },
      info
    );
  },

};

module.exports = Query;
