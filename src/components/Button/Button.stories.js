import React from "react;";

const Button = ({ variant, children, ...rest }) => {
  return (
    <button className={`button ${variant}`} {...rest}>
      {" "}
      {children}
    </button>
  );
};

export default Button;
