'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { PlusCircleOutlined, DownOutlined } from '@ant-design/icons';

type Props = {
    data: string[]
}
export default function SidebarComponent({data} :Props) {

    const [listUpgrade, setListUpgrade] = useState<string[] | null>(null)

    const test = ['Add Abount me', 'Add Contact Information', 'Add word EXperience', 'Add Education', 'Add Skill', 'Add Certificates', 'Add Awards', 'Add Personal Projects']
    
    useEffect(()=>{
  
      setListUpgrade(data.slice(0, 5))
       
    },[]);

    const handleOnclick = () =>{
  
      if(listUpgrade && listUpgrade.length < 6){
        setListUpgrade(data)
      }else setListUpgrade(data.slice(0, 5)) 
      
    };

   function AddList(listAdd: string[]){
  
      return(
        <ul className='mt-10 px-4 space-y-4 mb-4'>
          {listAdd.map((item,index) => <li className='flex  items-center text-blue-700 border-b border-gray-500 pb-3' key={index}><PlusCircleOutlined className='mr-3'/>{item}</li>)}
        </ul>
      )
    };

  return (
    <div className='h-[900px] w-1/5 top-[95px] bg-white mt-10 sticky left-0 '>

        <h1 className='text-center text-xl mt-8 font-bold'>{`Upgrade profile to "Excellent" to unlock Download CV`}</h1>
        <p className='text-center mt-5'>{`How to upgrade profile to "Excellent"`}</p>
        {listUpgrade && AddList(listUpgrade)}
        
        <div onClick={handleOnclick} className='flex px-4 items-center space-x-3'>
        <DownOutlined /> 
        <p>Add more information</p>
        </div>

    </div>
  )
}
