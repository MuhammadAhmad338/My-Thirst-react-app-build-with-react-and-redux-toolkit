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

const config = {
  headers: {
    'Content-Type': 'application/json', // Set the content type you expect from the server,
    'authorization': `${localStorage.getItem('token')}`
  },
};


export const search = createAsyncThunk(
  "search/searchAsync",
  async (query: string) => {
    const response = await axios.get(
      `https://thirstapp-c2g74jsita-uc.a.run.app/api/products/search?title=${query}`, config
    );
    console.log(response.data);
    return response.data;
  }
);

export const topSearchBytitle = createAsyncThunk(
  "search/searchAsync",
  async (query: string) => {
    const response = await axios.get(
      `https://thirstapp-c2g74jsita-uc.a.run.app/api/users/search?query=${query}`, config
    );
    console.log(response.data);
    return response.data;
  }
)

export const searchByCategory = createAsyncThunk(
  "search/searchAsync",
  async (query: string) => {
     const response  = await axios.get(`https://thirstapp-c2g74jsita-uc.a.run.app/api/products/productByCategory?q=${query}`, config);
     console.log(response.data);
     return response.data;    
  }
)

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
