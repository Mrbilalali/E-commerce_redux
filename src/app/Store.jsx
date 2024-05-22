import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartslice"

export const store = configureStore({
  reducer: {
    allcart : cartReducer,
  },
});