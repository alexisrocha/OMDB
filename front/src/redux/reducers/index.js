import { combineReducers } from "redux";
import headerReducer from "./reducer";
import reducerRegister from "./reducer-register";

export default combineReducers({
  movies: headerReducer,
  user: reducerRegister,
});
