'use  client'
import React from 'react'
import logo from  '../../../public/logo.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { LayoutDashboard ,Shield , UserCircle } from 'lucide-react'
import Link from 'next/link';


function Sidebar() {


    const MenuList=[

        {
         name: 'Dashboard',
        icon: LayoutDashboard,
        path: '/dashboard'
        },
        {  
        name: 'Upgrade',
        icon:Shield,
         path: '/dashboard/upgrade'
        
        },
        {  
            name: 'Profile',
            icon:UserCircle,
             path: '/dashboard/profile'
            
            },
    ]





  return (
    <div className="h-screen shadow-lg  md:w-64 lg:w-64  xl:w-64 w-0 ">
        <div className="flex mt-2 ">
        <Image src={logo} alt='logo' />
        <div className='font-bold text-2xl mt-6 text-[#4c81d1]'>StudifyAI</div>
        </div>

        <div className="flex justify-center mt-3">
        <Button className="bg-blue-600 px-8">+ Create New</Button>

        </div>
        <div className=" mt-8">
            {MenuList.map((menu,index)=>(
                <div key={index} className="flex gap-5 items-center p-3 pl-8 rounded-lg hover:bg-black hover:text-white">
                    <menu.icon/>
                    <div className=''>{menu.name}</div>
                </div>
            ))}
        </div>

        <div className='m-3  gap-y-2  p-4 rounded-lg bg-slate-200 absolute bottom-10 lg:ml-2 xl:ml-6 md:ml-2 ml-2'>
            <div className='text-center mb-1'>Avaliable Credits</div>
            <Progress value={20*1}/>
            <div className='mt-2 text-center'>1 out of 5 credits left</div>
          <div  className=' font-semibold text-blue-600 text-center '>  <Link href={'/dashboard/upgrade'}>Upgrade to create more</Link> </div>
        </div>
   </div>
  )
}

export default Sidebar