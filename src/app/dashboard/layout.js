'use client'
import React from 'react'
import DashboardHeader from '../components/DashboardHeader'
import Sidebar from '../components/Sidebar'
import { useMediaQuery } from 'react-responsive';
import { useState ,useEffect} from 'react';

function layout({children}) {
  const [isClient, setIsClient] = useState(false);

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const [query, setQuery] = useState('');
    useEffect(() => {
      if(!isClient)setIsClient(true);
    }, []);
  
    if (!isClient) return null;
    
  return (
    <div className="flex">
        
         { isDesktopOrLaptop&&  <Sidebar/>
          }
        <div className="flex-grow ">
            <DashboardHeader/>
        {children}
        </div>
        
        </div>
  )
}

export default layout