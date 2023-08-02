import { NextResponse } from "next/server";

export async function GET() {

  const res = await fetch("http://localhost:3001/productRequests");
  const feedback: FeedbackPost[] = await res.json();

  return new NextResponse(JSON.stringify(feedback));
}

