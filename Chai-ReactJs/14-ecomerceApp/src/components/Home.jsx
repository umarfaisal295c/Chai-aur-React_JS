import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/slice/cartSlice";
import CartData from "./CartData";
const Home = () => {
  const [product, setProduct] = useState(CartData);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const res = await fetch("https://fakestoreapi.com/products");
  //     const data = await res.json();
  //     setProduct(data);
  //   };
  //   fetchProduct();
  // }, []);
  //
  const sendData = (data) => {
    dispatch(addToCart(data));
    console.log(data);
  };
  return (
    <>
      <div className="productsWrapper">
        {product.map((product, id) => {
          return (
            <div className="card" key={id}>
              <img
                src={product.image}
                alt=""
                className="flex justify-center items-center ml-24"
              />
              <h4>{product.title}</h4>
              <h5>{product.price}</h5>
              <button className="btn" onClick={() => sendData(product)}>
                AddToCart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
