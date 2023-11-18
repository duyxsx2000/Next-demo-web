'use client'
import React, { useEffect, useState } from 'react'
import { DownCircleOutlined ,DeleteOutlined, LeftOutlined, RightOutlined} from '@ant-design/icons'
import Link from 'next/link'
import getDataJobs from '@/app/lip/getListJobs'
type Params = {
  dataAllJob: TypeJob[]
  dataEmployers: Employers[] | ''
};

const key = 'KEY-GET-Jobs-await'
export default function Jobs({dataAllJob, dataEmployers}: Params) {
  //state
  const [dataJobs, setDataJobs] = useState(dataAllJob)
  const [page, setPage] = useState(0)
  const [navbar, setNavbar] = useState('await')

  // handle action logic
  const handleClick = (key: string) => {
    const newNavbar = key
    setNavbar(newNavbar)

  };

  const time = (date: number) => {
    const timePost = new Date(date)
    const timeAgo = Date.now() - timePost.getTime()
    const hours =Math.floor(timeAgo / 3600000)
    if(hours <= 48) {
      return hours+ 'H' + " ago"
    }else if (hours > 48){
      return date
    }
  };

  async function getData(newPage: number, type: string) { 
    try {
      const resJobs: Promise<TypeJob[]> = await getDataJobs(
        'Get-Data-All-Jobs',
        'none',
        'none',
        newPage.toString(),
        '5',
        type
      );
      const dataJobs : TypeJob[] = await resJobs;            
      setDataJobs(dataJobs)
     
    } catch (error) {
        console.log('123'); 
    }
  };

  const handleClickMorePage =  (number : number, action: string) => {
    const type = 'await';

    if(action === "more"){
      setPage(page + 1);
      const newPage = (number + 1) * 5;
      getData(newPage, type);
      return undefined
    };

    if(action === "previous" && number >= 1){
      setPage(page - 1);
      const newPage = (number - 1) * 5;
      getData(newPage, type);
      return undefined
    };
  };

  const handleChangePage  = (type: string) => {
    setNavbar(type);

    if(type === 'await') {
      getData(0, type)
    } else if(type === 'manage') {
      getData(0, 'done')
    }; 
  }

  // function component

  const content = (jobs: TypeJob [], title: string) =>{

    if(jobs.length === 0) return <div>No data</div> 

    return(
      <ul className=' list-none mt-4'>

        {jobs.map(
          (iteam, index) => {
            
            const myDate = new Date(iteam.datePost)
            return (
              <li key={index} className='flex justify-center'>
                <div className='w-5/6 rounded-xl p-3 border   border-gray-300'>
                  <div className='flex p-3 border-b border-gray-300'>
      
                    <div className='w-1/3 flex'>
                      
                      <div className='border-b w-[70px] h-[70px] flex justify-center items-center bg-red-500 rounded-full border-gray-300'>
                        Logo
                      </div>
      
                      <div className=' ml-4'>
                        <div className='font-bold'>{iteam.company.companyName}</div>
                        <div className='font-bold'>name</div>
                        <div className='text-gray-500'>ooo</div>
                      </div>
      
                    </div>
      
                    <div className='w-1/2 p-2 bg-F7F7F7 '>
                      <h1>{iteam.job.jobTitle}</h1>
                      <div>{iteam.job.jobAddress}</div>
                      <div>up to : {iteam.job.jobWage.toString()} $</div>
                    </div>
                    
                    <div>
                      <Link href={`/jobs/get-Jobs-await/${iteam.idJob}`}>
                        <div className='space-x-2 ml-4 flex  justify-between items-end  text-center font-bold text-blue-800 '>
                          Demo
                          <DownCircleOutlined className=' text-2xl  ' />
                        </div>
                      </Link>

                      <div className='space-x-2 ml-4 flex  justify-between items-center  text-center font-bold text-red-800'>
                        del job 
                        
                        <DeleteOutlined className=' text-2xl ' />
                      </div>

                    </div>
      
                  </div>
                  
                  <div className='flex p-3 border-b border-gray-300 space-x-4 text-blue-700'>
                    <div>
                      Email: DuyHr@gmaiil.com
                    </div>
                    <div>
                      SDT: 0334343133
                    </div>
                    <div>
                      Url: VNG.com
                    </div>
                    <div>
                      Employers: Huy Hr
                    </div>
                  </div>     
                </div>   
              </li>
            )
          }
        )}

      </ul>
    )     
  };

  return (
    <div className='min-h-[450px]'>

      <div className='flex justify-center'>
        <div className='flex w-4/6 mt-2 border  rounded-lg border-gray-300 '>

          <div 
            onClick={() => handleChangePage('await')}
            className={`w-1/2 text-center p2 font-bold  ${navbar === 'await' ? 'rounded-l-lg text-white bg-red-900' : ''}`}
          >
            waiting
          </div>

          <div 
            onClick={() => handleChangePage('manage')} 
            className={`w-1/2 text-center p2 font-bold  ${navbar === 'manage' ? 'rounded-r-lg text-white bg-red-900' : ''}`}
          >
            manage jobs
          </div> 

        </div>
      </div>

      {navbar === 'await' && content(dataJobs,"await")}
      {/* {navbar === 'manage' && content(dataJobs,"manage")} */}
      <div className='flex justify-center'>
        <div className='mt-6 mb-6 w-4/5 border-t border-gray-300 flex justify-end'>
          <button 
              type='button'
              className={`mt-2 flex items-center ml-9 rounded-lg  font-bold p-2 ${page >= 1 ? 'bg-blue-700 text-white' : 'bg-gray-700' }`}
              onClick={() =>handleClickMorePage(page, "previous")}
          >   
              <LeftOutlined className='mr- 2' />
              Previous
              
          </button>
          
          <button 
              type='button'
              className='mt-2 justify-center w-[100px] flex items-center ml-9 rounded-lg bg-blue-700 text-white font-bold p-2'
              onClick={() =>handleClickMorePage(page, 'more')}
          >
              More
              <RightOutlined className='ml- 2' />
          </button>
        </div>
      </div>
    </div>
  )
}
