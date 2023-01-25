import "./App.css";
import User from "./Components/User";
import Display from "./Components/Display";
import Card from "./UI/Card";
import { useState } from "react";
import Modal from "./UI/Modal";

const DUMMYUSERS = [
  { name: "Max", age: 31 },
  { name: "Garrett", age: 31 },
  { name: "Bob", age: 43 },
  { name: "Phil", age: 21 },
];

function App() {
  const [users, setUsers] = useState(DUMMYUSERS);
  const [modalVisible, setModalVisible] = useState(true);
  const [error, setError] = useState("Name field cannot be blank");

  const addUser = (newUser) => {
    setUsers(() => [...users, newUser]);
  };

  const setErrorState = (error) => {
    setError(error);
  };

  const toggleModal = () => {
    setModalVisible((state) => !state);
  };

  const modal = modalVisible ? (
    <Modal error={error} toggleModal={toggleModal} />
  ) : (
    ""
  );

  return (
    <>
      {modal}
      <Card>
        <User
          addUser={addUser}
          setError={setErrorState}
          toggleModal={toggleModal}
        />
      </Card>
      <Card>
        <Display users={users} />
      </Card>
    </>
  );
}

export default App;
