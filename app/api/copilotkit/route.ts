import { NextResponse } from "next/server";
import { movieAgent } from "@/agents/movie-agent";
export async function POST(request: Request) {
  const body = await request.json();
  const result = await movieAgent(body.message);
  return NextResponse.json(result);
}
