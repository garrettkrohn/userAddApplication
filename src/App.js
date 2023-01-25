import "./App.css";
import User from "./Components/User";
import Display from "./Components/Display";
import Card from "./UI/Card";
import { useState } from "react";

const DUMMYUSERS = [
  { name: "Max", age: 31 },
  { name: "Garrett", age: 31 },
  { name: "Bob", age: 43 },
  { name: "Phil", age: 21 },
];

function App() {
  const [users, setUsers] = useState(DUMMYUSERS);

  const newUserAdd = { name: "added", age: 1 };

  const addUser = (newUser) => {
    console.log("add user run");

    setUsers(() => [...users, newUserAdd]);
    console.log(users);
  };

  return (
    <>
      <Card>
        <User addUser={addUser} />
      </Card>
      <Card>
        <Display users={users} />
      </Card>
    </>
  );
}

export default App;
