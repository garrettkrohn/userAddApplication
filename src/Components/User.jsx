import React, { useState } from "react";
import "./User.css";
import Button from "../UI/Button";

const User = (props) => {
  const [newUser, setNewUser] = useState({});

  const createNewUserObject = () => {
    const name = "newName";
    const age = 100;
    return { name: name, age: age };
  };

  return (
    <div className="card">
      <div className="user-container">
        <div className="user-name">Username</div>
        <input />
        <div className="user-age">Age (Years)</div>
        <input />
        <Button label="Add User" addUser={props.addUser} />
      </div>
    </div>
  );
};

export default User;
