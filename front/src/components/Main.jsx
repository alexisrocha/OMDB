import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HeaderContainer from "../containers/HeaderContainer";
import MoviesContainer from "../containers/MoviesContainer";
import SingleMovieContainer from "../containers/SingleMovieContainer";
import RegisterContainer from "../containers/RegisterContainer";
import LoginContainer from "../containers/LoginContainer";
import PrivateContainer from "../containers/PrivateContainer";

export default () => {
  return (
    <div>
      <HeaderContainer />
      <div>
        <Switch>
          <Route exact path="/movies" component={MoviesContainer}></Route>
          <Route
            exact
            path="/movies/:id"
            component={SingleMovieContainer}
          ></Route>
          <Route exact path="/register" component={RegisterContainer}></Route>
          <Route exact path="/login" component={LoginContainer}></Route>
          <Route exact path="/private" component={PrivateContainer}></Route>
          <Redirect to="/movies" />
        </Switch>
      </div>
    </div>
  );
};
