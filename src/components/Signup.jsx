import React from "react";

const Signup = (props) => {
  const { handleVisibility, showLoginform } = props;
  return (
    <form className="form flexCol">
      <div className="flexRow justify-between">
        <h3 className="subHeading">Register Now</h3>
        <span className="close" onClick={() => handleVisibility()}>
          X
        </span>
      </div>

      {/* Form Fields */}
      <div className="fieldContainer flexCol">
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Maan"
          className="inputField"
        />
      </div>
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
      <div className="fieldContainer flexCol">
        <label htmlFor="cpassword">Confirm Password</label>
        <input
          type="password"
          name="cpassword"
          id="cpassword"
          placeholder="********"
          className="inputField"
        />
      </div>

      <p>
        Already have an account?{" "}
        <span
          onClick={() => {
            handleVisibility();
            showLoginform(true);
          }}
        >
          Login Here
        </span>
      </p>

      <div>
        <button type="button" className="loginBtn">
          Register
        </button>
      </div>
    </form>
  );
};

export default Signup;
