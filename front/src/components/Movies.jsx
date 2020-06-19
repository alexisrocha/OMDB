import React from "react";
import { Link } from "react-router-dom";

export default ({ movies }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        margin: "10px",
      }}
    >
      {movies.length > 1 ? (
        movies.map((movie) => {
          return (
            <div
              className="card"
              style={{
                width: "18rem",
                margin: "20px",
                backgroundColor: "#343a40",
              }}
              key={movie.imdbID}
            >
              <Link to={`/movies/${movie.imdbID}`}>
                <img
                  src={movie.Poster}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "300px" }}
                />
              </Link>
              <h5 style={{ textAlign: "center", color: "white" }}>
                {movie.Title}
              </h5>
            </div>
          );
        })
      ) : (
        <div>
          <h1>Welcome to my OMDB</h1>
        </div>
      )}
    </div>
  );
};
