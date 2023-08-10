"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import logo from "../../../public/Untitled.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight, faChevronDown} from '@fortawesome/free-solid-svg-icons'
import dataJob from "../../../data/dataJobs.json"

export default function Navbar() {

    const data: DataJobs[] = dataJob
    const [dataList,setDataList] = useState<Job[]>([])
    const [opList,setOpList] = useState<boolean>(false)
    const [focus,setForcus] = useState<string>("")

    function handleMouseEnter(value: MenuJob){
        if(value.listJob){
            setDataList(value.listJob)
        }
        setOpList(true)                   
    }
    
    function handleMouseEnterForcus(title: string){

        setForcus(title)
             
    }
   
    const listJobs = function (jobs: Job[]){

        const job = function (jobs: Job[]){

            return  jobs.map((job: Job, index)=>{
    
                    if (index <= 19){
                        return(<li  className=' p-3 m-0   hover:bg-gray-700  hover:text-white' key={index}>{job.title}</li>)
                    } 
                })
        };

        return (
        <ul  className='absolute border-l-2  border-gray-300 bg-black12 left-full top-0  h-full w-420'>

            <div className='grid grid-rows-frows grid-cols-fcolumns h-h90 w420  '>
                {job(jobs)}
            </div>

            <div className='flex justify-center items-center  border-t border-gray-300 h-h10 '>
                <Link href="/#">Show all jobs<FontAwesomeIcon className=' mx-3' icon={faChevronRight} /></Link>    
            </div>
    
        </ul>
        )
    }
    
    const menuJobCategory = function(MenuJob: MenuJob[]){
       
        const jobCategory = function(item: MenuJob){

            return (
                <div className={focus == item.title
                    ? 'flex items-center p-3  bg-gray-700  hover:text-white h-full w-full '
                    : ' flex items-center p-3  hover:text-white h-full w-full '
                    }
                    onMouseEnter={()=>handleMouseEnterForcus(item.title)}
                >

                    <Link className={`w-full h-full`} href="/#" onMouseEnter={()=>{handleMouseEnter(item); }}>
                        {item.listJob
                        ? <div className='flex justify-between h-full items-center ' >{item.title}<FontAwesomeIcon icon={faChevronRight}/></div>
                        : item.title}
                    </Link>

                 </div>
            )


        }
        
        return(
            <ul className='menuJobCategory absolute hidden  top-24  bg-black12 border-white h-96 w-52 group-hover:block  '>
                    
                {MenuJob.map((item,index)=>{
                        
                    return(
                        <li className='h-h18  border-b border-gray-300  '  key={index}>

                            {jobCategory(item)}
                            
                            {dataList.length > 0 && opList ? listJobs(dataList): <></> }
                            
                        </li>)
                })}

            </ul>
        )
    };

    const dataNav = function(data: DataJobs[]) {

        return  data.map((item,index)=>{

            return(
    
                <li  key={index} className= 'group flex items-center static text-gray-400 mx-5'>
    
                    <Link className=' hover:text-blue-700 text-xl'  href={"/#"}>
                        {item.MenuJob ? <>{item.title}<FontAwesomeIcon icon={faChevronDown} /></> : item.title}
                    </Link>
                    
                    {item.MenuJob ? menuJobCategory(item.MenuJob) : <></>}
    
                </li>
            )
        })
    }
 
  return (

    <nav className='z-50 fixed flex justify-around   bg-gradient-to-r from-black12 from-50% to-pink-900 h-24 w-full  border-b border-blue-gray-50'>
     
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

            <ul className='flex '>

                {dataNav(data)}

            </ul>

            <Link className='flex items-center text-white ' href="/#">Sign in/Sign up</Link>

        </div>
        
    </nav>

  )
}
