
import { createSlice } from "@reduxjs/toolkit";
import { SearchToggleInterface } from "../Interfaces/searchInterface";

const initialState: SearchToggleInterface = {
    searchTheToggle: false
}

const toggleSearchIT = createSlice({
    name: "toggleSeachIt",
    initialState,
    reducers: {
        toggleSearch: (state, action) => {
            const search = action.payload;
            state.searchTheToggle = search
        }
    }
});

export const { toggleSearch } = toggleSearchIT.actions;
export default toggleSearchIT.reducer;