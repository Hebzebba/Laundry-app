import axios from "axios";
import * as ActionTypes from "./ActionState";

const BASE_URL = "http://localhost:8080/api";

export const loading = () => ({
  type: ActionTypes.LOADING,
});

export const end_loading = () => ({
  type: ActionTypes.END_LOADING,
});

export const loginStat = () => ({
  type: ActionTypes.LOGIN,
});

export const login = (contact, password) => {
  return axios
    .post(`${BASE_URL}/login`, { contact, password })
    .then((res) => res.data)
    .catch((err) => err);
};

export const register = (
  fullName,
  email,
  contact,
  password,
  confirm_password
) => {
  if (password === confirm_password) {
    return axios
      .post(`${BASE_URL}/register`, { fullName, email, contact, password })
      .then((res) => res.data)
      .catch((err) => err);
  } else {
    return "password mistach";
  }
};
