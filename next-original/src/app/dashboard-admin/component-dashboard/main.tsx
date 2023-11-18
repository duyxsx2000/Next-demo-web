'use client'

import React, { useEffect, useState } from 'react'

import EmployersPage from './employers'
import Jobs from './jobs'
import ManageUsers from './manageUsers'
import LateWaiting from './lateWaiting'
import getDataJobs from '../../lip/getListJobs'
import getDataEmployers from '../../lip/getDataEmployers'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import gettUser from '../../lip/getUser'
import StatisticalTables from './statistical-tables'
import getDataDashbord from '../../lip/getDataDashbord'

type DataResJobs = {
  title: string,
  data: TypeJob[]
};
type IdUser = {
  name: string,
  email:string,
  idUser: string,
  numberPhone: number
};
type DataResUers = {
  title: string,
  data: IdUser[]
};
type ResQuantify = {
  title: string,
  data: QuantifyData
};
type Params = {
  firstData: TypeEmployers[] | null
};
export default function MainPage({firstData}: Params) {

  const [statusNav, setStatusNav] = useState('employers')
  const [dataAllJobs, setDataAllJob] = useState<TypeJob[] | null> (null)
  const [dataEmployers, setDataEmployers] = useState<TypeEmployers[] | null> (null)
  const [dataUsers, setDataUsers] = useState<IdUser[] | null> (null)
  const [dataQuantify, setDataQuantify] = useState<QuantifyData | null> (null)
  const [xx,setxx] = useState('')

  const {data: session} = useSession({
    required: true,
    onUnauthenticated(){
      redirect('/')
    }
  })
   
    
    
  useEffect(()=>{
    const keyGetEmployers = 'Get-Data-Employers';
    const keyGetAllJobs = 'Get-Data-All-Jobs';
    const getData = async () => {
      try {

        const resUsers : Promise<DataResUers> = await gettUser('none','get-id-users')
        const resJobs: Promise<DataResJobs> = await getDataJobs(keyGetAllJobs, "none", "none");
        const resEmployers: Promise<TypeEmployers[]> = await getDataEmployers(keyGetEmployers);
        const resQuantifyData: Promise<ResQuantify> = await getDataDashbord()
        
        const dataJobs: TypeJob[] = (await resJobs).data;
        const dataEmployers = await resEmployers;
        const dataUsers: IdUser[] = (await resUsers).data
        const dataQuantify: QuantifyData = await (await resQuantifyData).data

        if(dataJobs) {
          setDataAllJob(dataJobs)
        };
        if(dataEmployers) {
          setDataEmployers(dataEmployers)
        };
        if(dataUsers) {
          setDataUsers(dataUsers)
        };
        if(dataQuantify) {
          setDataQuantify(dataQuantify)
        };
        
      } catch (error) {
        console.log(error,"error"); 
      }
    };
    getData()
  },[xx]);
  
  
  if(!dataAllJobs && !dataEmployers) return null
  if(session?.user.role != "admin") return null
  
  return (
    <div className='pt-[150px] min-h-[100vh]  bg-F7F7F7 flex flex-col items-center  '>
      <div className='flex  border rounded-xl space-x-6 bg-white w-4/6'>

        <div 
          className={` rounded-l-xl p-2 font-bold ${statusNav === 'employers waiting' ? 'bg-red-700 text-white' : ''}`}
          onClick={() => (setStatusNav('employers'))}
        >
          Employers waiting
        </div>

        <div
          className={`  p-2 font-bold ${statusNav === 'job waiting' ? 'bg-red-700 text-white' : ''}`}
          onClick={() => setStatusNav('job waiting')}
        >
          job waiting
        </div>

        <div
          className={` p-2 font-bold ${statusNav === 'manage users' ? 'bg-red-700 text-white' : ''}`}
          onClick={() => setStatusNav('manage users')}
        >
          manage users
        </div>

        <div
          className={` p-2 font-bold ${statusNav === 'statistical tables' ? 'bg-red-700 text-white' : ''}`}
          onClick={() => setStatusNav('statistical tables')}
        >
          Statistical Tables
        </div>

        <div
          className={`rounded-r-xl p-2 font-bold ${statusNav === 'late waiting' ? 'bg-red-700 text-white' : ''}`}
          onClick={() => setStatusNav('late waiting')}
        >
          late waiting
        </div>
      </div>
      <div className=' rounded-xl mt-6 w-4/6 border bg-white border-gray-500'>

        {statusNav === 'employers' && dataEmployers && dataAllJobs ? (
          <EmployersPage dataEmployers={dataEmployers} dataAllJob={dataAllJobs}/>
        ) : <></>         
        }

        {statusNav  === 'job waiting' && dataAllJobs ? (
          <Jobs dataAllJob={dataAllJobs} dataEmployers={''} />
        ) : <></> 
        }

        {statusNav === 'manage users' && dataUsers ?(
          <ManageUsers users={dataUsers}/>
        ): <></>
        }

        {statusNav === 'late waiting' ? <LateWaiting/> : <></>}

        {statusNav === 'statistical tables'&& dataQuantify ? (
          <StatisticalTables data={dataQuantify}/>
        ) : <></> 
        }
        {firstData ? (<div>alooooooooo</div>) : <div>olaaaaaaaaaaa</div>}
        
      </div>
      
    </div>
  )
}

