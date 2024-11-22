'use client'
import {useState , useEffect} from 'react'
import { useParams } from 'next/navigation'
import { ThreeDots } from 'react-loader-spinner';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { split } from 'postcss/lib/list';
function page() {

    const params = useParams()
    const [step,setStep] = useState(0)
    const [course , setCourse] = useState('')
    const [loading , setLoading] = useState('')
    useEffect(()=>{
      getCourse()
    },[params])
   
    async function getCourse(){
        
      setLoading('loading')
        try{

         let res = await axios.get(`/api/getnotes/${params.id}`)
         if(res.data?.result?.data?.[0]){
            setCourse(res.data?.result?.data)

            setLoading('')
         }
  
        }catch(err){
            setLoading('error')
        }
    }


 function incStep(){
   if(step == course.length-1){
      setStep(0)
      return
   }

   setStep(step+1)
 }

 function decStep(){
   if(step == 0){
     setStep(course.length-1)
     return
   }

   setStep(step-1)
 }

  return (
    <>
    {
        loading === 'loading'?
        
        <div className='flex justify-center mt-8'>
                  <ThreeDots
      
      color="#000000" // Change color of loader
      height={10} // Set height of loader
      width={100} // Set width of loader
    />
    </div> :loading === 'error' ?
     <div className='mt-8 text-center twxt-bold'>Error!! something went wrong</div>
     :
     <div className='mt-8'>
      <div className='flex justify-center gap-x-3 '>
         <div className={`h-2 w-1/5 rounded-lg  shadow-lg ${(step+1)%3 == 1 ? 'bg-blue-500' : 'bg-gray-300'}`}  ></div>
         <div className={`h-2 w-1/5 rounded-lg  shadow-lg  ${(step+1)%3 == 2 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
         <div className={`h-2 w-1/5 rounded-lg shadow-lg ${(step+1)%3 == 0 ? 'bg-blue-500' : ' bg-gray-300'}`}></div>
      </div>
      <div className='flex justify-between lg:px-12 xl:px-12 md:px-12 px-3 mt-6 '>       
     <Button className='px-8' onClick={decStep}>Prev</Button>
      <Button className='px-8' onClick={incStep}>Next</Button>      
      </div>
      <div className='m-10'>
        <div className='text-2xl font-bold'>Chapter {step+1}</div>
      <div dangerouslySetInnerHTML={{ __html: course?.[step]?.notes?.split(`content": "`)?.[1]?.replaceAll('\\n',' ').replace(`"}` , ' ') }} />
      </div>
     </div>
    }
    </>
  )
}

export default page