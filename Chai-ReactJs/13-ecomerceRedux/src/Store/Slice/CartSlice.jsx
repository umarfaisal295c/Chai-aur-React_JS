import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
};
// create slice of a store.
const cartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});
export default cartSlice.actions;
export const { addToCart } = cartSlice.reducer;
