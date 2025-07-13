import { CategoriesActions } from "./CategoriesActionTypes";

export const setCategories = (categoriesRawData) => ({
  type: CategoriesActions.SET_CATEGORIES_DATA,
  payload: categoriesRawData,
});
