import { NextResponse } from "next/server";
import { getUserCourse } from "@/configs/db";
export async function POST(req) {

    const {user} = await req.json()
  //  console.log(user)
    let dbres = await getUserCourse(user);
   // console.log(dbres)
    return NextResponse.json({ data : dbres });

}