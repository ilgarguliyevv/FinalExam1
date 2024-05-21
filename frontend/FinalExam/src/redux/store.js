import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/cardSlice.js";
export const store = configureStore({
  reducer: { counter: counterReducer },
});
