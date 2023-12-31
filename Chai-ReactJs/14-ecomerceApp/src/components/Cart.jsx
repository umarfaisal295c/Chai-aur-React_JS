import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import {
  addToCart,
  emptyCartData,
  removeSingleItem,
  removeToCart,
} from "../Store/slice/cartSlice";

const Cart = () => {
  const { cart } = useSelector((state) => {
    return state.carts;
  });
  const dispatch = useDispatch();
  // create a state for total Price.
  const [totalPrice,setTotalPrice]=useState(0)
  // const cart = [0, 1];
  //
  const empty = () => {
    dispatch(emptyCartData());
  };
  // addTo cart
  const increment = (data) => {
    dispatch(addToCart(data));
  };
  // remove data
  const delData = (data) => {
    dispatch(removeToCart(data));
  };
  // remove single data dec
  const decrement = (data) => {
    dispatch(removeSingleItem(data));
  };
  // function of Total Price.
  const tp=()=>{
    let tPrice=0;
    cart.map((data,id)=>{
      tPrice=data.price * data.qnty+tPrice
      setTotalPrice(tPrice)
    })
  }
  useEffect(()=>{
    tp()
  },[tp])
  return (
    <>
      {/* <div className="cartWrapper">
        {cart.map((product, id) => (
          <div className="cartCard" key={id}>
            <img src={product.image} alt="" />
            <h5>{product.price}</h5>
            <h5>{product.title}</h5>
            <div style={{ display: "flex", gap: 20 }}>
              <button>+</button>
              <button>-</button>
            </div>
            <button className="btn">Remove</button>
          </div>
        ))} columns-md
      </div> */}
      // ----------------------------------------------------------------
      <div className="row-auto flex justify-center m-0 ">
        <div className=" mt-5 mb-5 cardstdetails w-9/12  ">
          <div className="card  justify-center">
            <div className="card-header bg-black p-4  justify-between ">
              <div className="card-header-flex">
                <h5 className="text-white m-0 text-2xl">
                  Cart Collection {cart.length > 0 ? `${cart.length}` : ""}
                </h5>
                {cart.length > 0 ? (
                  <button
                    className="btn btn-danger m-0"
                    onClick={() => empty(cart)}
                  >
                    <i class="bx bxs-trash"></i>
                    <span>Empty</span>
                  </button>
                ) : null}
              </div>
            </div>
            <div className="card-body p-0">
              {cart.length === 0 ? (
                <table className=" cart-table mb-0 grid justify-center">
                  <tbody>
                    <tr>
                      <td colSpan={6}>
                        <div className="cart-empty grid justify-center  ">
                          <i class="bx bx-cart-alt"></i>
                          <p>Your Cart is empty</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <table className=" cart-table mb-0  table-responsive-sm w-full">
                  <thead>
                    <tr className="w-full">
                      <th>Action</th>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th className="text-right">
                        <span className=" text-right">Total Amount</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((data, id) => {
                      return (
                        <>
                          <tr key={id}>
                            <td>
                              <button
                                className="btn"
                                onClick={() => delData(data.id)}
                              >
                                <i class="bx bxs-trash"></i>
                              </button>
                            </td>
                            <td>
                              <div className="cartWrapper grid justify-center mb-3">
                                <img
                                  className="w-18 h-16"
                                  src={data.image}
                                  alt=""
                                />
                              </div>
                            </td>
                            <td>
                              <p>{data.title}</p>
                            </td>
                            <td>
                              <p>{data.price}</p>
                            </td>
                            <td>
                              <div className="prdct-qty-container">
                                <button
                                  className="prdct-qty-btn"
                                  onClick={
                                    data.qnty <= 1
                                      ? () => delData(data.id)
                                      : () => decrement(data)
                                  }
                                >
                                  <i class="bx bx-minus"></i>
                                </button>
                                <input
                                  type="text"
                                  className="border qty-input-box"
                                  value={data.qnty}
                                  disabled
                                />
                                <button
                                  className="prdct-qty-btn"
                                  onClick={() => increment(data)}
                                >
                                  <i class="bx bx-plus"></i>
                                </button>
                              </div>
                            </td>
                            <td className="text-right">
                              {data.qnty * data.price}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>

                  <hr />
                  <tfoot>
                    <tr>
                      <th>&nbsp;</th>
                      <th colSpan={3}>&nbsp;</th>
                      <th>
                        Item in cart <span className="ml-2 mr-2">:</span>{" "}
                        <span className="text-danger">{cart.length}</span>
                      </th>
                      <th className="text-right">
                        Total Price <span>:</span>{" "}
                        <span className="text-danger">{totalPrice}</span>
                      </th>
                    </tr>
                  </tfoot>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
