// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./Slice/cartSlice";

// const store = configureStore({
//   reducer: {
//     allCart: cartSlice.reducer,
//   },
// });
// export default store;

import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './Slice/cartSlice'
const store= configureStore({
  reducer:{
    allCart: cartSlice
  }
})
export default store