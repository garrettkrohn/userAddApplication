import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div className="button-container" onClick={props.customClickEvent}>
      <button className="button">{props.label}</button>
    </div>
  );
};

export default Button;
