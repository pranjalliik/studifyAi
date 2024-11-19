'use client'
import React from 'react'
import Image from 'next/image'
import cii from '../../../../../public/cii.png'
import { useMediaQuery } from 'react-responsive'
import { useState ,useEffect} from 'react'
import lamp from '../../../../../public/lamp.png'
import graylamp from '../../../../../public/study.png'

import { Button } from '@/components/ui/button'
function CourseIntoCard({course}) {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const [query, setQuery] = useState('');

    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        if(!isClient)setIsClient(true);
      }, []);

      if (!isClient) return null;

  return (
    <div className=''>
        
        <div  className='flex shadow-lg   xl:ml-28 xl:mr-28  mx-2 md:mx-5 lg:mx-8 mt-8 '>
        { isDesktopOrLaptop&& course && <Image src={cii} alt='course' className='w-52 p-2'/> }

         <div className=''>
            <div className='font-bold text-2xl'>{course.topic}</div>
            <div className='text-sm mt-2 pb-2 '>{course?.courselayout?.courseSummary}</div>
         </div>
        </div>
        <div className='text-center font-bold text-2xl mt-8'>Study Material</div>
        <div className='flex lg:flex-row xl:flex-row md:flex-row flex-col gap-x-4 justify-center mt-6 gap-y-6'>

         <div className='shadow-lg flex flex-col items-center lg:w-1/4 xl:w-1/4 md:w-1/4 mx-5 py-4 bg-gray-200 rounded-lg'>
            <div className='bg-green-500 px-4 text-white rounded-lg'>ready</div>
            <Image src={lamp} alt='lampicon' className=''/>
            <div className='text-lg font-semibold'>Notes</div>
            <Button className='bg-black py-1 px-8 mt-2'>Continue</Button>
            </div> 
          
            <div className='shadow-lg flex flex-col items-center lg:w-1/4 xl:w-1/4 md:w-1/4 mx-5 py-4 bg-gra rounded-lg'>
            <div className='bg-gray-400 px-4 text-white rounded-lg'>not prepared</div>
            <Image src={graylamp} alt='lampicon' className='h-[81px] w-[77px] mt-2'/>
            <div className='text-lg font-semibold mt-2'>Notes</div>
            <Button className='bg-black py-1 px-8 mt-2 bg-gray-400'>Generate</Button>
            </div> 

            <div className='shadow-lg flex flex-col items-center lg:w-1/4 xl:w-1/4 md:w-1/4 mx-5 py-4 bg-gray-200 rounded-lg'>
            <div className='bg-green-500 px-4 text-white rounded-lg'>ready</div>
            <Image src={lamp} alt='lampicon' className=''/>
            <div className='text-lg font-semibold'>Notes</div>
            <Button className='bg-black py-1 px-8 mt-2'>Continue</Button>
            </div> 

        </div>
    </div>
  )
}

export default CourseIntoCard