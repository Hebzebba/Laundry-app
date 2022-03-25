import React from "react";
import { combineReducers } from "redux";

export const countertReducer = (state = 0, actiion) => {
  switch (actiion.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const auth = (state = false, action) => {
  switch (action.type) {
    case "LOGGEDIN":
      return (state = true);
    default:
      return state;
  }
};

export const allReducers = combineReducers({
  countertReducer,
  auth,
});
