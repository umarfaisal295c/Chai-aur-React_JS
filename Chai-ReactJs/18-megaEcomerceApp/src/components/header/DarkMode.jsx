import React from "react";
import { NavLink } from "react-router-dom";
const DarkMode = () => {
  return (
    <NavLink className="text-center text-gray-700 hover:text-primary relative transition">
      <div className="text-3xl ">
      <i class='bx bx-globe'></i>
      </div>
      <div className="text-sx leading-3">Language</div>
    </NavLink>
  );
};

export default DarkMode;
