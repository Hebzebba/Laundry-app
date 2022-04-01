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

const auth = (authState = false, action) => {
  switch (action.type) {
    case "LOGIN":
      return (authState = true);
    default:
      return authState;
  }
};

export const allReducers = combineReducers({
  countertReducer,
  auth,
});
