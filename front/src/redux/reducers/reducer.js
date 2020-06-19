const initialState = {
  list: [],
  one: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ALL_MOVIES":
      return Object.assign({}, state, { list: action.jorge });
    case "ONE_MOVIE":
      return Object.assign({}, state, { one: action.movie });
    default:
      return state;
  }
};
