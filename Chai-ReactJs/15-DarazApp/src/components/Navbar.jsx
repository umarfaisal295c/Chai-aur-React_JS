import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="m-0 p-0 box-border bg-orange-500 ">
        <div className="flex justify-center items-center  w-full gap-5">
          <div className="flex justify-between w-full  items-center">
            <NavLink to={"/"} className=''>
              <img
                src="src/images/logo.jpg"
                alt=""
                className="w-24 rounded-3xl ml-5 h-22 aspect-square object-contain"
              />
            </NavLink>
            <div>
              <div className="mr-5 flex item-center">
                <NavLink className="ml-5 ">
                  <i className="bx bxs-moon text-3xl text-white"></i>
                </NavLink>
                <NavLink className="ml-5 navlink" to={'/login'}>
                  <i class="bx bxs-user"></i> Login
                </NavLink>
                <NavLink className="ml-5 navlink" to={"/signup"}>| Sign Up</NavLink>
                <NavLink className="ml-5 navlink">EN</NavLink>
                <NavLink className="ml-5 navlink"><i class='bx bxs-cart'></i></NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
