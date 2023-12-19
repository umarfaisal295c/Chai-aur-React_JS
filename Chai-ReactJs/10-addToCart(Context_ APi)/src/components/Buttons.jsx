import React from "react";
import useCart from "../context/addToContext";

const Buttons = () => {
  const { addToCart, removeToCart } = useCart();
  const AddShopping = () => {
    console.log("Add");
    addToCart();
  };
  const RemShopping = () => {
    console.log("Remove");
    removeToCart();
  };
  return (
    <div>
      <div className="border-spacing-3 border-blue-900">
        <button
          onClick={AddShopping}
          className=" text-2xl border-2 border-blue-900 bg-gray-500 m-2 p-3 border-r-10"
        >
          AddToCart
        </button>{" "}
        <br />
        <button
          onClick={RemShopping}
          className=" text-2xl border-2 border-blue-900 bg-gray-500 m-2 p-3 border-r-10"
        >
          RemoveToCart
        </button>
        <br />
      </div>
    </div>
  );
};

export default Buttons;
