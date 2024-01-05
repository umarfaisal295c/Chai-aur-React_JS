import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // const itemIndex = state.cart.findIndex(
      //   (item) => item.id === action.payload.id
      // );
      // console.log(itemIndex);
      // if (itemIndex >= 0) {
      //   state.cart[itemIndex].qnty += 1;
      // } else {
      //   const temp = { ...action.payload, qnty: 1 };
      //   state.cart = [...state.cart, temp];
      // }
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].qnty += 1;
      } else {
        const tem = { ...action.payload, qnty: 1 };
        state.cart = [...state.cart, tem];
      }
    },
    // remove a particular
    removeToCart: (state, action) => {
      const del = state.cart.filter((item) => item.id !== action.payload);
      state.cart = del;
    },

    // remove single to cartitem.
    removeSingleItem: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cart[itemIndex].qnty >= 1) {
        state.cart[itemIndex].qnty -= 1;
      }
    },
    // empty clear all Data.
    emptyCartData:(state,action)=>{
      state.cart=[]
    }
  },
});
export default cartSlice.reducer;
export const { addToCart, removeToCart, removeSingleItem, emptyCartData } =
  cartSlice.actions;
