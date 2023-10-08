import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PostReview, ReviewState, Reviews } from "../Interfaces/ratingInterface";
import axios from "axios";

const initialState: ReviewState = {
  data: [],
  status: "idle",
  error: null,
};

const config = {
  headers: {
    'Content-Type': 'application/json', // Set the content type you expect from the server,
    'authorization': `${localStorage.getItem('token')}` // Set the content type you expect from the server
  },
};

export const getReviews = createAsyncThunk("reviews/getReviews", async (query: number) => {
  console.log(query);
  const response = await axios.get(`https://webappoo8.onrender.com/api/reviews?productId=${query}`, config);
  console.log(response.data);
  return response.data;
});

export const postReviews = createAsyncThunk<Reviews, PostReview>(
  "reviews/addReviews",
  async (data) => {
    console.log(data);
    const response = await axios.post("https://webappoo8.onrender.com/api/reviews/addReviews", data, config);
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
