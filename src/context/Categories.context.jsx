// import SHOP_DATA from "../assets/shop-data.js";

import { createContext, useEffect, useState } from "react";

import {
  // addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/Firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categories: {},
  isLoading: true,
});

export const CategoriesContextProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesData = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      setIsLoading(false);
      setCategories(categoriesMap);
    };
    getCategoriesData();
  }, []);

  const value = {
    categories,
    setCategories,
    isLoading,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
