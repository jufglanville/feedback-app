"use client";

import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "./feedbackSlice";

export const store = configureStore({
  reducer: {
    feedBack: feedbackReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
