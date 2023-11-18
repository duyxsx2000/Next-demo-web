'use client'

import React, { useState } from 'react'
import Link from 'next/link'

type Props = {
    keyPage: string
}

const style = {
    redline:'redlines text-xl relative w-[200px] text-center',
    transparentline:'transparentlines text-xl relative w-[200px] text-center',
    noneline: ' text-xl relative w-[200px] text-center'

}
export default function NavComponent({keyPage}: Props) {

    const [oppenLine, setOppenLine] = useState('')

    const   handleMouseEnter1 = ()=>{
        if(keyPage != 'Profile') setOppenLine('Profile')         
    };
    const   handleMouseLeave1 = ()=>{
        if(keyPage != 'Profile') setOppenLine('')
    };
    const   handleMouseEnter2 = ()=>{
        if(keyPage != 'Manage CVs') setOppenLine('Manage CVs')
    };
    const   handleMouseLeave2 = ()=>{
        if(keyPage != 'Manage CVs') setOppenLine('')
    };
    const   handleMouseEnter3 = ()=>{
        if(keyPage != 'Jobs Preferences') setOppenLine('Jobs Preferences')
    };
    const   handleMouseLeave3 = ()=>{
        if(keyPage != 'Jobs Preferences') setOppenLine('')
    };
   
  return (
    
    <div className='flex px-[200px] font-bold items-center  bg-white space-x-[100px] w-full h-[70px] border-b border-black12'>

        <Link 
            href='/#' 
            onMouseEnter={handleMouseEnter1} 
            onMouseLeave={handleMouseLeave1} 
            className={keyPage === 'Profile' ? style.redline : (oppenLine === 'Profile' ? style.transparentline : style.noneline)}
        >
            <p>Profile</p>
        </Link>

        <Link 
            href='/#' 
            onMouseEnter={handleMouseEnter2} 
            onMouseLeave={handleMouseLeave2} 
            className={keyPage === 'Manage CVs' ? style.redline : (oppenLine === 'Manage CVs' ? style.transparentline : style.noneline)}
        >
            <p>Manage CVs</p>
        </Link>

        <Link 
            href='/#' 
            onMouseEnter={handleMouseEnter3} 
            onMouseLeave={handleMouseLeave3} 
            className={keyPage === 'Jobs Preferences' ? style.redline : (oppenLine === 'Jobs Preferences' ? style.transparentline : style.noneline)}
           
        >
            <p>Jobs Preferences</p>
        </Link>






    
    </div>
  )
}
