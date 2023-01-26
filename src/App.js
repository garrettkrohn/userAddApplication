import "./App.css";
import User from "./Components/User";
import Display from "./Components/Display";
import Card from "./UI/Card";
import { useState } from "react";
import Modal from "./UI/Modal";

const DUMMYUSERS = [
  { id: 1, name: "Max", age: 31 },
  { id: 2, name: "Garrett", age: 31 },
  { id: 3, name: "Bob", age: 43 },
  { id: 4, name: "Phil", age: 21 },
];

function App() {
  const [users, setUsers] = useState(DUMMYUSERS);
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState("Name field cannot be blank");

  const addUser = (newUserName, newUserAge) => {
    const length = users.length - 1;
    const id = users[length].id + 1;
    setUsers(() => [
      ...users,
      {
        id: id,
        name: newUserName,
        age: newUserAge,
      },
    ]);
  };

  const setErrorState = (error) => {
    setError(error);
  };

  const toggleModal = () => {
    setModalVisible((state) => !state);
  };

  const deleteId = (idToDelete) => {
    const newArray = users.filter((item) => item.id !== idToDelete);
    setUsers(newArray);
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
        <Display users={users} deleteId={deleteId} />
      </Card>
    </>
  );
}

export default App;
