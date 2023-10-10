/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiState, Product } from "../Interfaces/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";
import { instance, productconfig } from "../api/instance";

const initialState: ApiState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk<Product[], void>(
  "api/fetchProducts",
  async () => {
    const response = await instance.get<Product[]>("products/allProducts", productconfig);
    return response.data;
  }
);

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    }),
      builder.addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.status = "succeeded";
          state.data = action.payload;
        }
      ),
      builder.addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default apiSlice.reducer;
