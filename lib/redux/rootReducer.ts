/* Instruments */
import { authSlice, counterSlice } from "./slices";

export const reducer = {
  counter: counterSlice.reducer,
  auth: authSlice.reducer,
};
