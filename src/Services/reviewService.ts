import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PostReview, ReviewState, Reviews } from "../Interfaces/interfaces";
import { instance, productconfig } from "../api/instance";

const initialState: ReviewState = {
  data: [],
  status: "idle",
  error: null,
};

export const getReviews = createAsyncThunk("reviews/getReviews", async (query: number) => {
  console.log(query);
  const response = await instance.get(`reviews?productId=${query}`, productconfig);
  console.log(response.data);
  return response.data;
});

export const postReviews = createAsyncThunk<Reviews, PostReview>(
  "reviews/addReviews",
  async (data) => {
    console.log(data);
    const response = await instance.post("reviews/addReviews", data, productconfig);
    console.log(response.data);
    return response.data;
  }
);

const reviewSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReviews.pending, (state) => {
      state.status = "loading";
    }),
      builder.addCase(getReviews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      }),
      builder.addCase(getReviews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default reviewSlice.reducer;
