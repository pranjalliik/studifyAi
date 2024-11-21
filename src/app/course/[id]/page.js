'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { useEffect ,useState } from 'react'
import axios from 'axios'
import DashboardHeader from '@/app/components/DashboardHeader'
import CourseIntoCard from './_components/CourseIntoCard'
import { ThreeDots } from 'react-loader-spinner';


function Course() {

const params = useParams()
const [course , setCourse] = useState('')
const [loading , setLoading] = useState()
const [flashloading , setFlashloading] = useState(false)
const [quiz,setQuiz] = useState(false)
const[flash , setFlash] = useState(false)
const [quizloading , setQuizloading] = useState(false)

useEffect(()=>{
  getCourse()
  getStudyMaterial()
},[params])

//console.log(course)
async function getCourse(){

  setLoading('loading')
    try{
     let res = await axios.get(`/api/course/${params.id}`)
     if(res.data?.result?.data?.[0]){
        setCourse(res.data?.result?.data?.[0])
        setLoading('')
     }
    }catch(err){
        
    }
}


async function getStudyMaterial(){

  try{
     let res = await axios.post('/api/getstudymaterial',{courseid : params.id , studymaterial : { flashcard : true, quiz: true}})
          console.log(res)

     if(res.data?.result){
        //setCourse(res.data?.result?.data?.[0])

       if(res.data?.result?.resFlash?.data?.[0]){
               if(res.data?.result?.resFlash?.data?.[0]?.status === 'completed'){
                setFlash(true)
               }else if(res.data?.result?.resFlash?.data?.[0]?.status === 'Generating'){
                setFlashloading(true)
               }
       }

       if( res.data?.result?.resQuiz?.data?.[0]){
        if(res.data?.result?.resQuiz?.data?.[0]?.status === 'completed'){
          setQuiz(true)
         }else if(res.data?.result?.resQuiz?.data?.[0]?.status === 'Generating'){
          setQuizloading(true)
         }
      }

     }
    }catch(err){
         
    }
}





    return (
<> <DashboardHeader/>
 { course ?<CourseIntoCard course={course} flash={flash} quiz={quiz} flashloading={flashloading} setFlashloading={setFlashloading} quizloading={quizloading} setQuizloading={setQuizloading} /> 
  :
  <div  className="flex justify-center mt-6">
  <ThreeDots
  
    color="#000000" // Change color of loader
    height={10} // Set height of loader
    width={100} // Set width of loader
  />
  
  </div>
}
</>
 )
}

export default Course