import "./App.css";
import User from "./Components/User";
import Display from "./Components/Display";
import Card from "./UI/Card";

function App() {
  return (
    <>
      <Card>
        <User />
      </Card>
      {/* <User /> */}
      <Display />
    </>
  );
}

export default App;
