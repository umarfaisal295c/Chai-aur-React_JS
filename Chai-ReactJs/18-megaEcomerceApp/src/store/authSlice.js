import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  status: false,
  userData: null,
  cart: [],
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
  },
  // logout
  logout: (state) => {
      state.status = false;
      state.userData = null;
  },
    // for addToCart.
    addToCart: (state, action) => {},
    // for removeToCart.
    removeToCart: (state, action) => {},
    // remove single cartItem.
    removeSingleItem: (state, action) => {},
    // empty clear all Data.
    emptyCartData: (state, action) => {},
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;