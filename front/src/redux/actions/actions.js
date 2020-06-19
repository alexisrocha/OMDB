import axios from "axios";

function oneMovie(movie) {
  return {
    type: "ONE_MOVIE",
    movie,
  };
}

function allMovies(movies) {
  return {
    type: "ALL_MOVIES",
    jorge: movies,
  };
}

export const fetchMovie = (id) => (dispatch) => {
  return axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&i=${id}`)
    .then((res) => {
      return dispatch(oneMovie(res.data));
    });
};

export const fetchMovies = (title) => (dispatch) => {
  return axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&s=${title}`)
    .then((res) => {
      return dispatch(allMovies(res.data.Search));
    });
};
