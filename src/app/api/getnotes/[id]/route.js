import { NextResponse } from "next/server";
import { getNotes } from "@/configs/db";

export async function GET(req , { params }) {

    const { id } = await params;

    console.log(id)
    const notes = await getNotes(id) ;
    
    return NextResponse.json({result:notes})

    }