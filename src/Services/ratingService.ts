import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RatingInterface } from "../Interfaces/ratingInterface";

const initialState: RatingInterface = {
    ratingState: 0 
}

const ratingSlice = createSlice({
    name: "rating",
    initialState,
    reducers: {
        setRating: (state, action: PayloadAction<number>) => {
            state.ratingState = action.payload
        }
    }
});

export const { setRating }  = ratingSlice.actions;
export default ratingSlice.reducer;