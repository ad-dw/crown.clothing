import { USER_ACTIONS } from "./UserActionTypes";
const INITIAL_STATE = {
  currentUser: null,
};

export const UserReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTIONS.UPDATE_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
