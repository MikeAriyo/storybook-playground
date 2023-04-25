import React from "react";
import "./Button.css";

const Button = ({ variant, children, ...rest }) => {
  return (
    <button className={`button ${variant}`} {...rest}>
      {" "}
      {children}
    </button>
  );
};

export default Button;
