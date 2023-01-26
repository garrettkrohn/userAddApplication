import React from "react";
import "./Display.css";

const Display = (props) => {
  return (
    <div className="display-container">
      {props.users.map((user) => (
        <div key={user.id} className="display-user">
          {user.name} ({user.age} years old)
        </div>
      ))}
    </div>
  );
};

export default Display;
