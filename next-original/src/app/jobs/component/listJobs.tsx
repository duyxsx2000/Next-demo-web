'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSackDollar, faLocationDot, faRobot } from '@fortawesome/free-solid-svg-icons'
export default function ListJobs() {

    const [isHighlighted, setIsHighlighted] = useState<number>(0);
    const data = [
        {
            timePost:1692062066253,
            company:{
                name:"Viettel",
                logo:"https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN09SR3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--8116cf4b23cb755b3b556d410e98ed210b2f68c4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/logo%20Viettel.JPG"
            },
            job: {
                title:"05 Jr/Mid Java Developer(Spring/SQL)",
                address:"Hà Nội - Hồ Chí Minh",
                method:" At office",
                skills:["Java", "Node", "Sql"],
                wage:2000
            },
            reasons:[
                "Làm việc với các công nghệ mới nhất",
                "Lĩnh vực chứng khoán, tài chính hấp dẫn",
                "Liên tục được đào tạo chuyên môn, kĩ năng"
    
            ]
        },
        {
            timePost:1692062066253,
            company:{
                name:"Viettel",
                logo:"https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN09SR3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--8116cf4b23cb755b3b556d410e98ed210b2f68c4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/logo%20Viettel.JPG"
            },
            job: {
                title:"05 Jr/Mid Java Developer(Spring/SQL)",
                address:"Hà Nội - Hồ Chí Minh",
                method:" At office",
                skills:["Java", "Node", "Sql"],
                wage:2000
            },
            reasons:[
                "Làm việc với các công nghệ mới nhất",
                "Lĩnh vực chứng khoán, tài chính hấp dẫn",
                "Liên tục được đào tạo chuyên môn, kĩ năng"
    
            ]
        },
        {
            timePost:1692062066253,
            company:{
                name:"Viettel",
                logo:"https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN09SR3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--8116cf4b23cb755b3b556d410e98ed210b2f68c4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/logo%20Viettel.JPG"
            },
            job: {
                title:"05 Jr/Mid Java Developer(Spring/SQL)",
                address:"Hà Nội - Hồ Chí Minh",
                method:" At office",
                skills:["Java", "Node", "Sql"],
                wage:2000
            },
            reasons:[
                "Làm việc với các công nghệ mới nhất",
                "Lĩnh vực chứng khoán, tài chính hấp dẫn",
                "Liên tục được đào tạo chuyên môn, kĩ năng"
    
            ]
        }
    ]

    
      


    const handleHighlight = (index: number) => {

        setIsHighlighted(index);
        
        
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
                    onClick={()=>handleHighlight(index)} 
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
                        <span className='text-[#19b23c] font-bold '><FontAwesomeIcon className=' mr-2' icon={faSackDollar} style={{color: "#19c23b",}}/>UP To ${data.job.wage}</span>
                    </div>
            
                    <div className='border-dotted border-b mt-2'>
                        <div className='flex flex-col'>
                            <span><FontAwesomeIcon className='mr-2 max-w-xl' icon={faRobot} style={{color: "#9eb5db",}} />{data.job.method}</span>
                            <span><FontAwesomeIcon className='mr-4 ml-1' icon={faLocationDot} style={{color: "#8393af",}} />{data.job.address}</span>
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
          {content(data)}                      
    </div>

  )
}
