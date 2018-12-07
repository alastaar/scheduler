export default function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.request) return tally;
    return tally + cartItem.quantity * cartItem.request.price + 250;
  }, 0);
}
