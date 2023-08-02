import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  const categories = url.searchParams.get("categories");
  const sort = url.searchParams.get("sort");
  const status = url.searchParams.get("status");

  const res = await fetch("http://localhost:3001/productRequests");
  const feedback: FeedbackPost[] = await res.json();

  let filteredFeedback = filterFeedback(feedback, "category", categories);
  filteredFeedback = filterFeedback(filteredFeedback, "status", status);

  filteredFeedback = sortFeedback(sort, filteredFeedback);

  return new NextResponse(JSON.stringify(filteredFeedback));
}

const filterFeedback = (
  feedbackArr: FeedbackPost[],
  property: "category" | "status",
  filterStr: string | null
): FeedbackPost[] => {
  if (filterStr?.includes("all") || !filterStr) {
    return feedbackArr;
  }

  const filterArr = filterStr.split(",");

  const filteredFeedback = feedbackArr.filter((feedback) => {
    return filterArr.some((filterVal) => {
      return feedback[property] === filterVal;
    });
  });
  return filteredFeedback;
};

const sortFeedback = (sort: string | null, feedbackArr: FeedbackPost[]): FeedbackPost[] => {
  if (!sort || sort === "mostUpvotes") {
    const sortedFeedback = feedbackArr.sort((a, b) => b.upvotes - a.upvotes);
    return sortedFeedback;
  } else if (sort === "leastUpvotes") {
    const sortedFeedback = feedbackArr.sort((a, b) => a.upvotes - b.upvotes);
    return sortedFeedback;
  } else if (sort === "mostComments") {
    const sortedFeedback = feedbackArr.sort(
      (a, b) => b.comments.length - a.comments.length
    );
    return sortedFeedback;
  } else if (sort === "leastComments") {
    const sortedFeedback = feedbackArr.sort(
      (a, b) => a.comments.length - b.comments.length
    );
    return sortedFeedback;
  }
  return feedbackArr;
};