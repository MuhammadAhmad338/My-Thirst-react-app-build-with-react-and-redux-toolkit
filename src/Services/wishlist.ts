/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WishlistProduct, WishlistState } from "../Interfaces/wishlistItems";

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<WishlistProduct>) => {
      const newItem = action.payload;
      const isExists = state.items.find((item) => item.id === newItem.id);
      if (isExists) {
        window.alert("Already in Wishlist");
      } else {
        state.items.push(newItem);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      const removeItemID = action.payload;
      const isExists = state.items.find((item) => item.id === removeItemID);
      if (isExists) {
        state.items = state.items.filter((item) => item.id !== removeItemID);
      } else {
        window.alert("Not Existed in Wishlist");
      }
    },
    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
