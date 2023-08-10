import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

type props = {
     listTopEmployers: Employers[]
}

export default function TopEmployers({listTopEmployers}: props) {
  const skill = function(skills: any){

     const name = skills.map((title: string, index: any)=> <li key={index} className=' rounded-full p-2 shadow-md text-gray-600 bg-F7F7F7'>{title}</li> ); 
     return name
  };   

  const employerCard = function(listTopEmployers: Employers[]){

     const card = listTopEmployers.map((employer,index)=>{

           return(
               <Link key={index} className='h-60 w-420 mt-28  '  href='/#'>
                    <div className='flex flex-col justify-between mx-5 rounded-md  w-full h-full bg-white relative shadow-md   '>

                         <div className='flex justify-center h-28 w-1/2 absolute -top-16 left-1/4   '>
                              <img className=' w-full h-full object-fill bg-white rounded-md shadow-md border-gray-300 border-2'  src={employer.image}></img>
                         </div>

                         <div className='h-16'></div>

                         <div className='flex flex-col grow justify-between'>

                              <h2 className=' text-center font-bold'>{employer.title}</h2>
                              <p className='text-center font-bold text-gray-600'>{employer.city}</p>

                              <ul className='flex flex-wrap justify-center mt-2 space-x-4 space-y-1'>
                                   {skill(employer.jobs.skills)}
                              </ul>

                              <p className='mt-5 text-center text-blue-800'>{employer.jobs.quantity} Job<FontAwesomeIcon icon={faChevronRight} /></p>
                         </div>

                    </div>
              </Link>
          )
     });

     return card         
  };

  return (
    <div className=' bg-gray-300'>

        <h1 className=' text-center font-bold text-2xl pt-3 '>Top Employers</h1>
        <div className='flex justify-around flex-wrap space-x-5 px-60 py-11 h-full w-full '>
          {employerCard(listTopEmployers)}
        </div>     
    </div>
  )
}
