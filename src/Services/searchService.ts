import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SearchState } from "../Interfaces/interfaces";
import { instance, productconfig } from "../api/instance";

const initialState: SearchState = {
  query: "",
  results: [],
  status: "idle",
  error: null,
};

export const search = createAsyncThunk(
  "search/searchAsync",
  async (query: string) => {
    const response = await instance.get(
      `products/search?title=${query}`,
      productconfig
    );
    return response.data;
  }
);

export const topSearchBytitle = createAsyncThunk(
  "search/searchAsync",
  async (query: string) => {
    const response = await instance.get(
      `users/search?query=${query}`,
      productconfig
    );
    return response.data;
  }
);

export const searchByCategory = createAsyncThunk(
  "search/searchAsync",
  async (query: string) => {
    const response = await instance.get(
      `products/productByCategory?q=${query}`,
      productconfig
    );
    return response.data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(search.pending, (state) => {
        state.status = "loading";
      })
      .addCase(search.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      })
      .addCase(search.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.results = action.payload;
      });
  },
});

export const { updateQuery } = searchSlice.actions;
export default searchSlice.reducer;
