import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const submit = (e) => {
    e.preventDefault();
    setUser({ name, password });
  };
  return (
    <>
      <h2>Login Page</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={submit}>Submit😎</button>
    </>
  );
};

export default Login;
