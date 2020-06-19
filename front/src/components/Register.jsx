import React from "react";

export default ({ handleSubmit, handleChangeEmail, handleChangePassword }) => {
  return (
    <div>
      <form
        style={{ padding: "30px", margin: "0 auto" }}
        onSubmit={handleSubmit}
      >
        <h3> Create a new account or Log In</h3>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            style={{ width: "30%" }}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChangeEmail}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            style={{ width: "30%" }}
            id="exampleInputPassword1"
            onChange={handleChangePassword}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
