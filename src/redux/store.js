import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "./reducer/RootReducer";

export const store = configureStore({
  reducer: rootReducers,
});
