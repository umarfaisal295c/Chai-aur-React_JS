import React from "react";
import { NavLink } from "react-router-dom";
const AddToCart = () => {
  return (
    <>
      <NavLink className="text-center text-gray-700 hover:text-primary relative transition">
        <div className="text-3xl">
        <i class='bx bx-cart-alt'></i>
        </div>
        <div className="text-sx leading-3">AddToCart</div>
        <span
          className="absolute right-0 -top-1 w-5 h-5 rounded-full 
        flex items-center justify-center bg-primary text-white text-sx
        "
        >
          0
        </span>
      </NavLink>
    </>
  );
};

export default AddToCart;
