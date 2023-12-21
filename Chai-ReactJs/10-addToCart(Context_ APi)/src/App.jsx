import { useState, useEffect } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Shopping from "./components/Shopping";
import { AddToCartProvider } from "./context/addToContext";
import Bill from "./components/Bill";

function App() {
  const [add, setAdd] = useState(0);
  const [bill, setBill] = useState(0);
  const [i11,setI11] = useState(0)
  const Added = add + 1;
  const Removed = add - 1;

  const addToCart = () => {
    setAdd(Added);
    setBill(bill+90000);
    setI11(i11+90000)
  };
  const removeToCart = () => {
    setAdd(Removed);
    // setBill(bill-1050);
    setI11(i11-90000)
  };
  // useEffect(() => {
  //   document.querySelector('html').classList.remove("Added","Removed");
  //   document.querySelector('html').classList.add(add)
  // }, [add])

  return (
    <>
      <AddToCartProvider value={{ add, bill, addToCart, removeToCart }}>
        <div>
          <div className="flex justify-center items-center w-full">
            <h1 className="text-4xl bg-slate-400 flex justify-center items-center ">
              Add to cart
            </h1>
            <Shopping />
            <div className="flex justify-end items-center m-10 ">
              <Bill />
            </div>
          </div>

          <div>
            <Buttons />
          </div>
        </div>
      </AddToCartProvider>
    </>
  );
}

export default App;
