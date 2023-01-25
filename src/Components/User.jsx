import React, { useState } from "react";
import "./User.css";
import Button from "../UI/Button";

const User = (props) => {
  const [newUser, setNewUser] = useState({ name: "", age: "" });

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(newUser);
    console.log("handler run");
    props.addUser(newUser);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setNewUser({
      ...newUser,
      [event.target.name]: value,
    });
  };

  return (
    <div className="card">
      <form onSubmit={addUserHandler} className="user-container">
        <label className="user-name">Username</label>
        <input type="text" name="name" onChange={handleChange} />
        <label className="user-age">Age (Years)</label>
        <input type="text" name="age" onChange={handleChange} />
        <Button type="submit" label="Add User" action={props.addUser} />
      </form>
    </div>
  );
};

export default User;
