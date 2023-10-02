import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CategoryInterface} from "../Interfaces/categoryInterface.ts";
import axios from "axios";

const initialState: CategoryInterface = {
    query: "",
    results: [],
    status: "idle",
    error: null
}

const config = {
    headers: {
        'Content-Type': 'application/json', // Set the content type you expect from the server
    },
};
export const searchCategory = createAsyncThunk("products/category", async (query: string) => {
   const response =  await axios.get(`https://webappoo8.onrender.com/products/category?category=${query}`,config);
   return response.data;
});

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
         builder.addCase(searchCategory.pending, (state) => {
                 state.status = "loading";
             })
             .addCase(searchCategory.fulfilled, (state, action ) => {
                 state.status = "succeeded";
                 state.results = action.payload;
             })
             .addCase(searchCategory.rejected, (state, action) => {
                 state.status = "failed";
                 state.error = action.error.message as string;
             });
    }
});

export default categorySlice.reducer;