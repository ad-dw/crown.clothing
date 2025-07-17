import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const isCartOpenSelector = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const cartItemsSelector = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const cartCountSelector = createSelector(
  [cartItemsSelector],
  (cartItems) => {
    return cartItems.reduce((count, item) => (count += item.quantity), 0);
  }
);

export const cartTotalSelector = createSelector(
  [cartItemsSelector],
  (cartItems) => {
    return cartItems.reduce(
      (amount, item) => (amount += item.quantity * item.price),
      0
    );
  }
);
