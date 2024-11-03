import React from "react";

const Button = ({ children, bgColor, textColor }) => {
  return (
    <div
      className={`btn ${
        bgColor === "var(--pinkish)" ? "primaryBtn" : "secBtn"
      }`}
      style={{ "--bgColor": bgColor, "--foreColor": textColor }}
    >
      {children}
    </div>
  );
};

export default Button;
