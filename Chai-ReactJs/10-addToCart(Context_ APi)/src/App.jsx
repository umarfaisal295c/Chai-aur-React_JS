import { useState,useEffect } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Shopping from "./components/Shopping";
import { AddToCartProvider } from "./context/addToContext";

function App() {
  const [add, setAdd] = useState(0);
  const Added=add+1;
  const Removed=add-1;
  const addToCart = () => {
    setAdd(Added);
  };
  const removeToCart = () => {
    setAdd(Removed);
  };
  // useEffect(() => {
  //   document.querySelector('html').classList.remove("Added","Removed");
  //   document.querySelector('html').classList.add(add)
  // }, [add])
  
  return (
    <>
      <AddToCartProvider value={{ add, addToCart, removeToCart }}>
        <div className="flex justify-center items-center">
          <h1 className="text-4xl bg-slate-400 flex justify-center items-center ">
            Add to cart
          </h1>
          <Shopping />
        </div>
        <div>
          <Buttons />
        </div>
      </AddToCartProvider>
    </>
  );
}

export default App;
