'use client';

import { createContext, useState } from "react";

type FeedBackContextType = {
  feedback: FeedbackPost[];
  sortFeedback: (sortType: string) => void;
};

type FeedBackContextProviderProps = {
  children: React.ReactNode;
};

export const FeedBackContext = createContext({} as FeedBackContextType);

const FeedBackContextProvider = ({ children }: FeedBackContextProviderProps) => {
  const [feedback, setFeedback] = useState<FeedbackPost[]>([]);
  const [sortType, setSortType] = useState<string>('MostUpvotes');

  const sortFeedback = (sortType: string) => {
    setSortType(sortType);
  };

  return (
    <FeedBackContext.Provider value={{ feedback, sortFeedback }}>
      {children}
    </FeedBackContext.Provider>
  );
}

export default FeedBackContextProvider;