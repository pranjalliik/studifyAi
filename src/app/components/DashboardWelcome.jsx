'use client'
import React from 'react'
import laptop from  '../../../public/laptop.png'
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

function DashboardWelcome() {

    const {user}=useUser();
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const [query, setQuery] = useState('');

  return (
    <div>
        <div className='rounded-lg bg-blue-500 flex py-6'>
       { isDesktopOrLaptop&& <Image src={laptop} alt='laptoplogo' className='ml-2 pt-2' /> }
        <div className='mt-6 ml-6'>
        <div className='text-white lg:font-bold md:font-bold xl:font-bold font-semibold lg:text-2xl  md:text-2xl xl:text-2xl text-xl'>Hello {user?.fullName}!!</div> 
        <div className='text-white lg:font-semibold md:font-semibold xl:font-semibold  text-sm'>  Welcome , Let's Get Ready to Learn Something New Today!
        </div>
        </div>
        </div>
    </div>
  )
}

export default DashboardWelcome