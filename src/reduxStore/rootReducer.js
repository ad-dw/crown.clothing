import { combineReducers } from "redux";
import { UserReducer } from "./User/UserReducer";
import { CategoriesReducer } from "./Categories/CategoriesReducer";

export const rootReducer = combineReducers({
  user: UserReducer,
  categories: CategoriesReducer,
});
