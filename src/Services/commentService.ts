import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CommentState, PostComment } from "../Interfaces/interfaces";
import { instance, userconfig } from "../api/instance";

const initialState: CommentState = {
  data: [],
  status: "idle",
  error: null,
};

// Modify your async thunk to accept productId and content
export const postComment = createAsyncThunk<Comment, PostComment>(
  "products/comments",
  async (data) => {
    const response = await instance.post(
      "comments/addComment",
      data,
      userconfig
    );
    return response.data;
  }
);

export const getCommentsByProducts = createAsyncThunk(
  "products/comments",
  async (query: number) => {
    const response = await instance.get(
      `comments?productId=${query}`,
      userconfig
    );
    return response.data;
  }
);

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCommentsByProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCommentsByProducts.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getCommentsByProducts.rejected, (state) => {
        state.error = "Failed";
      });
  },
});

export default commentSlice.reducer;
