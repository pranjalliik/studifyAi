"use client"
import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Image from 'next/image'
import logo from '../../../public/logo2.png'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { useState, useEffect } from 'react';
  import { useMediaQuery } from 'react-responsive';
  import { Menu } from 'lucide-react';
  import { LayoutDashboard ,Shield , UserCircle } from 'lucide-react'
  import { usePathname } from 'next/navigation';
  import { useRouter } from 'next/navigation'


import Link from 'next/link'

function DashboardHeader() {

     const router = useRouter();
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const [query, setQuery] = useState('');
    const pathname = usePathname();
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        if(!isClient)setIsClient(true);
      }, []);

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


    
    if (!isClient) return null;
    
return (

<div className={`p-5 py-2 shadow-md flex  ${isDesktopOrLaptop == true &&  pathname == '/dashboard' ? 'justify-end' : 'justify-between'}`}>
{isMobile&& <
    Popover>
  <PopoverTrigger><Menu/></PopoverTrigger>
  <PopoverContent className='w-64 p-0'>
  
   { <div className="flex p-4  border-b shadow-md hover:bg-slate-200">
        <LayoutDashboard/>
        <div className='ml-4 ' ><Link href='/dashboard' className='text-black'>Dashboard</Link></div>
    </div> }
   { pathname === '/dashboard' &&  <div className="flex p-4  border-b shadow-md hover:bg-slate-200">
        <UserCircle/>
        <div className='ml-4 ' onClick={()=>router.push('')} >Profile</div>
    </div> }
  

</PopoverContent>
</Popover>
}
{isDesktopOrLaptop&& pathname != '/dashboard' && <div className='flex '><Image src={logo} alt='logo' className='h-12  w-10'></Image>  <div className='font-bold text-2xl mt-2 ml-1 text-[#4c81d1]'>StudifyAI</div></div>}
<div className='flex gap-x-8 '>
  {isDesktopOrLaptop && pathname != '/dashboard' && pathname != '/' &&<div className='mt-3 font-semibold text-lg text-blue-500 cursor-default hover:text-gray-500'><Link href='/dashboard'>Dashboard</Link></div>}
<UserButton/>
</div>
</div>
)

}

export default DashboardHeader