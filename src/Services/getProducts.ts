/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiState, Product } from "../Interfaces/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: ApiState = {
  data: [],
  status: "idle",
  error: null,
};

const config = {
  headers: {
    'Content-Type': 'application/json', // Set the content type you expect from the server,
    'authorization': `${localStorage.getItem('token')}`
  },
};

export const fetchProducts = createAsyncThunk<Product[], void>(
  "api/fetchProducts",
  async () => {
    const response = await axios.get<Product[]>(
      "https://thirstapp-c2g74jsita-uc.a.run.app/api/products/allProducts", config
    );
    console.log(response.data);
    localStorage.setItem("token", response.data.token);
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
