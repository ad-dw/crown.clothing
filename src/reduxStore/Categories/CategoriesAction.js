import { getCategoriesAndDocuments } from "../../utils/Firebase/firebase.utils";
import { CategoriesActions } from "./CategoriesActionTypes";

export const fetchCategoriesThunkAsync = () => async (dispatch) => {
  dispatch({ type: CategoriesActions.SET_CATEGORIES_START });
  try {
    const categoriesMap = await getCategoriesAndDocuments();
    dispatch({
      type: CategoriesActions.SET_CATEGORIES_SUCCESS,
      payload: categoriesMap,
    });
  } catch (err) {
    dispatch({
      type: CategoriesActions.SET_CATEGORIES_FAILED,
      payload: err.message,
    });
  }
};
