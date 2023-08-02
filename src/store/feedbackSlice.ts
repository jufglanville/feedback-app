import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FeedbackState {
  startupFeedback: FeedbackPost[] | any;
  sortedFeedback: FeedbackPost[];
  sortOption: string;
  filterOption: string[];
}

const initialState: FeedbackState = {
  startupFeedback: [],
  sortedFeedback: [],
  sortOption: "Most Upvotes",
  filterOption: [],
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<string>) => {
      state.sortOption = action.payload;
    },
    setFilter: (state, action: PayloadAction<string[]>) => {
      state.filterOption = action.payload;
    },
    setStartupFeedback: (state, action: PayloadAction<FeedbackPost[]>) => {
      state.startupFeedback = action.payload;
    },
  },
});

export const { setSort, setFilter, setStartupFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;