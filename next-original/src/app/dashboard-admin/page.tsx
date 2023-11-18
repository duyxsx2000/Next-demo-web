'use client'

import React, { useEffect, useState } from 'react'
import SearchBar from './search-bar'
import EmployersPage from './component-dashboard/employers'
import Jobs from './component-dashboard/jobs'
import ManageUsers from './component-dashboard/manageUsers'
import LateWaiting from './component-dashboard/lateWaiting'
import getDataJobs from '../lip/getListJobs'
import getDataEmployers from '../lip/getDataEmployers'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import gettUser from '../lip/getUser'
import StatisticalTables from './component-dashboard/statistical-tables'
import getDataDashbord from '../lip/getDataDashbord'

type DataResJobs = {
  title: string,
  data: TypeJob[]
};
type IdUser = {
  name: string,
  email:string,
  idUser: string,
  numberPhone: number
}
type DataResUers = {
  title: string,
  data: IdUser[]
};
type ResQuantify = {
  title: string,
  data: CountData
}
const keyGetEmployers = 'Get-Data-Employers';
const keyGetAllJobs = 'Get-Data-All-Jobs';

export default  function Page() {
  const [statusNav, setStatusNav] = useState('employers')
  const [dataAllJobs, setDataAllJob] = useState<TypeJob[] | null> (null)
  const [dataEmployers, setDataEmployers] = useState<TypeEmployers[] | null> (null)
  const [dataUsers, setDataUsers] = useState<IdUser[] | null> (null)
  const [dataCount, setDataCount] = useState<CountData | null> (null)
  const [xx,setxx] = useState('')

  const {data: session} = useSession({
    required: true,
    onUnauthenticated(){
      redirect('/')
    }
  });
  
  useEffect(()=>{
    
    const key = 'Get-Data-Employers';
    const getData = async () => {
      try {

        const resEmployers: Promise<TypeEmployers[]> = await getDataEmployers(key,'0','5','await');
        const dataEmployers: TypeEmployers[] = await resEmployers;       
        setDataEmployers(dataEmployers)
        
      } catch (error) {
        console.log(error,"error"); 
      }
    };
    getData()
  },[xx]);

  const getData = async (key: string) => {

  if(!key) return null

  if(key === 'employers') {
    setStatusNav('employers');
    try {
      const resEmployers: Promise<TypeEmployers[]> = await getDataEmployers(keyGetEmployers,'0','5','await');
      const dataEmployers = await resEmployers;

      if(dataEmployers) {
        setDataEmployers(dataEmployers)
      }
    } catch (error) {
      console.log(error);  
    }

  } else if (key === 'manage users') {
    setStatusNav('manage users')
    try {
      const resUsers : Promise<DataResUers> = await gettUser('none','get-id-users')
      const dataUsers: IdUser[] = (await resUsers).data

      if(dataUsers) {
        setDataUsers(dataUsers)
      }
    } catch (error) {
      console.log(error);  
    }

  } else if (key === 'manage jobs') {
    setStatusNav('manage jobs')
    try {
      const resJobs: Promise<DataResJobs> = await getDataJobs(
        keyGetAllJobs, 
        "none", 
        "none",
        "0",
        "10",
        "await"
      );
      const dataJobs: TypeJob[] = (await resJobs).data

      if(dataJobs) {
        setDataAllJob(dataJobs)
      }
    } catch (error) {
      console.log(error);  
    }
    
  } else if (key === 'statistical tables') {
    setStatusNav('statistical tables')
    try {
      const resQuantifyData: Promise<ResQuantify> = await getDataDashbord('admin')
      const dataCount: CountData = await (await resQuantifyData).data
      setDataCount(dataCount)
    } catch (error) {
      console.log(error);  
    }
  }     
 }

  
  if(!dataAllJobs && !dataEmployers) return null
  if(session?.user.role != "admin") return null
  
  return (
    <div className='pt-[150px] min-h-[120vh]  bg-F7F7F7 flex flex-col items-center  '>
      <div className='flex  border rounded-xl space-x-6 bg-white w-4/6'>

        <div 
          className={` rounded-l-xl p-2 font-bold ${statusNav === 'employers' ? 'bg-red-700 text-white' : ''}`}
          onClick={() => getData('employers')}
        >
          Employers waiting
        </div>

        <div
          className={`  p-2 font-bold ${statusNav === 'manage jobs' ? 'bg-red-700 text-white' : ''}`}
          onClick={() => getData('manage jobs')}
        >
          job waiting
        </div>

        <div
          className={` p-2 font-bold ${statusNav === 'manage users' ? 'bg-red-700 text-white' : ''}`}
          onClick={() => getData('manage users')}
        >
          manage users
        </div>

        <div
          className={` p-2 font-bold ${statusNav === 'statistical tables' ? 'bg-red-700 text-white' : ''}`}
          onClick={() => getData('statistical tables')}
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

        {statusNav === 'employers' && dataEmployers && <EmployersPage dataEmployers={dataEmployers} />}

        {statusNav  === 'manage jobs' && dataAllJobs ? (
          <Jobs dataAllJob={dataAllJobs} dataEmployers={''} />
        ) : <></> 
        }

        {statusNav === 'manage users' && dataUsers ?(
          <ManageUsers users={dataUsers}/>
        ): <></>
        }

        {statusNav === 'late waiting' ? <LateWaiting/> : <></>}

        {statusNav === 'statistical tables'&& dataCount ? (
          <StatisticalTables dataPrams={dataCount}/>
        ) : <></> 
        }
        
      </div>
     
    </div>
  )
}
