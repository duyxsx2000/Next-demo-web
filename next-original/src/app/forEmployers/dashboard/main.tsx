'use client'

import React, { useEffect, useState } from 'react'
import { QuestionCircleOutlined } from '@ant-design/icons'
import getDataDashbord from '@/app/lip/getDataDashbord'
import { useRouter } from 'next/navigation';
import ModalPage from './modal';
import getDataApply from '@/app/lip/getDataApply';

const style = {
  td: 'border border-slate-300 p-2 flex items-center justify-between hover:bg-red-200 hover:cursor-pointer',
};

type IdJob = {
  status: string,
  idJob: string,
  dateAccept: Date,
  job:{ jobTitle: string},
  countApply: number,
  countFeedBack:number
}

type Params = {
  dataParams: IdJob
}

export default function MainPage() {

  const route = useRouter()
  const [data, setData] = useState<IdJob[] | null>(null)
  const [modal, setModal] = useState<ApplicationLetter[] | null>(null)


  
  useEffect(() => { 
    const getData = async () => {
      try {
        const res: Promise<TypeRes> = await getDataDashbord('employers');
        const data: IdJob[]| null = (await res).data;      
        setData(data);
   
        console.log(data);
        
      } catch (error) {
        console.log(error);
      }
    };
    getData(); 
  },[]);

  // handle change logic
  const handleMoveJob = (idJob: string) => {
    route.push(`/jobs/get-job-employers/${idJob}`)
  };

  const click = async () => {
    const res: TypeRes = await getDataDashbord('employers')

  };

  const handleClickOppenModal = async (idJob: string, count: number) => {
    if(count < 1) return null
    console.log('1');
    
    try {
      const res: Promise<TypeRes> = await getDataApply('getData', idJob)
      const data: ApplicationLetter[] = (await res).data;
      setModal(data)  
    } catch (error) {
      return null 
    }
  };

  const content = (item: IdJob) => {
    return(
      <tr >
        <td onClick={() => handleMoveJob(item.idJob)} className='border border-slate-300 p-2 font-bold hover:bg-blue-200 hover:cursor-pointer'>
          <div className='flex space-x-1 justify-between px-1'>
            <div>{item.job.jobTitle}</div> 
            <div className='flex space-x-2 '>
              <span className='text-blue-500 '>Id: {item.idJob}</span>
              <span className='text-gray-500'>date Post: 16/7/2023</span>
              <span className='text-red-500'>date Expired: 16/7/2023</span>
            </div>
          </div>
        </td>
        <td >
          <div className={style.td}>
            {item.status} <QuestionCircleOutlined className='text-blue-800'/>
          </div>
        </td>
        <td >
          <div className={style.td} onClick={() => handleClickOppenModal(item.idJob, item.countApply)}>
            {item.countApply}<QuestionCircleOutlined className='text-blue-800'/>
          </div>
        </td>                
        <td >
          <div className={style.td}>
            {item.countFeedBack}<QuestionCircleOutlined className='text-blue-800'/>
          </div>
        </td>
      </tr>
    )
  };

  return (
    <div className='mt-95px'>
      <div className=' min-h-[100vh] bg-F7F7F7 flex justify-center'>
      <div className='w-5/6 min-h-[100vh] mt-[95px] rounded-lg bg-white p-2 '>

        <table className='custom-table w-full mt-6 border-collapse rounded-lg border border-slate-400'>
          <thead> 
            <tr className='bg-blue-700 w-full h-[50px]'>
            <th className='w-[60%] bg-red-500 border border-slate-300'>Job</th>
            <th className='w-[10%] border border-slate-300'>Status</th>
            <th className='w-[10%] border border-slate-300'>Count Apply</th>
            <th className='w-[10%] border border-slate-300'>Feedback</th>
            </tr>
          </thead>

          <tbody className='w-full'>
            {data &&
              data.map((item) => content(item))
            }
          </tbody>
        </table>

      </div>
      {modal && (
        <ModalPage/>
      )}
        
      </div> 
      <button onClick={click}>xxxxxxxxxxxxxxxxxx</button>     
    </div>
  )
}
