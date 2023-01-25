import React from "react";
import "./Button.css";

const Button = (props) => {
  const buttonPressed = () => {
    console.log("button");
  };

  return (
    <button className="button" onClick={props.addUser}>
      {props.label}
    </button>
  );
};

export default Button;
