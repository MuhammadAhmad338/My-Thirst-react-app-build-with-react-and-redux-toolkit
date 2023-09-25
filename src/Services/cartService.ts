import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct, CartState } from "../Interfaces/cartItems";

const initialState: CartState = {
  items: [] as CartProduct[],
  subtotal: 0,
};

const cart = createSlice({
  name: "addtocart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      state.subtotal += item.price;

    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productIdToRemove = action.payload;
      const itemToRemove = state.items.find((item) => item.id === productIdToRemove);

      if (itemToRemove) {
        if (itemToRemove.quantity === 1) {
          // If quantity is 1, remove the item from the cart
          state.items = state.items.filter((item) => item.id !== productIdToRemove);
        } else {
          // Decrease the quantity by 1 if it's greater than 1
          itemToRemove.quantity--;
        }
        state.subtotal -= itemToRemove.price;
      }
    },
    clearCart: (state) => {
      state.items = [],
      state.subtotal = 0; // Clear subtotal when clearing the cart
    },
  },
});

export const { addToCart, clearCart, removeFromCart } = cart.actions;
export default cart.reducer;
