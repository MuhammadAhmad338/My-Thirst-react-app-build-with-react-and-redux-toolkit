import { ChangeName } from "../Interfaces/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ChangeName = {
  age: 12,
  name: "Ahmad",
};

const changeNameSlice = createSlice({
  name: "changeName",
  initialState,
  reducers: {
    increment: (state) => {
      state.age += 1;
    },
    decrement: (state) => {
      if (state.age > 0) {
        state.age -= 1;
      }
    },
    changeName: (state: ChangeName, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { increment, changeName, decrement } = changeNameSlice.actions;
export default changeNameSlice.reducer;
