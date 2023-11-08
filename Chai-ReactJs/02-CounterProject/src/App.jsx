import { useState } from "react";
import "./App.css";

function App() {
  // let count=15;
  const [count, setCount] = useState(15);

  const addValue = () => {
    if (count < 25) {
      setCount(count + 1);
    }
  };
  const remValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h1>Welcome To CodeWithUmar!</h1>
      <br />
      <br />
      <h2>Counter Value:- {count} </h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={remValue}>Reamove Value</button>
      {/* () => setCount(count - 1) */}
    </>
  );
}

export default App;
