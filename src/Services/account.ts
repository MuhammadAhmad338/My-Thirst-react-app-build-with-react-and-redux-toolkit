import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AccountApiState,
  SignUpState,
  SignInState,
  User,
} from "../Interfaces/accountInterface";
import axios from "axios";

const initialState: AccountApiState = {
  user: null,
  status: "idle",
  error: null,
};

const config = {
  headers: {
    "Content-Type": "application/json", // Set the content type you expect from the server,
  },
};

export const register = createAsyncThunk<User, SignUpState>(
  "auth/register",
  async (userData) => {
    const response = await axios.post(
      "https://thirstapp-c2g74jsita-uc.a.run.app/api/users/register",
      userData,
      config
    );
    console.log(response.data);
    // Store the token in local storage
    if (response.data.token !== undefined) {
      localStorage.setItem("token", response.data.token);
      alert(`User created Successfully!`);
      window.location.reload();
    } else {
      alert("Please check your fields!");
    }

    return response.data;
  }
);

export const login = createAsyncThunk<User, SignInState>(
  "auth/login",
  async (credentials) => {
    const response = await axios.post(
      "https://thirstapp-c2g74jsita-uc.a.run.app/api/users/login",
      credentials,
      config
    );
    console.log(response.data);
    // Store the token in local storage
    if (response.data.token !== undefined) {
      localStorage.setItem("token", response.data.token);
      alert(`User is LoggedIn!`);
      window.location.reload();
    } else {
      alert("Invalid Credentials");
    }
    // Reload the web app

    return response.data;
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
