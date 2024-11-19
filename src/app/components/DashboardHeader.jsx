"use client"
import { UserButton } from '@clerk/nextjs'
import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { useState, useEffect } from 'react';
  import { useMediaQuery } from 'react-responsive';
  import { Menu } from 'lucide-react';
  import { LayoutDashboard ,Shield , UserCircle } from 'lucide-react'


function DashboardHeader() {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const [query, setQuery] = useState('');

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

<div className={`p-5 shadow-md flex ${isDesktopOrLaptop? 'justify-end' : 'justify-between' }`}>
{isMobile&& <
    Popover>
  <PopoverTrigger><Menu/></PopoverTrigger>
  <PopoverContent className='w-64 p-0'>
  {MenuList.map((menu,index)=>(
    <div key={index} className="flex p-4  border-b shadow-md hover:bg-slate-200">
        <menu.icon/>
        <div className='ml-4 '>{menu.name}</div>
    </div>
))}
</PopoverContent>
</Popover>
}
<UserButton/>

</div>
)

}

export default DashboardHeader