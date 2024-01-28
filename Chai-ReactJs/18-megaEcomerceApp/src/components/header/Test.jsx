import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Test = () => {
  const [data, setData] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    getData();
  });
  const getData = async () => {
    // try {
    // const responce = await fetch(`https://www.fruityvice.com/api/fruit/[fruit-name]/image`);
    const responce = await fetch(`http://localhost:3001/${name}`);
    setData(await responce.json());

    // } catch (error) {
    // console.log("Filled to fetch", error);
    // }

    //
  };
  return (
    <>
      <div className="container pb-16 pt-40 ">
        <h2 className="font-extrabold text-4xl text-gray-700 mb-4">
          Top New Arrival
        </h2>
        {/* product grid */}
        <div className="  grid grid-cols-4 gap-6 ">
          {/* single product */}
          {data.map((item, index) => {
            return (
              <>
                <div className="bg-white shadow rounded-3xl overflow-hidden group">
                  {/* product img */}
                  <div key={index} className="relative">
                    <img src={item.img} alt="" className="w-64 p-4 h-64" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100">
                      <NavLink
                        to={""}
                        className="text-white  text-lg w-9 h-8 rounded-full bg-primary flex justify-center items-center hover:bg-gray-800 transition"
                      >
                        <i class="bx bx-search-alt-2"></i>
                      </NavLink>
                      <NavLink
                        to={""}
                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex justify-center items-center hover:bg-gray-800 transition"
                      >
                        <i class="bx bx-heart"></i>
                      </NavLink>
                    </div>
                  </div>
                  {/* product img end */}
                  {/* product content */}
                  <div className="pt-4 pb-3 px-4">
                    <NavLink to={""}>
                      <h4 className=" uppercase text-1xl font-medium mb-2 hover:text-primary transition">
                        {item.title}
                      </h4>
                    </NavLink>
                    <div className="flex items-baseline mb-1 space-x-4 font-roboto">
                      <p className="text-xl text-primary font-semibold">
                        Rs. {item.price}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xl text-gray-400 line-through">
                        Rs. {item.dPrice}
                      </p>
                      <p className="text-xl text-gray-900 ">{item.dics}%</p>
                    </div>
                    <div className="flex items-center">
                      <div className="flex gap-1 text-sm pt-2 text-yellow-400">
                        <span>
                          <i class="bx bx-star"></i>
                        </span>
                        <span>
                          <i class="bx bx-star"></i>
                        </span>
                        <span>
                          <i class="bx bx-star"></i>
                        </span>
                        <span>
                          <i class="bx bx-star"></i>
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 pt-2 ml-3">
                        ({item.rating})
                      </div>
                    </div>
                  </div>
                  <div>
                    <NavLink
                      to={""}
                      className="block w-full py-2 text-center bg-primary border-primary rounded-b hover:bg-transparent transition"
                    >
                      Add to Cart
                    </NavLink>
                  </div>
                  {/* product content end */}
                </div>
              </>
            );
          })}
          {/* single product end */}
        </div>
        {/* product grid end */}
      </div>
    </>
  );
};

export default Test;
