import { useState } from "react";
// import "./App.css";
import { useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  //
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}~`";
    for (let i = 0; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  return (
    <>
      <div className="f-w max-w-lg mx-auto shadow-md rounded-lg px-8 py-8 my-8 text-orange-500 bg-gray-500">
        <h1 className="text-2xl text-center text-white my-3">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Password"
            className="outline-none w-full py-1 px-3"
          />
          <button className="outline-none bg-blue-700 text-white py-0.5 px-3 shrink-0 w-fit">
            Copy
          </button>
        </div>
        <div className="flex text-lg gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              value={length}
              min={6}
              max={25}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="text-1xl">length ({length})</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="inputNumber"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="inputNumber">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="inputCharacter"
              defaultChecked={charAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="inputCharacter">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
