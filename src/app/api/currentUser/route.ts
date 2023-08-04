import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "http://localhost:3001/currentUser";

export async function GET() {
  const res = await fetch(DATA_SOURCE_URL);
  const user: User = await res.json();

  return new NextResponse(JSON.stringify(user));
}
