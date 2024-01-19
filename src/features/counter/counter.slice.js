import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};
export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    Increment: (state) => {
      return { ...state, count: state.count + 1 };
    },
    Decrement: (state) => {
      return { ...state, count: state.count - 1 };
    },
    IncrementByValue: (state, action) => {
      return { ...state, count: state.count + action.payload };
    },
  },
});

export const { Increment, Decrement, IncrementByValue } = CounterSlice.actions;
export default CounterSlice.reducer;
