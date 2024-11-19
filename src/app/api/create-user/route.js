import { NextResponse } from "next/server";
import { inngest } from "../../../inngest/client"; // Import our client

// Opt out of caching; every request should send a new event
export const dynamic = "force-dynamic";

// Create a simple async Next.js API route handler
export async function POST(req) {
  const {user} = await req.json()

  const result = await inngest.send({
    name: "user.create",
    data: {
      user : user,
    },
  });

  return NextResponse.json({ result : result });
}
