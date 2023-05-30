// import logo from "./logo.svg";
import "./scss/_common.scss";
import "./App.scss";
import { useState } from "react";

import InputForm from "./components/InputForm";
import ListUsers from "./components/ListUsers";

function App() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState(null);

  const userData = [{ email, userName, age }];

  const addUserHandler = () => {};
  const emailChangeHandler = () => {};
  const userNameChangeHandler = () => {};
  const ageChangeHandler = () => {};
  return (
    <div className="container">
      <h1 className="heading">Users List</h1>
      <InputForm
        onClick={addUserHandler}
        onEmailChange={emailChangeHandler}
        onUsernameChange={userNameChangeHandler}
        onAgeChange={ageChangeHandler}
      />
      <ListUsers userInfo={useData} />
    </div>
  );
}

export default App;
