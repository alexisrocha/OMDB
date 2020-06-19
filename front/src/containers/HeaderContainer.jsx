import React from "react";
import store from "../redux/store";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Header from "../components/Header";
import { fetchMovies } from "../redux/actions/actions";
import { logout } from "../redux/actions/actions-register";

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imputValue: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  render() {
    return (
      <Header
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        valor={this.state.imputValue}
        handleLogOut={this.handleLogOut}
      />
    );
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ imputValue: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchMovies(this.state.imputValue).then(() => {
      return this.props.history.push("/movies");
    });
  }

  handleLogOut() {
    this.props.logout().then(() => {
      return this.props.history.push("/movies");
    });
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    history: ownProps.history,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: (title) => dispatch(fetchMovies(title)),
    logout: () => dispatch(logout()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
);
