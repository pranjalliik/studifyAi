'use client'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import QuizItem from './_components/QuizItem'
import { ThreeDots } from 'react-loader-spinner'
import axios from 'axios'

function page() {
    const params = useParams()
    const [step,setStep] = useState(0)
    const[queRes , setQueRes ] = useState(false)
   const[quiz,setQuiz] = useState()
    const[selectedAns , setSelectedAns] = useState('')

    useEffect(()=>{
       
        getQuiz()
      },[params])

    async function getQuiz(){
        try{
           let res = await axios.post('/api/getstudymaterial',{courseid : params.id , studymaterial : { quiz: true}})
                console.log(res)
      
           if(res.data?.result){
              //setCourse(res.data?.result?.data?.[0])
      
             if(res.data?.result?.resQuiz?.data?.[0]){
                     if(res.data?.result?.resQuiz?.data?.[0]?.questions){
                    //  setFlash(true) setflashcards  (JSON.parse(res.data?.result?.resFlash?.data?.[0]?.flashcards))
                  
                    setQuiz(JSON.parse(res.data.result.resQuiz.data[0].questions))
               
                  }}}
          }catch(err){
               }}

/*
    let quiz = {
        "quizTitle": "Flutter Fundamentals & UI Development",
        "questions": [
          {
            "question": "What is the primary programming language used in Flutter?",
            "options": ["Java", "Kotlin", "Dart", "Swift"],
            "correctAnswer": "Dart"
          },
          {
            "question": "Which widget is the root of most Flutter applications?",
            "options": ["Container", "Row", "Column", "MaterialApp"],
            "correctAnswer": "MaterialApp"
          },
          {
            "question": "What is the purpose of a StatefulWidget in Flutter?",
            "options": ["To create a static UI that doesn't change", "To create a UI that can rebuild based on changes in state", "To manage app-wide themes", "To handle user input"],
            "correctAnswer": "To create a UI that can rebuild based on changes in state"
          },
          {
            "question": "Which widget is used to arrange children horizontally in a row?",
            "options": ["Column", "Row", "Stack", "Container"],
            "correctAnswer": "Row"
          },
          {
            "question": "How do you navigate from one screen to another in Flutter using Navigator?",
            "options": ["Navigator.push(context, MaterialPageRoute(builder: (context) => YourNewScreen()));", "Navigator.pop(context);", "Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => YourNewScreen()));", "All of the above"],
            "correctAnswer": "Navigator.push(context, MaterialPageRoute(builder: (context) => YourNewScreen()));"
          },
          {
            "question": "What does the `BuildContext` represent in Flutter?",
            "options": ["The current screen's dimensions", "The entire app's state", "The widget tree's location of a given widget", "The user's device information"],
            "correctAnswer": "The widget tree's location of a given widget"
          },
          {
            "question": "Which widget is best suited for displaying a list of items that can be scrolled?",
            "options": ["ListView", "GridView", "Column", "Row"],
            "correctAnswer": "ListView"
          },
          {
            "question": "What is the purpose of a `Key` in Flutter widgets?",
            "options": ["To uniquely identify a widget", "To determine the widget's position in the layout", "To specify the widget's color", "To define the widget's size"],
            "correctAnswer": "To uniquely identify a widget"
          },
          {
            "question": "What does the `StatelessWidget` do?",
            "options": ["It rebuilds its UI when state changes.", "It holds state data that can change over time.", "It is a widget that never changes its UI after it's built.", "It handles user interactions."],
            "correctAnswer": "It is a widget that never changes its UI after it's built."
          },
          {
            "question": "What is the method used to update the UI in a StatefulWidget?",
            "options": ["setState()", "updateUI()", "refresh()", "repaint()"],
            "correctAnswer": "setState()"
          }
        ]
      }*/

      
function incStep(){
    setQueRes(false)
    setSelectedAns('')

    if(step == quiz.questions.length-1){
    console.log('hii')
      setStep(0)
      return
   }

   setStep(step+1)
 }
 console.log(step)

 function decStep(){
    setQueRes(false)
   setSelectedAns('')
   if(step == 0){
     setStep(quiz.questions.length-1)
     return
   }

   setStep(step-1)
}

  return (
    <>
    { quiz ?
    <div>
        <div className='flex justify-center gap-x-3 xl:mx-32 lg:mx-28 md:mx-24 mx-2 mt-6'>
         {quiz.questions.map((question,index)=>(
             <div className={`h-2 w-full rounded-lg  shadow-lg ${index<= step? 'bg-blue-500' : 'bg-gray-300'} `} key={index}  ></div>
         ))
         
         
         }
        </div>
        <QuizItem question={quiz.questions[step]} setQueRes={setQueRes} queRes={queRes} selectedAns={selectedAns} setSelectedAns={setSelectedAns}/>
         <div className='mt-6 flex justify-center lg:flex-row xl:flex-row md:flex-row flex-col gap-x-64 gap-y-4 items-center '>
        <Button className='px-12 py-6 ' onClick={decStep} >Prev</Button>
        <Button className='px-12 py-6 ' onClick={incStep} >Next</Button>
        </div> 
    </div> :   
    <div  className="flex justify-center mt-6">
            <ThreeDots
            
              color="#000000" // Change color of loader
              height={10} // Set height of loader
              width={100} // Set width of loader
            />
            
            </div>  }
    </>
  )
}

export default page