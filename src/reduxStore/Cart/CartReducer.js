import { cartActions } from "./CartActiontypes";

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const CartReducer = (state = CART_INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case cartActions.SET_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case cartActions.UPDATE_CART_PRODUCTS:
      return {
        ...state,
        cartItems: payload,
      };
    default:
      return state;
  }
};
