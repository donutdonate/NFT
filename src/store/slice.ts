import { createSlice } from "@reduxjs/toolkit";

const collectionsSlice = createSlice({
    name: 'collections',
    initialState: {
        collections: [],
        isLoading: false
    },
    reducers: {
        // addPreice(state, action) {
        //     console.log(state);
        //     console.log(action);
        //     state.prices.push(
        //         {
        //             eth: action.payload.eth,
        //             usd: action.payload.usd
        //         }
        //     );
        // }
        fetchCollections: (state) => {
            state.isLoading = true;
        },
        fetchSuccess: (state, action) => {
            state.collections = action.payload;
            state.isLoading = false;
        },
        fetchFailure: (state) => {
            state.isLoading = false;
        }
    }
})

export const {fetchCollections, fetchFailure, fetchSuccess} = collectionsSlice.actions;
export default collectionsSlice.reducer;