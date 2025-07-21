import { CategoriesActions } from "./CategoriesActionTypes";

const INITIAL_CATEGORIES_STATE = {
  categoriesRawData: [],
  isLoading: false,
  error: null,
};

export const CategoriesReducer = (
  state = INITIAL_CATEGORIES_STATE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case CategoriesActions.SET_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case CategoriesActions.SET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesRawData: payload,
        isLoading: false,
      };
    case CategoriesActions.SET_CATEGORIES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
