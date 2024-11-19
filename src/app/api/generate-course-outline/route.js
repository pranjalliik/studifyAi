import { NextResponse } from "next/server";
import { courseOutline } from "@/configs/aiModel";
import { createCourse } from "@/configs/db";
import { inngest } from "../../../inngest/client"; // Import our client


export async function POST(req) {
  try {
    const { courseId, content, purpose, difficulty, createdBy } = await req.json();
    
    // Validate input
    if (!courseId || !content || !purpose || !difficulty || !createdBy) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const PROMPT = `Generate a study material for ${content} for ${purpose} and level of difficulty will be ${difficulty} with summary of course, List of Chapters along with summary for each chapter, Topic list in each chapter, All result in JSON format`;
     const aiResp = await courseOutline.sendMessage(PROMPT);
           
     console.log("AI Response:", aiResp);

     const aiResult = JSON.parse(aiResp.response.text());
    const dbRes = await createCourse(courseId, content, purpose, difficulty, aiResult, createdBy);

    //console.log("Database Insert Result:", dbRes);


  const result = await inngest.send({
    name : 'notes.generate' ,
    data : {
        course : dbRes.data[0]
    }
   })


    return NextResponse.json({ result: dbRes });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
