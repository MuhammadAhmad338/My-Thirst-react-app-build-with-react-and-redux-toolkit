import { createSlice } from "@reduxjs/toolkit";
import { Toggle } from "../Interfaces/interfaces";

const initialState: Toggle = {
    toggle: false
}

const toggleService = createSlice({
    name: "toggleIt",
    initialState,
    reducers: {
        toggleCartSide: (state, action) => {
           const toggleState = action.payload;
           state.toggle = toggleState;
        }
    }
});

export const { toggleCartSide }  = toggleService.actions;
export default toggleService.reducer;