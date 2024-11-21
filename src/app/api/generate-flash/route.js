import { NextResponse } from "next/server";
import { generateFlashCard } from "@/configs/db";
import { inngest } from "../../../inngest/client"; // Import our client


export async function POST(req) {
  try {
   let {courseid , chapterStr} = await req.json();

   let dbRes = await generateFlashCard(courseid);
    console.log(dbRes)
    


    const PROMPT = 'Generate the flashcard on topic: ' + chapterStr +' in JSON format with front back content, Maximum 15'
    console.log(PROMPT)

  await inngest.send({
    name : 'flash.generate' ,
    data : {
        courseid : dbRes.data[0].courseid ,
        PROMPT
    }
   })


   
    return NextResponse.json({ result : dbRes});

  }catch(err){
    console.log(err)
  }
}