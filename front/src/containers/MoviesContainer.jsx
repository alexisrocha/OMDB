import React from "react";
import Movies from "../components/Movies";
import { connect } from "react-redux";

class MoviesContainer extends React.Component {
  render() {
    return <Movies movies={this.props.movies} />;
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.list,
  };
};

export default connect(mapStateToProps, null)(MoviesContainer);
