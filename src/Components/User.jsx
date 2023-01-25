import React from "react";
import "./User.css";
import Button from "../UI/Button";

const User = () => {
  return (
    <div className="card">
      <div className="user-container">
        <div className="user-name">Username</div>
        <input />
        <div className="user-age">Age (Years)</div>
        <input />
        <Button label="Add User" />
      </div>
    </div>
  );
};

export default User;
