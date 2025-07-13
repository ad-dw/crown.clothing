import { CategoriesActions } from "./CategoriesActionTypes";

const INITIAL_CATEGORIES_STATE = {
  categoriesRawData: [],
};

export const CategoriesReducer = (
  state = INITIAL_CATEGORIES_STATE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case CategoriesActions.SET_CATEGORIES_DATA:
      return {
        ...state,
        categoriesRawData: payload,
      };
    default:
      return state;
  }
};
