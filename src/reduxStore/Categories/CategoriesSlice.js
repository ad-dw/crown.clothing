import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../utils/Firebase/firebase.utils";

const INITIAL_CATEGORIES_STATE = {
  categoriesRawData: [],
  isLoading: false,
  error: null,
};

export const fetchCategoriesThunkAsync = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const categoriesMap = await getCategoriesAndDocuments();
    return categoriesMap;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_CATEGORIES_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesThunkAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategoriesThunkAsync.fulfilled, (state, action) => {
        state.categoriesRawData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCategoriesThunkAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const CategoriesReducer = categoriesSlice.reducer;
