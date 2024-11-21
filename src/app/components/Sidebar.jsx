'use  client'
import React , {useEffect ,useState} from 'react'
import logo from  '../../../public/logo.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { LayoutDashboard ,Shield , UserCircle } from 'lucide-react'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'
function Sidebar() {

    const {user} = useUser()
const router = useRouter()
const [count , setCount] = useState()
    const MenuList=[

        {
         name: 'Dashboard',
        icon: LayoutDashboard,
        path: '/dashboard'
        },
    /*    {  
        name: 'Upgrade',
        icon:Shield,
         path: '/dashboard/upgrade'
        
        },*/
        {  
            name: 'Profile',
            icon:UserCircle,
             path: '/dashboard'
            
            },
    ]


useEffect(()=>{
    getCreditCount()
},[user])

async function getCreditCount(){
    if(user){
    let res = await axios.post('/api/getcredit' , {email : user.primaryEmailAddress.emailAddress})
    console.log(res)
    if(res?.data?.result?.creditconsumed?.[0]?.count){
        setCount(res.data.result.creditconsumed[0].count)
    }
    }
}
//cursor: no-drop;

  return (
    <div className="h-screen shadow-lg  md:w-64 lg:w-64  xl:w-64 w-0 ">
        <div className="flex mt-2 ">
        <Image src={logo} alt='logo' />
        <div className='font-bold text-2xl mt-6 text-[#4c81d1]'>StudifyAI</div>
        </div>

        <div className="flex justify-center mt-3">
       { count&& <Button className={` px-8 ${count==2? 'bg-gray-500 cursor-no-drop	' :'bg-blue-600' }`} onClick={()=>{count !=2 && router.push('/create')}}>+ Create New</Button>
       }
        </div>
        <div className=" mt-8">
            {MenuList.map((menu,index)=>(
                <div key={index} className="flex gap-5 items-center p-3 pl-8 rounded-lg hover:bg-black hover:text-white" onClick={()=>router.push(menu.path)}>
                    <menu.icon/>
                    <div className=''>{menu.name}</div>
                </div>
            ))}
        </div>

        { count&&<div className='m-3  gap-y-2  p-4 rounded-lg bg-slate-200 absolute bottom-10 lg:ml-2 xl:ml-6 md:ml-2 ml-2'>
            <div className='text-center mb-1'>Avaliable Credits</div>
            {  count == -1 ? <div className='mt-2 text-center font-semibold'>Unlimited!!</div> :
            <><Progress value={50*count}/>
           <div className='mt-2 text-center'>{count} out of 2 credits used</div> </>}
         {/* <div  className=' font-semibold text-blue-600 text-center '>  <Link href={'/dashboard/upgrade'}>Upgrade to create more</Link> </div>*/}
        </div>
        }
   </div>
  )
}

export default Sidebar