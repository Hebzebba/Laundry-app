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

export const allReducers = combineReducers({
  auth,
});
