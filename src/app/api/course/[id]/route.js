import { NextResponse } from "next/server";
import { getCourse } from "@/configs/db";

export async function GET(req , { params }) {

    const { id } = await params;

   // console.log(id)
    const course = await getCourse(id) ;
    
    return NextResponse.json({result:course})

    }