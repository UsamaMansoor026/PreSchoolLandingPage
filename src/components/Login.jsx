import React from "react";

const Login = (props) => {
  const { handleVisibility, showSignupform } = props;
  return (
    <form className="form flexCol">
      <div className="flexRow justify-between">
        <h3 className="subHeading">Welcome Back</h3>
        <span className="close" onClick={() => handleVisibility()}>
          X
        </span>
      </div>

      {/* Form Fields */}
      <div className="fieldContainer flexCol">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          className="inputField"
        />
      </div>
      <div className="fieldContainer flexCol">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="********"
          className="inputField"
        />
      </div>

      <p>
        Don't have an account?{" "}
        <span
          onClick={() => {
            handleVisibility();
            showSignupform(true);
          }}
        >
          Register Here
        </span>
      </p>

      <div>
        <button type="button" className="loginBtn">
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
