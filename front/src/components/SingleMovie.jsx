import React from "react";

export default ({ movie }) => {
  return (
    <div>
      {movie.imdbID ? (
        <div
          className="card mb-3"
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
            marginTop: "30px",
            backgroundColor: "#ccc",
          }}
        >
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={movie.Poster}
                className="card-img"
                alt="..."
                style={{ height: "100%", padding: "5px" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">{movie.Plot}</p>
                <p className="card-text">
                  Director : {movie.Director}
                  <th />
                  Genre: {movie.Genre}
                  <th />
                  Language: {movie.Language}
                  <th />
                  Awards: {movie.Awards}
                  <th />
                  Actors: {movie.Actors}
                  <th />
                  Country : {movie.Country}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p> Error</p>
      )}
    </div>
  );
};
