import React from "react";
import "./Display.css";

const Display = (props) => {
  const deleteUser = (id) => {
    props.deleteId(id);
    // console.log(id);
  };

  return (
    <div className="display-container">
      {props.users.map((user) => (
        <div
          key={user.id}
          className="display-user"
          onClick={() => deleteUser(user.id)}
        >
          {user.name} ({user.age} years old)
        </div>
      ))}
    </div>
  );
};

export default Display;
