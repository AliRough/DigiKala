import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import isLoading from "../features/isLoading";
import products from "../features/poroduts/poroductSlice"
export const Store = configureStore({
  reducer: {
    counter: counterSlice,
    isLoading,
    products,
  },
});
