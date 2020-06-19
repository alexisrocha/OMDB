const initialState = {
  user: {},
  loggeado: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ONE_USER":
      return Object.assign({}, state, { user: action.user });
    case "LOGGER":
      return Object.assign({}, state, { loggeado: action.user });
    default:
      return state;
  }
};
