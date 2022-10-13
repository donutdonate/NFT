import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import collectionReducer from './slice'
import collectionsSaga from "../saga";
const saga = createSagaMiddleware();

const store = configureStore({
    reducer: {
        collections: collectionReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()?.concat(saga)
})

saga.run(collectionsSaga);

export default store;