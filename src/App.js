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

  const addUser = (newUser) => {
    setUsers(() => [...users, newUser]);
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
