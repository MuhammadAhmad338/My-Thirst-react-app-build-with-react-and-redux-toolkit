import { createSlice } from "@reduxjs/toolkit";
import { IncrementAge } from "../Interfaces/IncreaseCount";

const initialState: IncrementAge = {
    age: 12
}

const ageSlice = createSlice({
    name: 'age',
    initialState,
    reducers: {
        incrementAge: (state) => {
            state.age += 1
        }
    }
});

export const { incrementAge }  = ageSlice.actions;
export default ageSlice.reducer;