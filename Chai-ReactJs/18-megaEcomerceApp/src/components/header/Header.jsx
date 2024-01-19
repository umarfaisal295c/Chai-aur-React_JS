import React from "react";
import { Logo, FavCart, AddToCart, DarkMode, Navbar } from "../index";

const Header = () => {
  return (
    <>
      <header className="py-4 shadow-sm bg-white z-1">
        <div className="container flex justify-between items-center">
          {/*  Logo */}
          <Logo />
          {/* Search Box */}
          <div className="w-full max-w-xl relative flex">
            <span className="absolute left-4 top-2 text-lg text-gray-400">
              <i class="bx bx-search-alt-2 bx-tada text-4xl text-primary"></i>
            </span>
            <input
              type="text"
              className="w-full border border-primary border-r-0 pl-12 py-3 pr-3
            rounded-l-md focus:outline-none"
              placeholder="Search"
            />
            <button
              className="bg-primary border border-primary text-white px-8 rounded-r-md
             hover:bg-transparent hover:text-primary transition text-1xl
            "
            >
              Search
            </button>
          </div>
          {/* Icons for header */}
          <div className="flex items-center space-x-4">
            <FavCart /> 
            <AddToCart />
            <DarkMode />
          </div>
        </div>
      </header>
      {/* NavBar of the Header. */}
      <Navbar/>
    </>
  );
};

export default Header;
