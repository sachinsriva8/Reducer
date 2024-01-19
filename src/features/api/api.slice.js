import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: true,
};

export const ApiThunk = createAsyncThunk("fakeStoreProduct", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  //   console.log("data");
  const result = await response.json();
  console.log("data", result);
  return result;
});

export const ApiSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ApiThunk.fulfilled, (state, action) => {
      state.products.push(action.payload);
      state.loading = false;
    });
  },
});

export default ApiSlice.reducer;
