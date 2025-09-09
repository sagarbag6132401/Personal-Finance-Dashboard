import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemsSlice";

const store = configureStore({
    reducer: {
        transactionData: itemsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

