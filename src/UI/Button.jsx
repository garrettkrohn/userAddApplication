import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div className="button">
      <div className="button-content">{props.label}</div>
    </div>
  );
};

export default Button;
