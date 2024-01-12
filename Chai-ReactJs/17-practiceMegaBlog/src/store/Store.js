import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
// create a store.
const Store = configureStore({
  reducer: {},
});
export default Store;
