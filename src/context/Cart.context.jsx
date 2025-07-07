import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isCartOpen: null,
  setIsCartOpen: () => null,
  cartItems: [],
  addCartItems: () => null,
  removeCartItems: () => null,
  clearCartItem: () => null,
  cartCount: 0,
  totalAmount: 0,
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

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const addCartItems = (product) => {
    setCartItems(getAddedCartItems(product, cartItems));
  };

  const removeCartItems = (product) => {
    setCartItems(getRemovedCartItems(product, cartItems));
  };

  const clearCartItem = (product) => {
    setCartItems(getClearedCartItems(product, cartItems));
  };

  useEffect(() => {
    const cartItemsCount = cartItems.reduce(
      (count, item) => (count += item.quantity),
      0
    );
    setCartCount(cartItemsCount);
  }, [cartItems]);

  useEffect(() => {
    const total = cartItems.reduce(
      (amount, item) => (amount += item.quantity * item.price),
      0
    );
    setTotalAmount(total);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    cartCount,
    totalAmount,
    addCartItems,
    removeCartItems,
    clearCartItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
