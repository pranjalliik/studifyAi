"use client"
//import { db } from '../../configs/db';
import { USER_TABLE } from '../configs/schema';
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm';
import React, { useEffect } from 'react'
import { helloWorld } from '../configs/db';
import { checkAndAddUser } from '../configs/db';
import axios from 'axios';
import { useState } from 'react';

function Provider({children}) {
  const [userSet,setUser] = useState(false)

const {user}=useUser();
console.log(user)
console.log('hii')

useEffect(()=>{ 
    
if(user && !userSet){
  setUser(true)
    CheckIsNewUser();
}

}, [user])

const CheckIsNewUser=async()=>{ // Check Is User Already Exist
    const dbHello = await helloWorld()
    console.log('enter' , dbHello)

  //  const resp = await axios.post('/api/create-user' , {user : user})
   // const response = await checkAndAddUser( user?.primaryEmailAddress.emailAddress, user?.fullName, false);
    //console.log(resp.data);

    
  /*  try {
        const result = await db
          .select()
          .from(USER_TABLE)
          .where(eq(USER_TABLE.email, user?.primaryEmailAddress.emailAddress));
    
        return result;
      } catch (error) {
        console.log(typeof(user?.primaryEmailAddress.emailAddress),'type')
        console.error('Database query error:', error);
      }
    
    console.log(result,'hr');

    if(result?.length==0){
        
        //If Not, Then add to DB
        console.log('no exis')
        const userResp  = await db.insert(USER_TABLE).values({
        name:user?.fullName,
        email:user?.primaryEmailAddress?.emailAddress
         }).returning({id:USER_TABLE.id})

         console.log(userResp)
        }
        
       
        
      */  
}

return (
<div>
{children}
</div>
)}

export default Provider