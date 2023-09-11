import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SearchState } from "../Interfaces/searchInterface";
import axios from "axios";

const initialState: SearchState = {
  query: "",
  results: [],
  status: "idle",
  error: null,
};

export const search = createAsyncThunk(
  "search/searchAsync",
  async (query: string) => {
    const response = await axios.get(
      `https://webappoo8.onrender.com/products/search?title=${query}`
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
