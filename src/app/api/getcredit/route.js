import { NextResponse } from "next/server";
import { countCreditConsumed } from "@/configs/db";

export async function POST(req) {
  const {email } = await req.json()

   let res = await countCreditConsumed(email)


  return NextResponse.json({ result : res });
}
