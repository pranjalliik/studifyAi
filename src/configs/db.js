

import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL)

//console.log()

export async function helloWorld(){
    const [dbresponse] = await sql`SELECT NOW();`
    return dbresponse
}







export async function checkAndAddUser(email, name, isMember) {
    try {
      // Check if the user with the specified email exists
      const [existingUser] = await sql`SELECT * FROM users WHERE email = ${email}`;
   console.log(existingUser)
      // If the user doesn't exist, add them to the database
      if (!existingUser) {
        const [newUser] = await sql`
          INSERT INTO users (name, email)
          VALUES (${name}, ${email})
          RETURNING *;
        `;
        return { message: 'User added successfully', user: newUser };
      } else {
        return { message: 'User already exists', user: existingUser };
      }
    } catch (error) {
      console.error('Database query error:', error);
      throw new Error('Failed to check or add user');
    }
  }

  
export async function createCourse(courseId ,content ,purpose ,difficulty , layout ,createdBy) {
  try {

    const newCourse = await sql`INSERT INTO studymaterial (courseid , topic , coursetype  , difficultylevel , courselayout , createdBy) VALUES ( ${courseId} , ${content} , ${purpose} , ${difficulty} , ${layout} , ${createdBy}) RETURNING *`
    
    console.log('here is res-> ', newCourse)
 
    if (newCourse) {

      return { message: 'course added successfully', data : newCourse };
    } 
  } catch (error) {
    console.error('Database query error:', error);
    throw new Error('Failed to check or add user');
  }
}


export async function getUserCourse(user){
  try {
      console.log(user)
    const userCourse = await sql`SELECT * FROM studymaterial WHERE createdby= ${user} ORDER BY id DESC`
       //console.log(userCourse)
    if (userCourse) {

      return { data : userCourse };
    } 
  } catch (error) {
    console.error('Database query error:', error);
    throw new Error('Failed to check or add user');
  }
}


export async function updateCourseStatus(id){
  try {
    //  console.log(user)
    const updatedCourse = await sql`UPDATE studymaterial SET status = 'Completed' WHERE courseid = ${id}`
    if ( updatedCourse) {

      return { data : updatedCourse };
    } 
  } catch (error) {
    console.error('Database query error:', error);
    throw new Error('Failed to check or add user');
  }
}


export async function addChapters(courseid , chapterid , notes){

  try{
    console.log(chapterid)
    let reschapter = await sql`INSERT INTO chapternotes ( courseid , chapterid , notes) VALUES ( ${courseid} , ${chapterid} , ${notes}) RETURNING *`
    if(reschapter){
      return { data : reschapter };
    }

  }catch(err){
    console.error('Database query error:', err);
  }
}

export async function getCourse(courseid){

  try{
    let res = await sql`SELECT * FROM studymaterial where courseid = ${courseid}`
   // console.log('course-> ',res)
    return { data : res };


  }catch(err){
    console.log(err)
  }
}


export async function getNotes(courseid){

  try{
    let res = await sql`SELECT * FROM chapternotes WHERE courseid = ${courseid} ORDER BY chapterid ASC`;
    console.log('course-> ',res)
    return { data : res };


  }catch(err){
    console.log(err)
  }
}


export async function getFlashcards(courseid){

  try{
    let res = await sql`SELECT * FROM flashcards WHERE courseid = ${courseid}`;
   // console.log('flash-> ',res)
    return { data : res };


  }catch(err){
    console.log(err)
  }
}

export async function getCourseQuiz(courseid){

  try{
    let res = await sql`SELECT * FROM quiz WHERE courseid = ${courseid}`;
   // console.log('quiz-> ',res)
    return { data : res };


  }catch(err){
    console.log(err)
  }
}


export async function updateflash(flashcard,courseid ,status){
  try{
    let res = await sql`UPDATE flashcards SET flashcards = ${flashcard} , status = ${status} WHERE courseid = ${courseid} RETURNING *`
       console.log('updated flashcard ->',res )
       return { data : res };
  }
  catch(err){
    console.log(err);
  }
}


export async function generateFlashCard(courseid){
  try{
    let res = await sql`INSERT INTO flashcards (courseid ) VALUES ( ${courseid} ) RETURNING *`
      console.log('flashcard generate =>' , res)
    return { message: 'course added successfully', data : res };
  }catch(err){
        console.log(err)
  }
}



export async function deleteFlashcard(courseId){
  try{
 let res = await sql`DELETE FROM flashcards WHERE courseid = ${courseId}`
  }catch(err){
    console.log(err)
  }
}


export async function deleteQuiz(courseId){
  try{
 let res = await sql`DELETE FROM quiz WHERE courseid = ${courseId}`
  }catch(err){
    console.log(err)
  }
}




export async function generateQuiz(courseid){
  try{
    let res = await sql`INSERT INTO quiz (courseid ) VALUES ( ${courseid} ) RETURNING *`
      console.log('quiz generate =>' , res)
    return { message: 'quiz added successfully', data : res };
  }catch(err){
        console.log(err)
  }
}



export async function updateQuiz(quiz,courseid ,status){
  try{
    let res = await sql`UPDATE quiz SET questions = ${quiz} , status = ${status} WHERE courseid = ${courseid} RETURNING *`
       console.log('updated quiz ->',res )
       return { data : res };
  }
  catch(err){
    console.log(err);
  }
}


export async function countCreditConsumed(email){
   try{  
  let userRes = await sql`SELECT * from users WHERE email = ${email}`
 
  console.log(userRes[0].isMember)
  if(!userRes[0].isMember){
  let courseCount = await sql`SELECT COUNT(*) FROM studymaterial WHERE createdby = ${email}`
 // console.log(courseCount)
    return {creditconsumed : courseCount }
  }else{
    return {creditconsumed :[{ count : -1 }]}
  }
}catch(err){
  console.log(err)
}
}