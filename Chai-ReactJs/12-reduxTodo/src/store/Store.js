import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/userSlice";
const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
  },
});
export default store;
