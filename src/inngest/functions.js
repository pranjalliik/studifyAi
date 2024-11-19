import { inngest } from "./client";
import { checkAndAddUser } from "@/configs/db";
import { updateCourseStatus } from "@/configs/db";
import { addChapters } from "@/configs/db";
import { createChapterModel } from "@/configs/aiModel";
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
      const PROMPT =  'Generate exam material detail content for each chapter Make sure to includes all topic point in the content, make sure to give content in HTML format (Do not Add HTMLK, Head, Body, title tag), The chapter is ' + JSON.stringify(chapter)
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

  