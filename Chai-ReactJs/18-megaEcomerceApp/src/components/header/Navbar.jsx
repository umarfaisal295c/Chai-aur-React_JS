import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container flex">
        {/* categories */}
        <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
          <span className="text-white">
            <i class="bx bxs-bar-chart-alt-2"></i>
          </span>
          <span className="ml-2 capitalize text-white">All Categories</span>
          {/* dropdown */}
          <div
            className="absolute w-52 left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300
          divide-dashed   invisible group-hover:visible transition duration-300  "
          >
            <NavLink
              to={""}
              className="flex item-center px-5 py-3 hover:bg-gray-100 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/1261/1261052.png"
                alt=""
                className="w-5 h-5 object-contain"
              />
              <span className="ml-5 text-gray-600 text-sm">
                Groceries & Pets
              </span>
            </NavLink>
            <NavLink
              to={""}
              className="flex item-center px-5 py-3 hover:bg-gray-100 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/3163/3163173.png"
                alt=""
                className="w-5 h-5 object-contain"
              />
              <span className="ml-5 text-gray-600 text-sm">
                Health & Beauty
              </span>
            </NavLink>
            <NavLink
              to={""}
              className="flex item-center px-5 py-3 hover:bg-gray-100 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/11408/11408474.png"
                alt=""
                className="w-5 h-5 object-contain"
              />
              <span className="ml-5 text-gray-600 text-sm">Mens Fashions</span>
            </NavLink>
            <NavLink
              to={""}
              className="flex item-center px-5 py-3 hover:bg-gray-100 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/1198/1198409.png"
                alt=""
                className="w-5 h-5 object-contain"
              />
              <span className="ml-5 text-gray-600 text-sm">
                Womens Fashions
              </span>
            </NavLink>
            <NavLink
              to={""}
              className="flex item-center px-4 py-3 hover:bg-gray-100 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/4564/4564774.png"
                alt=""
                className="w-5 h-5 object-contain"
              />
              <span className="ml-5 text-gray-600 text-sm">
                Home & Lifestyle
              </span>
            </NavLink>
            <NavLink
              to={""}
              className="flex item-center px-5 py-3 hover:bg-gray-100 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/408/408533.png"
                alt=""
                className="w-5 h-5 object-contain"
              />
              <span className="ml-5 text-gray-600 text-sm">
                Electronic Devices
              </span>
            </NavLink>
            <NavLink
              to={""}
              className="flex item-center px-5 py-3 hover:bg-gray-100 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/6020/6020736.png"
                alt=""
                className="w-5 h-5 object-contain"
              />
              <span className="ml-5 text-gray-600 text-sm">
                Home appliances
              </span>
            </NavLink>
            <NavLink
              to={""}
              className="flex item-center px-5 py-3 hover:bg-gray-100 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/4163/4163679.png"
                alt=""
                className="w-5 h-5 object-contain"
              />
              <span className="ml-5 text-gray-600 text-sm">
                Sports & Outdoor
              </span>
            </NavLink>
            <NavLink
              to={""}
              className="flex item-center px-5 py-3 hover:bg-gray-100 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/4305/4305522.png"
                alt=""
                className="w-5 h-5 object-contain"
              />
              <span className="ml-5 text-gray-600 text-sm">
                Watche & Jewellery
              </span>
            </NavLink>
          </div>
        </div>
        {/* navLinks */}
        <div className="flex justify-between items-center flex-grow pl-12">
          <div className="flex items-center capitalize space-x-6">
            <NavLink
              to={""}
              className="text-gray-200 hover:text-white transition"
            >
              Home
            </NavLink>
            <NavLink
              to={""}
              className="text-gray-200 hover:text-white transition"
            >
              Shop
            </NavLink>
            <NavLink
              to={""}
              className="text-gray-200 hover:text-white transition"
            >
              About us
            </NavLink>
            <NavLink
              to={""}
              className="text-gray-200 hover:text-white transition"
            >
              Contact us
            </NavLink>
          </div>
          {/* login and signUp */}
          <div>
            <NavLink
              to={""}
              className="text-gray-200 hover:text-primary transition mr-3 font-bold"
            >
              Login {""} ||{" "}
            </NavLink>
            <NavLink
              to={""}
              className="text-gray-200 hover:text-primary transition font-bold"
            >
              <i class="bx bxs-user"></i> SignUp
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
