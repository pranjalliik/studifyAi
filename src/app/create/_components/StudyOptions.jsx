import React from 'react'
import Image from 'next/image'
import examIcon from '../../../../public/examIcon.png'
import interview from '../../../../public/interview.png'
import practice from '../../../../public/practice.png'
import coding from '../../../../public/coding.png'
import others from '../../../../public/others.png' 



function StudyOptions({handleFormData,formData}) {
  return (
    <>
    <div className='mt-6 text-center font-lg font-semibold'>For which purpose you want to create study material?</div>

    <div className='flex flex-wrap lg:flex-row md:flex-row xl-flex:row items-center flex-col justify-center lg:mt-12 md:mt-12 xl:mt-12 mt-6 lg:gap-16 md:gap-16 xl:gap-4 gap-8'>
    <div className={`flex xl:h-[108px] lg:h-[108px] md:h-[108px]  lg:flex-row md:flex-row xl:flex-row flex-col lg:w-2/12 md:w-2/12 xl:w-2/12 rounded-lg bg-gray-300 items-center   hover:text-blue-500 text-center p-2 w-1/3 ${formData.purpose=== 'exam' && 'text-blue-500'}`} onClick={()=>handleFormData('purpose', 'exam')} >
        <Image src={examIcon} alt='examIcon'></Image>
        <div className=''>EXAM</div> 
      </div>
      <div className={`flex xl:h-[108px] lg:h-[108px] md:h-[108px]  lg:flex-row md:flex-row xl:flex-row flex-col lg:w-2/12 md:w-2/12 xl:w-2/12 rounded-lg bg-gray-300 items-center  hover:text-blue-500 text-center  p-2 w-1/3 ${formData.purpose=== 'job' && 'text-blue-500'} `}  onClick={()=>handleFormData('purpose', 'job interview')} >
        <Image src={interview} alt='job'></Image>
        <div className='ml-4'>JOB</div> 
      </div>
      <div className={`flex  xl:h-[108px] lg:h-[108px] md:h-[108px]  lg:flex-row md:flex-row xl:flex-row flex-col lg:w-2/12 md:w-2/12 xl:w-2/12 rounded-lg bg-gray-300 items-center   hover:text-blue-500 text-center p-2 w-1/3 ${formData.purpose=== 'practice' && 'text-blue-500'}`}  onClick={()=>handleFormData('purpose', 'practice')} >
        <Image src={practice} alt='practice'></Image>
        <div className=''>PRACTICE</div> 
      </div>
      <div className={`flex xl:h-[108px] lg:h-[108px] md:h-[108px]  lg:flex-row md:flex-row xl:flex-row flex-col lg:w-2/12 md:w-2/12 xl:w-2/12 rounded-lg bg-gray-300 items-center   hover:text-blue-500 text-center p-2 w-1/3 ${formData.purpose=== 'coding prep' && 'text-blue-500'}`}  onClick={()=>handleFormData('purpose', 'coding prep')} >
        <Image src={coding} alt='coding'></Image>
        <div className=''>CODING<br/>PREP </div> 
      </div>
      <div className={`flex xl:h-[108px] lg:h-[108px]  md:h-[108px]  lg:flex-row md:flex-row xl:flex-row flex-col lg:w-2/12 md:w-2/12 xl:w-2/12 rounded-lg bg-gray-300 items-center  hover:text-blue-500 text-center  p-2 w-1/3 ${formData.purpose=== 'others' && 'text-blue-500'}`}  onClick={()=>handleFormData('purpose', 'others')} >
        <Image src={others} alt='others'></Image>
        <div className=''>OTHERS</div> 
      </div>
    </div>
    </>
  )
}

export default StudyOptions