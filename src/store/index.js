import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter";
import authSlice from "./auth";

const store = configureStore({
  reducer: { counter: counterSlice, auth: authSlice },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
