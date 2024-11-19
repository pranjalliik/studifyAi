'use client';
import CourseCard from './CourseCard';
import {useEffect,useState}  from 'react'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'
import { RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

function DashboardCourses() {
 
    const {user} = useUser()
   const[courses,setCourses] = useState([])
    useEffect(()=>{
     if(user){
       fetchUserCourses()
     }
    
    }
    ,[user])

    async function fetchUserCourses(){
        let res = await  axios.post('/api/usercourse',{
            user : user?.primaryEmailAddress?.emailAddress
        })
       console.log(res.data.data)
         if(res.data.data.data[0]){
        setCourses(res.data.data.data)
         }
    }
   console.log(courses)
  return (
    <div>
        <div className='mt-10 font-extrabold text-xl flex justify-between items-center'>Your Courses
          <Button onClick={fetchUserCourses} variant='outline' className='text-blue-500 hover:gray'><RefreshCcw/>Refresh</Button>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-4 xl:gap-x-4 md:gap-x-4 gap-x-1  gap-y-8 mt-6 '>
            { courses?.map((course)=>(
                <div key={course.id} >
               <CourseCard course={course}/>
               </div>  
            ))}
        </div>
    </div>
  )
}

export default DashboardCourses