import { inngest } from "./client";
import { checkAndAddUser } from "@/configs/db";
import { updateCourseStatus } from "@/configs/db";
import { addChapters } from "@/configs/db";
import { createChapterModel } from "@/configs/aiModel";
import { updateflash } from "@/configs/db";
import { flashCardModel } from "@/configs/aiModel";
import { deleteFlashcard } from "@/configs/db";
import { quizModel } from "@/configs/aiModel";
import { deleteQuiz , updateQuiz } from "@/configs/db";


export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { event, body: "Hello, World!" };
  },
);


export const createUser = inngest.createFunction(
  { id: "create-user" },
  { event: "user.create" },
  async ({ event, step }) => {
    const {user} = event.data
    
    const result = await step.run('check and add user',async()=>{
      const response = await checkAndAddUser( user?.primaryEmailAddress.emailAddress, user?.fullName, false);
      console.log(response);
  
    })
    return 'success'
  
  },
);



export const GenerateNotes=inngest.createFunction(

  {id: 'generate-course'}, 
  {event:'notes.generate'},
   async({event,step})=>{
const {course}=event.data;

  const notesResult = await step.run('Generate Chapter Notes',async()=>{
    const chapters  = course?.courselayout?.chapters
    let index = 0;

    for (const chapter of chapters) {
      const PROMPT =  'Generate exam material detail content for each chapter Make sure to includes all topic point in the content, make sure to give content in HTML format (Do not Add HTMLK, Head, Body, title tag), The chapter is ' + JSON.stringify(chapter) + ' I want you to give me answer in this format only  like "content" :  then html content '
      console.log(PROMPT);
  
      const aiResp = await createChapterModel.sendMessage(PROMPT);
           
         console.log("AI Response:", aiResp);

        const aiResult = aiResp.response.text();

      
      const dbres = await addChapters(course?.courseid, index, aiResult);
      console.log(dbres);
    
      index = index + 1; // Increment index after awaiting the async operation
    }
    return 'Completed'
  })
  
   const updateStatusRes = await step.run('Update course status to ready',async()=>{
      console.log(course.courseid)
             let res = await updateCourseStatus(course.courseid) 
 
         return 'Success'
            })
 

  })

  export const generateFlashCard=inngest.createFunction(

    {id: 'generate-flash'}, 
    {event:'flash.generate'},
     async({event,step})=>{
      const {courseid,PROMPT}=event.data;

      const flashResult = await step.run('Generate flash cards',async()=>{
        let aiResult 
        try{
      const aiResp = await flashCardModel.sendMessage(PROMPT);
      console.log('aiResp flash-> ',aiResp  )
       aiResult = JSON.parse(aiResp.response.text());
       console.log('aiResult ->', aiResult)
         }catch(err){ 
           deleteFlashcard(courseid)
           return 'failed'
        }
    
      let dbRes = await updateflash( aiResult, courseid , 'completed' )
      return 'Success'

      })
     }
  )






  export const generateQuiz=inngest.createFunction(

    {id: 'generate-quiz'}, 
    {event:'quiz.generate'},
     async({event,step})=>{
      const {courseid,PROMPT}=event.data;

      const quizResult = await step.run('Generate quiz',async()=>{
        let aiResult //done till here 
        try{
      const aiResp = await quizModel.sendMessage(PROMPT);
       aiResult = JSON.parse(aiResp.response.text());
         }catch(err){ 
           deleteQuiz(courseid)
           return 'failed'
        }
    
      let dbRes = await updateQuiz( aiResult, courseid , 'completed' )
      return 'Success'

      })
     }
  )