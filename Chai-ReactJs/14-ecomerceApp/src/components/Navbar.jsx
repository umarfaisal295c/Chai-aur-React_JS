import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => {
    return state.carts;
  });
  console.log(cart);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span>Redux Tutorial</span>
      <div>
        <Link className="navLink" style={{ fontWeight: "bolder" }} to={"/"}>
          Home
        </Link>
        <Link
          className="navLink"
          style={{ marginRight: "7px", fontWeight: "bolder" }}
          to={"/cart"}
        >
          Cart
        </Link>

        <span style={{ fontWeight: "bolder" }}>items:{cart.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
