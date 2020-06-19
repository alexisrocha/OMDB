import axios from "axios";

function register(user) {
  return {
    type: "ONE_USER",
    user,
  };
}

function login(user) {
  return {
    type: "LOGGER",
    user,
  };
}

export const createUser = (email, password) => (dispatch) => {
  return axios
    .post("/user/register", {
      email: email,
      password: password,
    })
    .then((res) => {
      dispatch(register(res.data));
    });
};

export const loginUser = (email, password) => (dispatch) => {
  return axios
    .post("/user/login", {
      email: email,
      password: password,
    })
    .then((res) => {
      dispatch(login(res.data));
    });
};

export const logout = () => (dispatch) => {
  return axios.post("/user/logout").then((res) => {
    dispatch(login({}));
  });
};
