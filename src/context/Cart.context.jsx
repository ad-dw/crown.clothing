import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isCartOpen: null,
  setIsCartOpen: () => null,
  cartItems: [],
  addCartItems: () => null,
  removeCartItems: () => null,
  cartCount: 0,
});

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
    return cartItems.map((item) => {
      return item.id === itemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });
  }
  return cartItems.filter((item) => item.id !== itemToRemove.id);
};

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const addCartItems = (product) => {
    setCartItems(getAddedCartItems(product, cartItems));
  };
  const removeCartItems = (product) => {
    setCartItems(getRemovedCartItems(product, cartItems));
  };
  useEffect(() => {
    const cartItemsCount = cartItems.reduce(
      (count, item) => (count += item.quantity),
      0
    );
    setCartCount(cartItemsCount);
  }, [cartItems]);
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    cartCount,
    addCartItems,
    removeCartItems,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
