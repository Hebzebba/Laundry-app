import * as ActionTypes from "../actions/ActionState";

import { combineReducers } from "redux";

const auth = (authState = false, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return (authState = true);
    default:
      return authState;
  }
};

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case ActionTypes.LOADING:
      return (state = true);
    case ActionTypes.END_LOADING:
      return (state = false);
    default:
      return state;
  }
};

export const allReducers = combineReducers({
  auth,
  loadingReducer,
});
