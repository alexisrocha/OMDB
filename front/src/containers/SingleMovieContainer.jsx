import React from "react";
import SingleMovies from "../components/SingleMovie";
import { connect } from "react-redux";
import { fetchMovie } from "../redux/actions/actions";

class SingleMoviesContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchMovie(this.props.id);
  }

  render() {
    return <SingleMovies movie={this.props.movie} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movie: state.movies.one,
    id: ownProps.match.params.id,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovie: (id) => {
      dispatch(fetchMovie(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleMoviesContainer);
