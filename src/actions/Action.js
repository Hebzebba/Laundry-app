export const increase = (type, payload) => {
  return {
    type: "INCREMENT",
  };
};

export const decrease = (type, payload) => {
  return {
    type: "DECREMENT",
  };
};

export const loginStat = (type, payload) => {
  return {
    type: "LOGIN",
  };
};
