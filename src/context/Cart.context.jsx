import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isCartOpen: null,
  setIsCartOpen: () => null,
  cartItems: [],
  updateCartItems: () => null,
  cartCount: 0,
});

const getUpdatedCartItems = (item, cartItems) => {
  const itemToUpdate = cartItems.find((ele) => ele.id === item.id);
  console.log(itemToUpdate);
  if (!itemToUpdate) {
    return [...cartItems, { ...item, quantity: 1 }];
  }
  return cartItems.map((product) => {
    return product.id === itemToUpdate.id
      ? { ...itemToUpdate, quantity: product.quantity + 1 }
      : product;
  });
};

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const updateCartItems = (product) => {
    setCartItems(getUpdatedCartItems(product, cartItems));
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
    updateCartItems,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
