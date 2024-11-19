'use client'
import React from 'react'
import Image from 'next/image'
import book from '../../../public/course.png'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { RefreshCcw } from 'lucide-react'
import Link from 'next/link'

function CourseCard({course}) {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const [query, setQuery] = useState('');
  return (
    
    <div className = 'shadow-lg p-18 p-4 rounded-lg border'>
        <div className='flex justify-between '>
         <Image src={book} className='h-16 w-16 ' alt='course'></Image>
         <span className='hidden md:block lg:block xl:block'>12/12/23</span>
        </div>
        <div className='font-bold'>{course.topic}</div>
        { isDesktopOrLaptop && <p className='text-xs w-64 text-gray-700 mt-2  line-clamp-2 '>{course?.courselayout?.courseSummary
       }</p>}
       <div className='mt-4'><Progress value={10}/></div>
       <div className='flex justify-end mt-3'>
        {
            course.status === 'Generating' ?
          <Button className='px-1 bg-gray-400' >Generating..</Button>
            :
        <Button className='bg-blue-500'><Link href={`course/${course.courseid}`}>View</Link></Button>
        }
        </div>
    </div>
  
  )
}

export default CourseCard