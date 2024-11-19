'use client'
import { Select, SelectContent, SelectItem,  SelectTrigger,  SelectValue,
  } from "@/components/ui/select"
  import { Textarea } from "@/components/ui/textarea"

  import React from 'react'
  
  function SelectOptions({handleFormData}) {
    return (
        <div>
            <div className='mt-12 text-center font-lg font-semibold'>Enter topic or paste content for which you want to generate</div>
            <div className='flex flex-col items-center mt-4 '>
            <Textarea className='w-1/2 mt-2 mb-2' onChange={(event)=>{handleFormData('content',event.target.value)}} />

       
<Select onValueChange={(value)=>handleFormData('difficulty',value)}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Difficulty" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="easy">Easy</SelectItem>
    <SelectItem value="moderate">Moderate</SelectItem>
    <SelectItem value="hard">Hard</SelectItem>
  </SelectContent>
</Select>
</div>
</div>
    )
  }
  
  export default SelectOptions