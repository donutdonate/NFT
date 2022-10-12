import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
    name: 'prices',
    initialState: {
        prices: []
    },
    reducers: {
        addPreice(state, action) {
            console.log(state);
            console.log(action);
            state.prices.push(
                {
                    eth: action.payload.eth,
                    usd: action.payload.usd
                }
            );
        }
    }
})

export const {addPreice} = priceSlice.actions;
export default priceSlice.reducer;