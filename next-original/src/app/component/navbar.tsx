'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import logo from "../../../public/Untitled.jpg"
import { useSession } from 'next-auth/react';
import dataJob from "../../../data/dataJobs.json"
import { RightOutlined, DownOutlined } from '@ant-design/icons';
import UserStatus from './userStatus';
import gettUser from '../lip/getUser';
import postUser from '../lip/postUser';
import { User } from 'next-auth';

export default function Navbar() {
     
 
    const data: DataJobs[] = dataJob;
    const [dataListJobs,setDataListJobs] = useState<MenuJob | null>(null);
    const [opList,setOpList] = useState<boolean>(false);
    const [focus,setForcus] = useState<string>("");
    const [display, setDisplay] = useState(false);

    const { data: session } = useSession(
        {
        required: true,
        onUnauthenticated() {     
        }
    });

    useEffect(() => {
        const fetchData = async () => {
          if (session?.user) {
            const data: User = session.user;
            if (data.email) {
              const res = await postData(data.email, '');

              console.log(res);
              
            }
          }
        };
    
        fetchData();
    },);
    
    // handle action logic

    async function postData(name: string, key: string){
        const res = await postUser(name,key)
        return res
          
    };
    
    function handleMouseEnter(value: MenuJob){
        if(value.listJob){
            setDataListJobs(value)
        }
        setOpList(true)                   
    };
    
    function handleMouseEnterForcus(title: string){
        setForcus(title)         
    };

    function handleObM() {
        console.log('1111');
        
        if(display){
            setDisplay(false)
        } else {
            setDisplay(true)
        }    
    }
    
    const job = function (jobs: JobName[]){

        return  jobs.map((job: JobName, index)=>{

                if (index <= 19){
                    return(<Link href={`/jobs/${job.title}`} className=' p-3 m-0   hover:bg-gray-700  hover:text-white' key={index}>{job.title}</Link>)
                }
            }
        )
    };

    const listJobs = function (menuJobs: MenuJob){

        return (
            <ul  className='absolute border-l-2  z-50 border-[rgba(255,255,255,0.42)] bg-black12 left-full top-0  h-full w-420'>

                <div className='grid grid-rows-frows grid-cols-fcolumns h-h90 w420  '>
                    {menuJobs.listJob && job(menuJobs.listJob)}
                </div>

                <div className='flex justify-center items-center  border-t border-[rgba(255,255,255,0.42)] h-h10 '>
                    <Link href={`/jobs/allJobs?search=${menuJobs.title}`} className='flex justify-center items-center'><p>Show all jobs</p><RightOutlined /></Link>    
                </div>
        
            </ul>
        )
    };

    const jobCategory = function(item: MenuJob){

        return (
            <div className={focus == item.title
                ? 'flex items-center p-3  bg-gray-700  hover:text-white h-full w-full  '
                : ' flex items-center p-3  hover:text-white h-full w-full  '
                }
                onMouseEnter={()=>handleMouseEnterForcus(item.title)}
            >
                <Link className={`w-full h-full`} href="/#" onMouseEnter={()=>{handleMouseEnter(item); }}>
                    {item.listJob
                    ? <div className='flex justify-between h-full items-center ' >{item.title}<RightOutlined/></div>
                    : item.title}
                </Link>

            </div>
        )
    };
    
    const menuJobCategory = function(MenuJob: MenuJob[]){
             
        return(
            <ul className='menuJobCategory absolute hidden z-50  top-full  bg-black12 border-[rgba(255,255,255,0.42)] h-96 w-52 group-hover:block  '>
                    
                {MenuJob.map((item,index)=>{
                        
                    return(
                        <li className='h-h18  border-b border-[rgba(255,255,255,0.42)]  '  key={index}>

                            {jobCategory(item)}
                            
                            {   dataListJobs && 
                                dataListJobs.listJob && 
                                dataListJobs.listJob.length > 0 && 
                                opList
                                ? listJobs(dataListJobs)
                                : <></> 
                            }
                            
                        </li>)
                })}

            </ul>
        )
    };

    const menuNavbar = function(data: DataJobs[]) {

        return  data.map((item,index)=>{

            return(
    
                <li  key={index} className= 'group flex items-center static text-gray-400 mx-5 '>
    
                    <Link className=' hover:text-blue-700 text-xl'  href={"/#"}>
                        {item.MenuJob ? (
                            <p className='flex justify-center items-center space-y-1'>
                                {item.title}
                                <DownOutlined className='ml-1' />
                            </p> 
                        ) : item.title}
                    </Link>
                    
                    {item.MenuJob ? menuJobCategory(item.MenuJob) : <></>}
    
                </li>
            )
        })
    };
 
  return (

    <nav className='z-50 fixed flex justify-around   bg-gradient-to-r from-black12 from-50% to-pink-900 h-24 w-full  border-b border-[rgba(255,255,255,0.42)] '>
     
        <div className='flex items-center grow-0 w-1/6 justify-center '> 
            <Image className='rounded-full'
                src={logo}
                width={70}
                height={50}
                alt="Picture of the author"
            >
            </Image>     
        </div>
       
        <div className='flex grow justify-between mx-5'>

            <ul onMouseLeave={() => setDisplay(false)} className='flex relative '>

                {menuNavbar(data)}
                
                {session?.user.role === 'employers' && (
                    <li onMouseEnter={handleObM}   className= 'group flex items-center static text-gray-400 mx-5'>
                        <Link className=' hover:text-blue-700 text-xl'  href={"/forEmployers"}>For Employers</Link>   
                    </li>  
                )}

                {session?.user.role === 'admin' && (
                    <li  className= 'group flex items-center static text-gray-400 mx-5'>
                        <Link  className=' hover:text-blue-700 text-xl'  href={"/dashboard-admin"}>Doashboard-Admin</Link>   
                    </li> 
                )}

                {session?.user.role === 'user' && (
                    <li  className= 'group flex items-center static text-gray-400 mx-5'>
                        <Link  className=' hover:text-blue-700 text-xl'  href={"/user/manageCv"}>Manage Cv</Link>   
                    </li> 
                )}

                {display && (
                    <div className=' right-0 -translate-x-5 absolute top-full w-[140px] h-[150px] bg-black12 space-y-3 p-2'>
                        <div className='text-white font-bold border-b border-gray-300 p-2 hover:text-blue-700'>
                            <Link href={'/forEmployers/postJob'}> Post Job</Link>
                        </div>
                        <div className='text-white font-bold border-b border-gray-300 p-2 hover:text-blue-700'>
                            <Link href={'/forEmployers/dashboard'}> Manage table</Link>
                        </div>
                    </div>
                )}

            </ul>
             
            <div className='flex space-x-5 mr-10'>
                {session?.user && <UserStatus user={session.user}/>}
                {!session?.user.role ?
                    <div className=' flex space-x-3'>
                        <Link 
                            className='flex items-center text-white ' 
                            href="/auth/signIn?callbackUrl=/"
                        >
                            Sign in/
                        </Link>
                        <Link 
                            className='flex items-center text-white ' 
                            href="/auth/signUp"
                        >
                            Sign Up/
                        </Link>

                    </div> :

                    <Link 
                        className='flex items-center text-white ' 
                        href="/api/auth/signout"
                    >
                        log out
                    </Link>

                }
         
            </div>


        </div>
        
    </nav>

  )
}
