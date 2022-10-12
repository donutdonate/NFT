import { configureStore } from "@reduxjs/toolkit";
import pricesReducer from './slice';

export default configureStore({
    reducer: {
        prices: pricesReducer,
    }
})