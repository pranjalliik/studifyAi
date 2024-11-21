import { NextResponse } from "next/server";
import { generateQuiz } from "@/configs/db";
import { inngest } from "../../../inngest/client"; // Import our client


export async function POST(req) {
  try {
   let {courseid , chapterStr} = await req.json();

   let dbRes = await generateQuiz(courseid);
    console.log(dbRes)
    


    const PROMPT = 'Generate Quiz on topic: ' + chapterStr +' with Question and Options along with correct answer in JSON format'
    console.log(PROMPT)

  await inngest.send({
    name : 'quiz.generate' ,
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