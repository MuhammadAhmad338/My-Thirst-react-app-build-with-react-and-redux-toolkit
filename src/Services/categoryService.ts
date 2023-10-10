import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CategoryInterface} from "../Interfaces/interfaces.ts";
import { instance, productconfig } from "../api/instance.ts";

const initialState: CategoryInterface = {
    query: "",
    results: [],
    status: "idle",
    error: null
} 

export const searchCategory = createAsyncThunk("products/category", async (query: string) => {
   const response =  await instance.get(`products/category?category=${query}`, productconfig);
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