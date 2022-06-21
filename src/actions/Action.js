import axios from "axios";
import * as ActionTypes from "./ActionState";

// Dev
// const BASE_URL = "http://localhost:8080/api";
// Prod
const BASE_URL = "https://labmass.herokuapp.com/api";

export const loading = () => ({
  type: ActionTypes.LOADING,
});

export const end_loading = () => ({
  type: ActionTypes.END_LOADING,
});

export const loginStat = () => ({
  type: ActionTypes.LOGIN,
});

export const getUserInfo = (payload) => ({
  type: ActionTypes.FETCH_USER_DATA,
  payload,
});

export const getCordinate = (payload) => ({
  type: ActionTypes.CORDINATE,
  payload,
});

export const login = (email, password) => {
  return axios
    .post(`${BASE_URL}/user/login`, { email, password })
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
      .post(`${BASE_URL}/user/register`, { fullName, email, contact, password })
      .then((res) => res.data)
      .catch((err) => err);
  } else {
    return "password mistach";
  }
};

export const userData = (user_id) => {
  return axios
    .get(`${BASE_URL}/user/info?user_id=${user_id}`)
    .then(({ data }) => {
      localStorage.setItem("user_name", data.fullName);
      localStorage.setItem("contact", data.contact);
    })
    .catch((err) => err);
};

export const createOrder = (
  email,
  user_name,
  laundryType,
  telephoneNumber,
  date
) => {
  return axios
    .post(`${BASE_URL}/order`, {
      email,
      user_name,
      laundryType,
      telephoneNumber,
      date,
    })
    .then((res) => res.data)
    .catch((err) => err);
};
