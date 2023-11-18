'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/services/hook';
import { test } from '@/app/redux/featues/users/uerSlice';
import { EnvironmentOutlined, BorderOutlined, DashboardOutlined, DollarOutlined } from '@ant-design/icons';
import postDataJobs from '@/app/lip/postDataJobs';
import { useRouter } from 'next/navigation';
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
    paramJob: TypeJob,
    title: string
}

const styleEml = "flex items-center"
export default function Job({paramJob, title}: Props) {

    const dispatch = useAppDispatch()
    const [data, setData] = useState<TypeJob>(paramJob)
    const dataJobRedux = useAppSelector((state)=> state.jobs.dataJob)
    const route = useRouter()
   
       console.log(data);
       

    useEffect(()=>{

        if(paramJob)
            dispatch(test(`/apply/${paramJob.idJob}/${paramJob.job.jobTitle}`))
        if(dataJobRedux)

        setData(dataJobRedux)
       
    },[dataJobRedux])

    const date = (time: Date) => {
        const datePost = new Date(time);
        const timeAgo = Date.now() - datePost.getTime();
        const hours =Math.floor(timeAgo / 3600000);
        return hours
    }
    
    const handleAccept = (idJob: string) => {
        const acceptJob = async (id: string) =>{
            try {
                const res = await postDataJobs('accept-job',id)
                if(res) route.push('/dashboard-admin')
            } catch (error) {
                console.log(error,'errorrrr');
                   
            }
        };
        acceptJob(idJob);
    }
    const  jobDetailsCard = function(Job: TypeJob){
        
        const datePost = new Date(Job.datePost)
        const timeAgo = Date.now() - datePost.getTime()
        const hours =Math.floor(timeAgo / 3600000)
        const styleEml = "flex items-center"

        return(
            <div  className='py-4 space-y-2 text-[#414042] border-dotted border-t border-b border-[#414042]'>
                
                <div className={styleEml}>
                    <EnvironmentOutlined />
                    <span className='ml-2'>{Job.job.jobAddress}</span>
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
                    {Job.job.jobSkills.map((skill,index)=>{
                    return <span key={index} className=' p-1 rounded-full border-[#414042] border'>{skill}</span>
                    })}                 
                </div>
                
            </div>
        )
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

  if(!paramJob) return

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
                    <h1 className=' font-bold text-2xl'>{paramJob.job.jobTitle} </h1>
                    <Link className=' text-lg text-[#414042]' href="/#">{paramJob.company.companyName}</Link>

                    <p className='flex items-center text-lg text-[#19b23c]'>
                        <DollarOutlined className='mr-2'/>
                        <span>up to</span> 
                        {paramJob.job.jobWage.toString()}
                        <span>$</span>
                    </p>

                </div>  

            </div>
            {title === 'all'
                &&  <div className='flex justify-center items-center mb-4  bg-red-500 w-full h-10 '>
                        <Link className='text-center w-full  text-white' href={`/apply/${paramJob.idJob}/${paramJob.job.jobTitle}`}>Apply Now</Link>    
                    </div>
            }
            {title === 'await'
                &&  <div className='flex justify-center items-center mb-4  bg-red-500 w-full h-10 '>
                        <button 
                            className='text-center w-full  text-white' 
                            onClick={() =>handleAccept(paramJob.idJob)} 
                            type='button'
                        >
                            Accept Now
                        </button>    
                    </div>
            }


        </header>

        <main className='px-5 h-3/5 space-y-3   p-4 overflow-auto   '>
            {data && (
                <div  className='py-4 space-y-2 text-[#414042] border-dotted border-t border-b border-[#414042]'>
    
                <div className={styleEml}>
                    <EnvironmentOutlined />
                    <span className='ml-2'>{data.job.jobAddress}</span>
                </div>
                <div className={styleEml}>
                    <BorderOutlined />  
                    <span className='ml-2'>At office</span>
                </div>
                <div className={styleEml}>
                    <DashboardOutlined />
                    <span className='ml-2'>{date(data.dateAccept)}hours ago</span>
                </div>

                <div className='space-x-4'>
                    <span>SkillS:</span>
                    {data.job.jobSkills.map((skill,index)=>{
                    return <span key={index} className=' p-1 rounded-full border-[#414042] border'>{skill}</span>
                    })}                 
                </div>
                
            </div>
            )}
            {data && reasonsToJoin(data.reasons)}
            {data && jobDescription(data.description)}
            {data && skillAndExperience(data.requirements)}
            {companyIntroduction()}
            
        </main> 
    </div>
  )
}
