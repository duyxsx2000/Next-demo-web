'use client'
import React, { useState } from 'react'
import type { User } from "next-auth";
import { type } from 'os';
import Image from 'next/image';
import {EllipsisOutlined, DownOutlined } from '@ant-design/icons';
import Link from 'next/link';
type Props ={
    user: User
}
const style = {
    link: 'flex justify-center',
    p: 'border-b border-white py-2 w-4/5 text-center'

}
export default function UserStatus({user}: Props) {
  const [oppenMenu, setOppenMenu] = useState<boolean>(false)

  const handleClickButton = () => {

        if(oppenMenu) setOppenMenu(false)
        else setOppenMenu(true)
  };

  return (
    <div className='flex items-center space-x-2 mr-14'>
        {user?.image ?(
             <Image 
             className='bg-white rounded-full w-10 h-10'
             src={user.image}
             alt='img'
             width={50}
             height={50}
         />
        ) : (
            <Image 
                className='bg-white rounded-full w-10 h-10'
                src='https://tse2.mm.bing.net/th?id=OIP.d2_X3tlwuj45D1-ST-CuCgHaHa&pid=Api&P=0&h=180'
                alt='img'
                width={50}
                height={50}
            />             
        )
                    
       }

        <p className='text-white font-bold'>{user.name}</p>
        <p className='text-red-800 font-bold'>{user.role}</p>
        <div className=' w-10 h-6 text-white  flex justify-center items-center relative'>
           
            <button onClick={handleClickButton}>
                <DownOutlined />
            </button>
            
            <div className={`absolute w-[200px] top-[60px] bg-black12 space-y-4 py-3 ${!oppenMenu ? 'hidden' : ''}`}>
                
                <Link href='/#' className={style.link}>
                    <p className={style.p}>Profile & CVs</p>
                </Link>

                <Link href='/#' className={style.link} >
                    <p className={style.p}>My jobs</p>
                </Link>

                <Link href='/#' className={style.link}>
                    <p className={style.p}>History jobs</p>
                </Link>

                <Link href='/#' className={style.link}>
                    <p className={style.p}>Setting</p>
                </Link>

                <Link href='/#' className={style.link}>
                    <p className={style.p}>Sign out</p>
                </Link>
           
            </div>
        </div>   
    </div>
  )
}
