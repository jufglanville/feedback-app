"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FeedBackState {
  feedbacks: {
    id: string;
    email: string;
    feedback: string;
    feedbackType: string;
    createdAt: string;
    updatedAt: string;
  }[];
  status: "idle" | "loading" | "failed";
  error: string | null;
}

const initialState: FeedBackState = {
  feedbacks: [],
  status: "idle",
  error: null,
};

export const feedBackSlice = createSlice({
  name: "feedBack",
  initialState,
  reducers: {
    getFeedBacks: (state) => {
      state.status = "loading";
    },
    getFeedBacksSuccess: (
      state,
      action: PayloadAction<FeedBackState["feedbacks"]>
    ) => {
      state.status = "idle";
      state.feedbacks = action.payload;
    },
    getFeedBacksFailed: (state, action: PayloadAction<string>) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { getFeedBacks, getFeedBacksSuccess, getFeedBacksFailed } =
  feedBackSlice.actions;

export const feedBackReducer = feedBackSlice.reducer;
