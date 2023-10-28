import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AccountApiState,
  SignUpState,
  SignInState,
  User,
} from "../Interfaces/interfaces";
import { instance, userconfig } from "../api/instance";

const initialState: AccountApiState = {
  user: null,
  status: "idle",
  error: null,
};

export const register = createAsyncThunk<User, SignUpState>(
  "auth/register",
  async (userData) => {
    const response = await instance.post(
      "users/register",
      userData,
      userconfig
    );
    return response.data.token;
  }
);

export const login = createAsyncThunk<User, SignInState>(
  "auth/login",
  async (credentials) => {
    const response = await instance.post(
      "users/login",
      credentials,
      userconfig
    );
    // Store the token in local storage
    if (response.data.token !== undefined) {
      localStorage.setItem("token", response.data.token);
      return response.data.token;
    } else {
    alert("Please Check Your Credentials!");
    }
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      })
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(register.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      });
  },
});

export default accountSlice.reducer;
