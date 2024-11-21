'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import FlashcardItem from './FlashcardItem'
import { Button } from '@/components/ui/button'
function page() {

    const params = useParams()
    const [step,setStep] = useState(0)
    const[isFlipped , setisFlipped] = useState()
   useEffect(()=>{
       
        getFlashcard()
      },[params])
let flashcards = [  {
    "front": "What is a Widget in Flutter?",
    "back": "The fundamental building block of Flutter UI. Everything you see on the screen is a widget."
  },
  {
    "front": "What are the two main types of Widgets?",
    "back": "StatelessWidget and StatefulWidget."
  },
  {
    "front": "When to use StatelessWidget?",
    "back": "For widgets whose state (data) doesn't change over time."
  },
  {
    "front": "When to use StatefulWidget?",
    "back": "For widgets whose state (data) changes over time, requiring rebuilds."
  },
  {
    "front": "Explain the `build()` method.",
    "back": "In a widget, this method describes the UI based on the widget's state. It's called whenever the widget needs to be redrawn."
  },
  {
    "front": "What is a `BuildContext`?",
    "back": "Provides information about the widget's position in the widget tree."
  },
  {
    "front": "Name three common layout widgets.",
    "back": "Row, Column, and Stack."
  },
  {
    "front": "What does a `Row` widget do?",
    "back": "Arranges children horizontally."
  },
  {
    "front": "What does a `Column` widget do?",
    "back": "Arranges children vertically."
  },
  {
    "front": "What does a `Stack` widget do?",
    "back": "Overlays children on top of each other."
  },
  {
    "front": "How do you navigate to a new screen in Flutter?",
    "back": "Using `Navigator.push()`."
  },
  {
    "front": "How do you return from a screen in Flutter?",
    "back": "Using `Navigator.pop()`."
  },
  {
    "front": "What is a `MaterialApp`?",
    "back": "A widget that provides a Material Design theme and manages navigation."
  },
  {
    "front": "What is a `Route`?",
    "back": "A description of how to transition between screens in a navigation stack."
  },
  {
    "front": "What is the purpose of `Key` in widgets?",
    "back": "To uniquely identify a widget, especially useful when manipulating or replacing widgets in a tree. Helps in efficient updates."
  }
]
console.log(flashcards[0])
      async function getFlashcard(){

        try{
           let res = await axios.post('/api/getstudymaterial',{courseid : params.id , studymaterial : { flashcard : true}})
                console.log(res)
      
           if(res.data?.result){
              //setCourse(res.data?.result?.data?.[0])
      
             if(res.data?.result?.resFlash?.data?.[0]){
                     if(res.data?.result?.resFlash?.data?.[0]?.flashcards){
                    //  setFlash(true) setflashcards

                     }
             }
      

      
           }
          }catch(err){
               
          }
      }
const handleClick = ()=>{
     setisFlipped(!isFlipped)
}


function incStep(){
    console.log(flashcards.length)
    setisFlipped(false)
   if(step == flashcards.length-1){
    console.log('hii')
      setStep(0)
      return
   }

   setStep(step+1)
 }
 console.log(step)

 function decStep(){
    setisFlipped(false)
   if(step == 0){
     setStep(flashcards.length-1)
     return
   }

   setStep(step-1)
 }

  return (
    <div className='lg:mt-10 xl:mt-10 md:mt-10 mt-4'>

<div className='flex justify-center gap-x-3 '>
         <div className={`h-2 w-1/5 rounded-lg  shadow-lg ${(step+1)%3 == 1 ? 'bg-blue-500' : 'bg-gray-300'}`}  ></div>
         <div className={`h-2 w-1/5 rounded-lg  shadow-lg  ${(step+1)%3 == 2 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
         <div className={`h-2 w-1/5 rounded-lg shadow-lg ${(step+1)%3 == 0 ? 'bg-blue-500' : ' bg-gray-300'}`}></div>
       
      </div>
      <div className=''>

      <FlashcardItem isFlipped={isFlipped} handleClick={handleClick} flashcard={flashcards[step]}/>
      <div className='mt-6 flex justify-center lg:flex-row xl:flex-row md:flex-row flex-col gap-x-64 gap-y-4 items-center '>
        <Button className='px-12 py-6 ' onClick={decStep} >Prev</Button>
        <Button className='px-12 py-6 ' onClick={incStep} >Next</Button>
        </div>
      </div>
    </div>
  )
}

export default page