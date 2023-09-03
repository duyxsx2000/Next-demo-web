'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/services/hook';
import { test } from '@/app/redux/featues/users/uerSlice';
import { EnvironmentOutlined, BorderOutlined, DashboardOutlined, DollarOutlined } from '@ant-design/icons';
type job = {
    title: string,
    address: string,
    method: string,
    skills:string[],
    wage:number

}

type company = {
    name: string,
    logo: string
}

type Props = {
    paramDetailJob: DetailJob
}

export default function Job({paramDetailJob}: Props) {
    const dispatch = useAppDispatch()
    const [data, setData] = useState<DetailJob>(paramDetailJob)
    const dataDetailJob = useAppSelector((state)=> state.jobs.detailJob)

    useEffect(()=>{

        if(!dataDetailJob){
            setData(paramDetailJob)
          
        }

    })


    useEffect(()=>{

        if(paramDetailJob)

        dispatch(test(`/apply/${paramDetailJob.id}/${paramDetailJob.job.title}`))
        
        setData(dataDetailJob)
       
    },[dataDetailJob])
    
    const  jobDetailsCard = function(detailJob: DetailJob){
        
        if(detailJob){

            const timeAgo = Date.now() - detailJob.timePost 
            const hours =Math.floor(timeAgo / 3600000)
            const styleEml = "flex items-center"

            return(
                <div  className='py-4 space-y-2 text-[#414042] border-dotted border-t border-b border-[#414042]'>
                    
                    <div className={styleEml}>
                        <EnvironmentOutlined />
                        <span className='ml-2'>{detailJob.job.address}</span>
                    </div>
                    <div className={styleEml}>
                        <BorderOutlined />  
                        <span className='ml-2'>At office</span>
                    </div>
                    <div className={styleEml}>
                        <DashboardOutlined />
                        <span className='ml-2'>{hours}hours ago</span>
                    </div>
    
                    <div className='space-x-4'>
                        <span>SkillS:</span>
                        {detailJob.job.skills.map((skill,index)=>{
                        return <span key={index} className=' p-1 rounded-full border-[#414042] border'>{skill}</span>
                        })}                 
                    </div>
                    
                </div>
            )
        }
             
    };

    const reasonsToJoin = function(reasons: string[]){
         return(
            <div className=' border-dotted border-b border-black py-4'>
                <h1 className=' font-bold text-xl'>Top 3 reasons to join us</h1>

                <ul className='ml-[20px] mt-2 space-y-2 list-disc marker:text-red-400'>
                    {reasons.map((title,index)=>{
                        return <li key={index}>{title}</li>
                    })}
                </ul>

            </div>
         )
    };

    const jobDescription = function(jobDescription: string[]){

        return(
            <div className='border-dotted border-b border-black py-4'>
                <h1 className='font-bold text-xl mb-2'>Job description</h1>
                {jobDescription.map((part,index)=>{
                    return <> <p key={index}>{part}</p><br/> </> 
                })}

            </div>
        )
    };

    const skillAndExperience = function(request: string[]){
        
        return(
            <div className='border-dotted border-b border-black py-4'>
                <h1 className='font-bold text-xl'>Your skills and experience</h1>

                <ul className='ml-[20px] mt-2 space-y-2 list-disc marker:text-red-400'>
                    {request.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })}
                </ul>

            </div>
        )
    };

    const companyIntroduction = function(){
        return(
            <div>
                <h1 className='font-bold text-xl'>VNG Corporation</h1>
                <p>We have a team of product experts, masters of design, and development geniuses</p>
                <div className='grid grid-rows-frows2 grid-cols-fcolumns'>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>

                </div>
            </div>
        )
    }

  if(!paramDetailJob) return

  return (
    <div className='h-full bg-white'>

        <header className='flex flex-col justify-between px-4 h-1/5 '>

            <div className='flex  grow px-5  '>

                <Image
                    className='border-b mt-10'
                    src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN09SR3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--8116cf4b23cb755b3b556d410e98ed210b2f68c4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/logo%20Viettel.JPG"
                    alt='logo'
                    height={100}
                    width={100}
                />

                <div className='border-b ml-4 grow mt-5'>
                    <h1 className=' font-bold text-2xl'>{paramDetailJob.job.title} </h1>
                    <Link className=' text-lg text-[#414042]' href="/#">{paramDetailJob.company.name}</Link>

                    <p className='flex items-center text-lg text-[#19b23c]'>
                        <DollarOutlined className='mr-2'/>
                        <span>up to</span> 
                        {paramDetailJob.job.wage}
                        <span>$</span>
                    </p>

                </div>  

            </div>

            <div className='flex justify-center items-center mb-4  bg-red-500 w-full h-8 '>
                <Link className='text-center w-full  text-white' href={`/apply/${paramDetailJob.id}/${paramDetailJob.job.title}`}>Apply Now</Link>    
            </div>

        </header>

        <main className='px-5 h-4/5 space-y-3   p-4 overflow-auto   '>
             {data && jobDetailsCard(data)}
              {data && reasonsToJoin(data.reasons)}
              {data && jobDescription(data.jobDescription)}
              { data && skillAndExperience(data.request)}
              {companyIntroduction()}
             
        </main> 
    </div>
  )
}
