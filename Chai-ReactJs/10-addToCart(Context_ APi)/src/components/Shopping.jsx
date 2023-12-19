import React from "react";
import useCart from "../context/addToContext";

const Shopping = () => {
  const { add } = useCart();

  return <div>Shopping{add} </div>;
};

export default Shopping;
