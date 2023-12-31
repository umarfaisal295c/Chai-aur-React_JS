import { configureStore ,} from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
//
const store = configureStore({
  reducer: {
    carts: cartSlice,
  },
});
export default store;
