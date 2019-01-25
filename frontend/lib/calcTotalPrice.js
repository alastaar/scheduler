export default function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.request) return tally;
    if(cartItem.request.price == 0) {
      return tally + cartItem.quantity * cartItem.request.price  + 200;
    } else {
      return tally + cartItem.quantity * cartItem.request.price + 200;
    }
  }, 0);
}
