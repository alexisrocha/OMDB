import React from "react";
import { Link } from "react-router-dom";

const header = ({ handleChange, handleSubmit, valor, handleLogOut }) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar navbar-dark bg-dark"
        bg="dark"
        variant="dark"
      >
        <Link to="/movies">
          <h1 className="navbar-brand" href="#">
            OMDB
          </h1>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <Link to="/register">
              <li className="nav-item">
                <h4 className="nav-link" href="#">
                  Sign in
                </h4>
              </li>
            </Link>

            <Link to="/login">
              <li className="nav-item">
                <h4 className="nav-link" href="#">
                  Log In
                </h4>
              </li>
              <li className="nav-item"></li>
            </Link>

            <Link to="/movies">
              <li className="nav-link" href="#" onClick={handleLogOut}>
                <h4 className="nav-item">Log Out</h4>
                <li className="nav-item"></li>
              </li>
            </Link>
          </ul>
          <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              value={valor}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-info" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default header;
