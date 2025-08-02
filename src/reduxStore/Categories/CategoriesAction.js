// import { getCategoriesAndDocuments } from "../../utils/Firebase/firebase.utils";
// import {
//   setCategoriesStart,
//   setCategoriesSuccess,
//   setCategoriesFailed,
// } from "./CategoriesReducer";

// export const fetchCategoriesThunkAsync = () => async (dispatch) => {
//   dispatch(setCategoriesStart());
//   try {
//     const categoriesMap = await getCategoriesAndDocuments();
//     dispatch(setCategoriesSuccess(categoriesMap));
//   } catch (err) {
//     dispatch(setCategoriesFailed(err.message));
//   }
// };
