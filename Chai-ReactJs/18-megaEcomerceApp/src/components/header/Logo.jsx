import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <NavLink to={""}>
        <h1 className="text-primary text-4xl font-bold font-popins">
          Pak {""}
          <span className="text-flag font-lemon text-3xl font-light">
            {" "}
            Store
          </span>
        </h1>
      </NavLink>
    </>
  );
};

export default Logo;
