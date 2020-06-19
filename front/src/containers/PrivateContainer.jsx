import React from "react";
import Private from "../components/Private";
import { connect } from "react-redux";

class PrivateContainer extends React.Component {
  render() {
    return (
      <div>
        <Private></Private>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, null)(PrivateContainer);
