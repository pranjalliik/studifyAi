'use client'
import {useState , useEffect} from 'react'
import { Button } from '@/components/ui/button'



function QuizItem({question , setQueRes , queRes ,setSelectedAns ,selectedAns }) {

    const[isAnsCorrect , setIsAnsCorrect] = useState(false)
    const[innerText , setInnerText] = useState('')

    function handleAnsSubmit(userAns){
        setSelectedAns(userAns)
        if(question.correctAnswer === userAns ){
            setIsAnsCorrect(true)
            setInnerText('Your Answer is correct')
            
        }else{
            setIsAnsCorrect(false)
            setInnerText(`Incorrect Answer-
                corrrect answer is ${question.correctAnswer}`)
        }

        setQueRes(true)
    }
   

  return (
    <div className='xl:mt-16 lg:mt-16 md:mt-16 mt-8'>
        <div className='font-semibold text-xl text-center'>{question.question}</div>
        <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-4  place-items-center gap-y-4	'>
      {question.options.map((option,index)=>(
        <div  key={index} className={`text-md border border-gray-400 rounded-lg w-1/2 text-center hover:bg-gray-200 py-3 ${selectedAns === option? 'bg-blue-500 hover:bg-blue-500' : ''}`} onClick={()=>handleAnsSubmit(option)} > {option}</div>
      ))}
      </div>
      { queRes&&
      <div className='flex justify-center xl:mt-10 lg:mt-10 md:mt-10 mt-5 '>
        <div className={`w-1/2 text-center  bg-gray-300 py-6 rounded-lg ${isAnsCorrect? 'bg-green-500 text-white' : 'bg-red-500 text-white' }`}>{innerText}</div>
      </div> }
    </div>
  )
}

export default QuizItem