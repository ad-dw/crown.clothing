import { cartActions } from "./CartActiontypes";

const getAddedCartItems = (item, cartItems) => {
  const itemToUpdate = cartItems.find((ele) => ele.id === item.id);
  if (!itemToUpdate) {
    return [...cartItems, { ...item, quantity: 1 }];
  }
  return cartItems.map((product) => {
    return product.id === itemToUpdate.id
      ? { ...itemToUpdate, quantity: product.quantity + 1 }
      : product;
  });
};

const getRemovedCartItems = (item, cartItems) => {
  const itemToRemove = cartItems.find((ele) => ele.id === item.id);
  if (itemToRemove.quantity > 1) {
    return cartItems.map((product) => {
      return product.id === itemToRemove.id
        ? { ...product, quantity: product.quantity - 1 }
        : product;
    });
  }
  return cartItems.filter((product) => product.id !== itemToRemove.id);
};

const getClearedCartItems = (item, cartItems) => {
  return cartItems.filter((product) => product.id !== item.id);
};

export const setIsCartOpen = (cartOpen) => ({
  type: cartActions.SET_CART_OPEN,
  payload: cartOpen,
});

export const addCartItems = (product, cartItems) => ({
  type: cartActions.UPDATE_CART_PRODUCTS,
  payload: getAddedCartItems(product, cartItems),
});

export const removeCartItems = (product, cartItems) => ({
  type: cartActions.UPDATE_CART_PRODUCTS,
  payload: getRemovedCartItems(product, cartItems),
});

export const clearCartItem = (product, cartItems) => ({
  type: cartActions.UPDATE_CART_PRODUCTS,
  payload: getClearedCartItems(product, cartItems),
});
