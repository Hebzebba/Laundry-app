export const incrementReducer = (state = 0, actiion) => {
  switch (actiion.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
};
