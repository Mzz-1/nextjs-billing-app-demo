"use client";

import { configureStore } from "@reduxjs/toolkit";
import billSlice from "./billSlice";
export const store = configureStore({
    reducer: {
        bill: billSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
