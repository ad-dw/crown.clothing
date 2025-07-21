import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

const categoriesRawDataSelector = createSelector(
  [selectCategoryReducer],
  (categories) => categories.categoriesRawData
);

export const categoriesSelector = createSelector(
  [categoriesRawDataSelector],
  (categoriesRawData) => {
    return categoriesRawData.reduce((acc, catgory) => {
      const { title, items } = catgory;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);

export const categoriesLoading = createSelector(
  [selectCategoryReducer],
  (categories) => categories.isLoading
);
