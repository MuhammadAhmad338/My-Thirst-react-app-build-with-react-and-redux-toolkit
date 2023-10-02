import { configureStore } from '@reduxjs/toolkit';
import ageReducer from '../Services/incrementService';
import changeNameReducer from '../Services/changeNameService';
import apiReducer from '../Services/getProducts';
import cartReducer from '../Services/cartService';
import wishlistReducer from '../Services/wishlist';
import accountReducer from '../Services/account';
import searchReducer from '../Services/searchService';
import categoryReducer from '../Services/categoryService.ts';
import toggleReducer from '../Services/toggleService.ts';
import toggleSearchReducer from '../Services/toggleSearchService.ts';
import ratingReducer from '../Services/ratingService.ts';
import commentReducer from '../Services/commentService.ts';

const store = configureStore({
    reducer: {
        age: ageReducer,
        changeName: changeNameReducer,
        api: apiReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,
        account: accountReducer,
        search: searchReducer,
        category: categoryReducer,
        toggle: toggleReducer,
        toggleSearch: toggleSearchReducer,
        rating: ratingReducer,
        comment: commentReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
