'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import StudyOptions from './_components/StudyOptions'
import { useState } from 'react'
import SelectOptions from './_components/SelectOptions'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs'
import { Loader } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"
import { useRouter } from 'next/navigation'
import DashboardHeader from '../components/DashboardHeader'
function CreateCourse() {

  const[ step , setStep] = useState(0)
  const [formData , setFormdata] = useState([])
  const[loading , setLoading] = useState('')
  const {user} = useUser()
  const { toast } = useToast()
 const router = useRouter()
 
  function handleFormData(name, value){
    setFormdata(prev=>({
      ...prev,
      [name] : value
    }))
  }

async function handleGenerate(){

  setLoading('loading')
    const courseId = uuidv4()
    try{
  let res = await axios.post('/api/generate-course-outline',{
 courseId : courseId,
 ...formData ,
 createdBy : user?.primaryEmailAddress?.emailAddress

  })
  if(res){
    setLoading('')
    router.push('/dashboard')
  }
  toast({
    title: "Your Course is Generating",
    description: "Click on refresh to chech for updates",
  })
}catch(err){
  setLoading('failed')
}
}

  return (
    <div>
      <DashboardHeader/>
        <div className='text-center text-2xl text-blue-600 font-bold lg:mt-8 md:mt-8  xl:mt-8 mt-8' > Start Building Your Personal Study Material</div>
        <div className='mt-2 text-center font-lg text-gray-400'>Fill the details in order to generate study material for you</div>
       { step == 0 &&  <StudyOptions handleFormData={handleFormData} formData={formData}/> }
        { step== 1 &&<SelectOptions handleFormData={handleFormData} />}
   
     <div className='flex  lg:justify-around md:justify-around xl:justify-around gap-x-24 lg:flex-row md:flex-row xl:flex-row items-center  flex-col   mt-16 mb-6'>
     { step != 0 && <Button className='md:w-1/6 lg:w-1/6 xl:w-1/6 w-1/3 py-6' onClick={()=>setStep(step-1)}>Prev</Button> }
     { formData.purpose && step==0 &&<Button className='lg:w-1/6 md:w-1/6 xl:w-1/6 w-1/3 py-6 lg:mt-0 xl:mt-0 md:mt-0 mt-6 ' onClick={()=>setStep(step+1)}>Next</Button> }
     {step === 1 && (
  <>
    {loading === 'loading' ? (
      <Button className="lg:w-1/6 md:w-1/6 xl:w-1/6 w-1/3 py-6 lg:mt-0 xl:mt-0 md:mt-0 mt-6">
      <Loader className="animate-spin" />
    </Button>
    ) :  (
           <Button
            className="lg:w-1/6 md:w-1/6 xl:w-1/6 w-1/3 py-6 lg:mt-0 xl:mt-0 md:mt-0 mt-6"
            onClick={handleGenerate}>
            Generate
          </Button>
    ) }
     
  </>
)}

     </div>
     { loading === 'failed' &&
     
         <div className='mt-2 text-gray-500 text-center'>cannot generate course at the moment!!</div>
     
     }
    </div>
  )
}

export default CreateCourse