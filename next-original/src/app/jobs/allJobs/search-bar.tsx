'use client'
 
import getListJobs from '@/app/lip/getListJobs'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/redux/services/hook'
import Loading from '@/app/loading'
import Link from 'next/link'
type Props = {
  key: string | undefined
}
const keyJobs = process.env.NEXT_PUBLIC_API_KEY_JOBS 
export default  function SearchAllJobs() {
  const [jobsList,setJobsList] = useState<MenuJob | null>()
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const data = useAppSelector((state) => state.jobs.titleJobs);
  const route = useRouter()
 
  useEffect(()=>{

    if(!data){

      const getData = async ()=>{
        const response = await getListJobs({title:"ALL Jobs", dataSearch: search},keyJobs);
        const dataJobs = await response;
        setJobsList(dataJobs);
      };
      getData();

    }else{ 

      const jobsSearch = data.find((element) => element.title === "All Jobs")
      if(jobsSearch?.MenuJob && search){
        const jobs = jobsSearch?.MenuJob.find((element) => element.title === search );
        setJobsList(jobs)
      }else setJobsList(null)
      
    }
    

    
  },[search])

console.log(search,'2222222222222222222222222');

   
   
 
  if(!jobsList ) return(
    <div className='h-[900px] bg-black'>
      <div className='h-[300px]'></div>
      <h1 className=' font-bold text-2xl text-center w-full text-white '>Loading....</h1>
    </div>
  )
  
  const job = jobsList.listJob?.map((jobs,index) => {
    return(
      <li key={index} className='text-center mt-2 font-medium'>
        <Link href={`/jobs/${jobs.title}`}>{jobs.title}</Link>
      </li>
    )
  })

  return (
    <div className='h-[900px] z-[99] flex justify-center'>

      <div className='pt-[100px] w-3/5'>

        <h1 className=' mt-20 border-b border-black pb-8  text-center font-bold text-2xl'>
        Search: {jobsList.title}
        </h1>

        <ul className='mt-8 grid grid-cols-4 gap-4'>
          {job} 
        </ul>
     
      </div>

    </div>
  )
}