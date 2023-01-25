import React from "react";
import "./Display.css";

const Display = (props) => {
  const randomId = () => {
    return Math.random() * 1000;
  };
  return (
    <div className="display-container">
      {props.users.map((user) => (
        <div key={randomId()} className="display-user">
          {user.name} ({user.age} years old)
        </div>
      ))}
    </div>
  );
};

export default Display;
