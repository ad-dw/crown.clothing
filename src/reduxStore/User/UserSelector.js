import { createSelector } from "reselect";

const selectUserReducer = (state) => state.user;

export const userSelector = createSelector(
  [selectUserReducer],
  (user) => user.currentUser
);
