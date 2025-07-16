export const isCartOpenSelector = (state) => {
  return state.cart.isCartOpen;
};

export const cartItemsSelector = (state) => {
  return state.cart.cartItems;
};

export const cartCountSelector = (state) => {
  return state.cart.cartItems.reduce(
    (count, item) => (count += item.quantity),
    0
  );
};

export const cartTotalSelector = (state) => {
  return state.cart.cartItems.reduce(
    (amount, item) => (amount += item.quantity * item.price),
    0
  );
};
