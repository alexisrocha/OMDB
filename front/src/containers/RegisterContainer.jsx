import React from "react";
import Register from "../components/Register";
import { connect } from "react-redux";
import { createUser } from "../redux/actions/actions-register";

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createUser(this.state.email, this.state.password);
  }

  handleChangeEmail(event) {
    const change = event.target.value;
    this.setState({ email: change });
  }

  handleChangePassword(event) {
    const change = event.target.value;
    this.setState({ password: change });
  }

  render() {
    return (
      <Register
        handleSubmit={this.handleSubmit}
        handleChangeEmail={this.handleChangeEmail}
        handleChangePassword={this.handleChangePassword}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (email, password) => dispatch(createUser(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(RegisterContainer);
