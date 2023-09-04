import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct, CartState } from "../Interfaces/cartItems";

const initialState: CartState = {
   items: [],
}

const cart = createSlice({
    name: "addtocart",
    initialState,
    reducers: {
      addToCart: (state, action: PayloadAction<CartProduct>) => {
        const newItem = action.payload;
        const isItemExists = state.items.find((item) => item.id === newItem.id);
        if (isItemExists) {
            isItemExists.quantity++;
        } else {
            state.items.push({...newItem, quantity: 1 });
        }
      },
      removeFromCart: (state, action: PayloadAction<number>) => {
         const productIdToRemove = action.payload;
         const isProductExisting = state.items.find((item) => item.id === productIdToRemove);
         if (isProductExisting) {
            if (isProductExisting.quantity === 1) {
               state.items = state.items.filter((item) => item.id !== productIdToRemove);
            } else {
                isProductExisting.quantity -= 1;
            }
         } 
      },
      clearCart: (state) => {
         state.items = []
      }
    }
});

export const { addToCart, clearCart, removeFromCart} = cart.actions; 
export default cart.reducer;