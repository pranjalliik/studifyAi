'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { useEffect ,useState } from 'react'
import axios from 'axios'
import DashboardHeader from '@/app/components/DashboardHeader'
import CourseIntoCard from './_components/CourseIntoCard'


function Course() {

const params = useParams()
const [course , setCourse] = useState('')
const [loading , setLoading] = useState()
useEffect(()=>{
  getCourse()
},[params])

console.log(course)
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

    return (
<> <DashboardHeader/>
<CourseIntoCard course={course}/>
</>
 )
}

export default Course