import { SET_ERRORS, ErrorActionTypes } from "./error.type";

const initialState = {};

export const errorReducer = (
  state = initialState,
  action: ErrorActionTypes
) => {
  switch (action.type) {
    case SET_ERRORS:
      return { ...action.payload };
    default:
      return state;
  }
};
