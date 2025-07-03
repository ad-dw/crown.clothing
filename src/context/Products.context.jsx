import DATA from "../assets/shop-data.json";

import { createContext, useState } from "react";

export const ProductContext = createContext({
  products: [],
});

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(DATA);
  const value = {
    products,
    setProducts,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
