import React from "react";
import { NavLink } from "react-router-dom";
const DarkMode = () => {
  return (
    <NavLink className="text-center text-gray-700 hover:text-primary relative group transition">
      <div className="text-3xl ">
        <i class="bx bx-globe"></i>
      </div>
      <div className="text-sx leading-3">Language</div>
      {/* dropDown */}
      <div
        className="absolute w-28 left-0 top-full bg-white shadow-md py-3  divide-y divide-gray-300
          divide-dashed   invisible group-hover:visible transition duration-300 "
      >
        <NavLink
          to={""}
          className="flex item-center px-5 py-1 hover:bg-gray-100 hover: text-gray-600 transition"
        >
          <p>Urdu</p>
        </NavLink>
        <NavLink
          to={""}
          className="flex item-center px-5 py-1 hover:bg-gray-100 hover: text-gray-600 transition"
        >
          <p>English</p>
        </NavLink>
      </div>
    </NavLink>
  );
};

export default DarkMode;
