import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slice/CartSlice";
const Store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
export default Store;
