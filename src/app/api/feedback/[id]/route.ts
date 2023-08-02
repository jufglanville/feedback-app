import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "http://localhost:3001/productRequests";

type Props = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, { params: { id } }: Props) {
  const res = await fetch(`${DATA_SOURCE_URL}/${id}`);
  const feedback: FeedbackPost = await res.json();

  return new NextResponse(JSON.stringify(feedback));
}
