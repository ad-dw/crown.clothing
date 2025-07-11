import { USER_ACTIONS } from "./UserActionTypes";

export const setUser = (user) => {
  return { type: USER_ACTIONS.UPDATE_USER, payload: user };
};
