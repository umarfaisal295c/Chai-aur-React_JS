import React from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { removeToCart } from "../Store/Slice/CartSlice";
const Cart = () => {
  // const dispatch = useDispatch();
  // const cartItems = useSelector((state) => {
  //   return state.cart;
  // });

  //
  // const handleData = (product) => {
  //   dispatch(removeToCart(product));
  //   //
  //   console.log(product);
  // };

  return (
    <>
      <div className="cartWrapper">
        {cartItems.map((product) => (
          <div className="cartCard">
            <img src={product.image} alt="" />
            <h5>{product.price}</h5>
            <h5>{product.title}</h5>
            <h3>{cartItems.length}</h3>

            <button className="btn" >//
            {/* onClick={() => handleData(product.id)} */}
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
