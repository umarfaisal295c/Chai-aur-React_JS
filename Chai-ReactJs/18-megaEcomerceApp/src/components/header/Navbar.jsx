import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  // const authStatus = useSelector((state) => state.slice.status);

  return (
    <nav className="bg-gray-800">
      <div className="container flex">
        {/* categories */}
        <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative  group">
          <div class="p-0">
            <div class="group/main inline-block relative">
              <button class=" text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                <span className="text-white">
                  <i class="bx bxs-bar-chart-alt-2"></i>
                </span>
                <span className="ml-2 capitalize text-white">
                  All Categories
                </span>
              </button>

              <ul
                className="absolute w-52 left-0 top-14 bg-white shadow-md py-3 divide-y divide-gray-300
          divide-dashed   invisible group-hover:visible transition duration-300 "
              >
                {/* <ul class="absolute hidden text-gray-700 pt-1 group-hover/main:block"> */}
                <li className="group/item relative ">
                  <NavLink
                    className="flex item-center px-5 py-3 hover:bg-gray-100 transition"
                    href="#"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/1261/1261052.png"
                      alt=""
                      className="w-5 h-5 object-contain"
                    />
                    <span className="ml-5 text-gray-600 text-sm relative group">
                      Groceries & Pets
                    </span>
                  </NavLink>
                  <ul
                    class="absolute w-52 hidden l-10 text-gray-700 pt-1 group-hover/item:block top-0 left-52
                  bg-white shadow-md py-3 divide-y divide-gray-300
          divide-dashed 
                  "
                  >
                    <li>
                      <NavLink className="flex item-center px-5 py-3 hover:bg-gray-100 transition">
                        Fresh Produce
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="flex item-center px-5 py-3 hover:bg-gray-100 transition">
                        Fresh Produce
                      </NavLink>
                    </li>

                    <li>
                      <NavLink className="flex item-center px-5 py-3 hover:bg-gray-100 transition">
                        Fresh Produce
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="group/item relative">
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
                  <ul
                    class="absolute w-52 hidden  text-gray-700 pt-1 group-hover/item:block top-0 left-52
                  bg-white shadow-md py-3 divide-y divide-gray-300
          divide-dashed 
                  "
                  >
                    <li>
                      <NavLink className="flex item-center px-5 py-3 hover:bg-gray-100 transition">
                        Fresh Produce
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="flex item-center px-5 py-3 hover:bg-gray-100 transition">
                        Fresh Produce
                      </NavLink>
                    </li>

                    <li>
                      <NavLink className="flex item-center px-5 py-3 hover:bg-gray-100 transition">
                        Fresh Produce
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li class="">
                  <NavLink
                    to={""}
                    className="flex item-center px-5 py-3 hover:bg-gray-100 transition"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/11408/11408474.png"
                      alt=""
                      className="w-5 h-5 object-contain"
                    />
                    <span className="ml-5 text-gray-600 text-sm">
                      Mens Fashions
                    </span>
                  </NavLink>
                </li>
                <li class="">
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
                </li>
                <li class="">
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
                </li>
                <li class="">
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
                </li>
                <li class="">
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
                </li>
                <li class="">
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
                </li>
                <li class="">
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
                </li>
              </ul>
            </div>
          </div>
          {/* dropdown */}
        </div>
        {/* navLinks */}
        <div className="flex justify-between items-center flex-grow pl-12">
          <div className="flex items-center capitalize space-x-6">
            <NavLink
              to={"/"}
              className="text-gray-200 hover:text-white transition"
            >
              Home
            </NavLink>
            <NavLink
              to={"/shop"}
              className="text-gray-200 hover:text-white transition"
            >
              Shop
            </NavLink>
            <NavLink
              to={"/aboutus"}
              className="text-gray-200 hover:text-white transition"
            >
              About us
            </NavLink>
            <NavLink
              to={"/contactus"}
              className="text-gray-200 hover:text-white transition"
            >
              Contact us
            </NavLink>
          </div>
          {/* login and signUp */}
          <div>
            {}
            <NavLink
              to={"/login"}
              className="text-gray-200 hover:text-primary transition mr-3 font-bold"
            >
              Login {""} ||{" "}
            </NavLink>
            <NavLink
              to={"/signup"}
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
