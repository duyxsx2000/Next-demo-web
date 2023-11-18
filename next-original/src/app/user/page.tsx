'use client'
import React, { useEffect, useState } from 'react';
import Footer from '../component/footer'
import NavComponent from './compenontUser/nav'
import SidebarComponent from './compenontUser/sidebar';
import ContentUser from './compenontUser/contentUser';
import { useSession } from "next-auth/react"
import { redirect } from 'next/navigation'
import gettUser from '../lip/getUser';
import { User } from 'next-auth';


type DataUser = {
  name: string,
  id: number,
  image: string,
  email: string,
  role: string
}
export default function UserPage() {

  const {data: session} = useSession({
    required: true,
   
    onUnauthenticated() {
      redirect(`/auth/signIn?callbackUrl=/`)
       
    }
    
  });
  const [dataUser, setDataUser] = useState<DataUser | null>(null)
  async function getData(name: string, key: string){
    const res = await gettUser(name,key)
    return res
      
  }
  useEffect(() => {
    const fetchData = async () => {
      if (session?.user) {
        const data: User = session.user;
        if (data.email) {
          const res = await getData(data.email, '');
          console.log(res, '12345679');
          setDataUser(res)
          console.log(res);
          
        }
      }
    };

    fetchData();
  },[]);
  // if(session?.user?.email){
  //   console.log(session?.user.user?.email);
    
  //   getData(session?.user.user?.email, '')
      
  // }



  

  
  const test = ['Add Abount me', 'Add Contact Information', 'Add word EXperience', 'Add Education', 'Add Skill', 'Add Certificates', 'Add Awards', 'Add Personal Projects']
  
  return (
    <main className='pt-[96px] relative '>

      <NavComponent keyPage='Profile'/>
      
      <div className='   bg-[rgba(194,195,196,0.14)] flex justify-center space-x-10 '>   
        <SidebarComponent data={test}/>
        {dataUser ? <ContentUser dataUser={dataUser}/> : <div className=' w-3/5   my-10 space-y-9 '></div>}
      </div>

      

      <div className='w-1/4 h-[350px] '>
        <div className='w-full h-[350px] bg-black p-x-2 relative '>
          <div className='h-full bg-pink-200 z-40 absolute top-5 '></div>
            <div className='h-full bg-red-700 z-10'>

            </div>
            

        </div>

      </div>
      <Footer/>
         
    </main>
  )
}
