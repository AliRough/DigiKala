import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";

export const Store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
