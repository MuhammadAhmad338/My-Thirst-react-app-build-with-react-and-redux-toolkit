import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CommentState, PostComment } from "../Interfaces/commentInterface";
import axios from "axios";

const initialState: CommentState = {
  data: [],
  status: "idle",
  error: null,
};

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

// Modify your async thunk to accept productId and content
export const postComment = createAsyncThunk<Comment, PostComment>(
  "products/comments",
  async (data) => {
    const response = await axios.post(
      "https://webappoo8.onrender.com/comments/addComment",
      data,
      config
    );
    console.log(response.data);
   
    return response.data;
  }
);

export const getCommentsByProducts = createAsyncThunk(
  "products/comments",
  async (query: number) => {
    const response = await axios.get(
      `https://webappoo8.onrender.com/comments?productId=${query}`,
      config
    );
    console.log(response.data);
    console.log('Helloadasdas');
    return response.data;
  }
);

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCommentsByProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCommentsByProducts.fulfilled, (state, action) => {
        state.data = action.payload
      })
      .addCase(getCommentsByProducts.rejected, (state) => {
        state.error = "Failed";
      });
  },
});


export default commentSlice.reducer;
