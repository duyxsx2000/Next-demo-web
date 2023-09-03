'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react';
import { DollarOutlined, BorderOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { useAppDispatch } from '@/app/redux/services/hook';
import { upOpenJob, setDetailJob } from '@/app/redux/featues/users/jobsSlice';




type Props = {
     params: DetailJob[]
}

export default function ListJobs({params}: Props) {
    
    const dispatch = useAppDispatch()
    const [isHighlighted, setIsHighlighted] = useState<number>(0);



    const handleHighlight = (index: number,data : DetailJob) => {

        setIsHighlighted(index);
        dispatch(setDetailJob(data))
        
    };
        
    const content = function(datas: any){
        



        return(
        <>
            {datas.map((data: any, index: number)=>{

                const time = Date.now() - data.timePost    
                const hours =Math.floor(time / 3600000)

                return(
                <div 
                    key={index}
                    onClick={()=>handleHighlight(index,data)} 
                    className={`xxx p-5 mb-5  relative rounded-md bg-white  ${isHighlighted === index ? 'border border-red-500 bg-[#fff4e9] outlineRed'  : ''}`}
                >
                    <div className='flex justify-center p-1 left-full -translate-x-full bg-red-600 absolute w-32 rounded-l-lg bfTriangle' >
                        <p className='text-white'>Super Hot</p>
                    </div>
                    <div className='flex flex-col pb-3 space-y-5 border-b border-dotted'>
                        <span className='text-gray-400'>Posted {hours} hours ago</span>
                        <Link className='text-xl font-bold' href="/#">{data.job.title}</Link>
                        <div className='flex justify-start space-x-3'>
                            <Image 
                                className='border border-F7F7F7'
                                src={data.company.logo}
                                height={100}
                                width={100}
                                alt='logo'
                            />
                            <Link href="/#" className='flex items-center'>{data.company.name}</Link>                    
                        </div>
                        <div className='text-[#19b23c] font-bold  flex  items-center'>
                            <DollarOutlined className='mr-2' />
                            <span>UP To $</span>
                            <span>{data.job.wage}</span>
                        </div>
                    </div>
            
                    <div className='border-dotted border-b mt-2'>
                        <div className='flex flex-col text-gray-400'>
                            <span className='flex items-center'>
                                <BorderOutlined className='mr-2' />
                                {data.job.method}
                            </span>
                            <span className='flex items-center'>
                                <EnvironmentOutlined className='mr-2' />
                                {data.job.address}
                            </span>
                        </div>

                        <div className='flex'>
                            {data.job.skills.map((skill: any,index: any)=>{
                                return <div key={index} className='p-1 text-sm rounded-full border-gray-300 border m-2 '>{skill}</div>
                            })}
                       </div>
                    </div>

                    <div className='border-dotted border-b mt-2 pb-4'>
                        <ul className='list-disc ml-5 marker:text-red-400'>
                            {data.reasons.map((intro: any,index: any)=>{
                                return <li className='font-semibold ' key={index}>{intro}</li>
                            })}
                        </ul>           
                    </div>
                   
                </div>
                    
                )
            })}
 
 </>)
    } 

  return (
    <div className='  w-2/5 top-[95px]  '>
          {params && content(params)}                      
    </div>

  )
}
