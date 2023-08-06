"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import logo from "../../../public/Untitled.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight, faChevronDown} from '@fortawesome/free-solid-svg-icons'



export default function Navbar() {
    const [dataList,setDataList] = useState([])
    const [opList,setOpList] = useState(false)
    const [focus,setForcus] = useState("")
    const dataLi: UlNavbar[] = [

    {title:"All Jobs",
    listContent:[
        {title:"Job by Skill",
        listContent:[
            {title:"Java",link:"link1"},
            {title:"C#",link:"link2"},
            {title:"C++",link:"link3"},
            {title:"ReactJs",link:"link2"},
            {title:"Js",link:"link2"},
            {title:"HTML",link:"link2"},
            {title:"CSS",link:"link2"},
        ]
        },
        {title:"Job by Title",
        listContent:[
            {title:"Javassss",link:"link1"},
            {title:"C#",link:"link2"},
            {title:"C++",link:"link3"},
            {title:"ReactJs",link:"link2"},
            {title:"Js",link:"link2"},
            {title:"HTML",link:"link2"},
            {title:"CSS",link:"link2"},
            {title:"HTML",link:"link2"},
            {title:"CSS",link:"link2"},
            {title:"HTML",link:"link2"},
            {title:"CSS",link:"link2"},
            {title:"HTML",link:"link2"},
            {title:"CSS",link:"link2"},
            {title:"HTML",link:"link2"},
            {title:"CSS",link:"link2"},
            {title:"HTML",link:"link2"},
            {title:"CSS",link:"link2"},
            {title:"HTML",link:"link2"},
            {title:"CSS",link:"link2"},
            {title:"HTML",link:"link2"},
            {title:"CSS",link:"link2"},
            {title:"HTML",link:"link2"},
            {title:"CSS",link:"link2"},
        ]
        },
        {title:"Job by Company",
       
        },
        {title:"Job by city",
      
        },
    ]},

    {title:"IT Companies"},

    {title:"Blog"},

    {title:"Event"}
  ]

  const dataNav = dataLi.map((ul,index)=>{

    function handleMouseEnter(value:any){
        if(value?.listContent){
            setDataList(value.listContent)
        }
        setOpList(true)        
    }
    
    function handleMouseEnterForcus(title: string){

        setForcus(title)
        console.log(focus);
        console.log(title);
        
        
    }
    function handleMouseLeave(){
        // setOpList(false)
    }
    
    return(

        <li onMouseLeave={handleMouseLeave} key={index} className='group flex items-center static text-gray-400 mx-5   '>

            <Link className=' hover:text-blue-700' href={"/#"}>
                {ul.listContent
                  ? <>{ul.title}<FontAwesomeIcon icon={faChevronDown} /></>
                    : ul.title}
            </Link>
            
            {ul.listContent ?
                <ul className='absolute hidden top-24  bg-black12 border-white h-96 w-52 group-hover:block '>
                
                {ul.listContent.map((item,index)=>{

                    return(
                        <li className='h-h18  border-b border-gray-300  ' onMouseEnter={()=>{handleMouseEnter(item); }} key={index}>

                            <div className={focus == item.title
                                             ? 'flex items-center p-3  bg-gray-700  hover:text-white h-full w-full '
                                              : ' flex items-center p-3  hover:text-white h-full w-full '
                                            }
                                 onMouseEnter={()=>handleMouseEnterForcus(item.title)}>

                                <Link 
                                 className={`w-full`} href="/#"
                                 >
                                    {item.listContent
                                     ? <div className='flex justify-between'>{item.title}<FontAwesomeIcon icon={faChevronRight}/></div>
                                      : item.title}
                                </Link>

                            </div>

                            {dataList.length > 0 && opList ? 
                                <ul  className='absolute border-l-2  border-gray-300 bg-black12 left-full top-0  h-full w-420'>

                                    <div className='grid grid-rows-frows grid-cols-fcolumns h-h90 w420  '>
                                        {dataList.map((content: any,index)=>{
                                            if (index <= 19){
                                                return(<li className=' p-3 m-0   hover:bg-gray-700  hover:text-white' key={index}>{content.title}</li>)
                                            }
                                            
                                        })} 
                                    </div>

                                    <div className='flex justify-center items-center  border-t border-gray-300 h-h10 '>
                                        <Link href="/#">Show all jobs<FontAwesomeIcon className=' mx-3' icon={faChevronRight} /></Link>    
                                    </div>
                                  
                                </ul>
                            : <></>
                            }
                        </li>)
                })}

                </ul> : <></>
                
            }

        </li>
    )
  })
 
  return (
    <nav className='flex justify-around h-24 bg-gradient-to-r from-black12 via-black12 to-custom'>
     
        <div className='flex items-center grow-0  w-1/3 justify-center '> 
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

                {dataNav}

            </ul>

            <Link className='flex items-center text-white ' href="/#">Sign in/Sign up</Link>

        </div>
        
    </nav>

  )
}
