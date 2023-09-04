import { configureStore } from '@reduxjs/toolkit';
import ageReducer from '../Services/incrementService';
import changeNameReducer from '../Services/changeNameService';
import apiReducer from '../Services/getProducts';
import cartReducer from '../Services/cartService';
import wishlistReducer from '../Services/wishlist';

const store = configureStore({
    reducer: {
        age: ageReducer,
        changeName: changeNameReducer,
        api: apiReducer,
        cart: cartReducer,
        wishlist: wishlistReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
