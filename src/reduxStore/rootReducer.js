import { combineReducers } from "@reduxjs/toolkit";
import { UserReducer } from "./User/UserSlice";
import { CategoriesReducer } from "./Categories/CategoriesSlice";
import { CartReducer } from "./Cart/CartReducer";

export const rootReducer = combineReducers({
  user: UserReducer,
  categories: CategoriesReducer,
  cart: CartReducer,
});
