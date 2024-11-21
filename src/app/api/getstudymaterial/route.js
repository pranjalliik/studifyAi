import { NextResponse } from "next/server";
import { getFlashcards , getCourseQuiz } from "@/configs/db";

export async function POST(req) {
  const {courseid , studymaterial} = await req.json()
 let resFlash 
 let resQuiz 
  if(studymaterial.flashcard){
      resFlash = await getFlashcards(courseid)
  }

  if(studymaterial.quiz){
    resQuiz = await getCourseQuiz(courseid)
}

  return NextResponse.json({ result : {resFlash , resQuiz} });
}
