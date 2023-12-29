import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeToCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export default cartSlice;
export const { addToCart, removeToCart } = cartSlice.actions;
