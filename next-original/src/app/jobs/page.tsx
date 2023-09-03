
import React from 'react'
import Search from '../component/searchComponent'
import getDataHome from '../lip/getDataHome'
import Slideshow from '../component/slideShow/slide'
import Footer from '../component/footer'
import ListJobs from './component/listJobs'
import Job from './component/job'
import dataDetailJobs from "../../../data/dataDetailJobs,.json"
export default async function jobsPage() {
    
    const dataHome: Promise<DataHome> = await getDataHome()
    const data = await dataHome
 

    

  
    return (
        <main className='pt-px95 h-[601px] bg-F7F7F7  '>

            <div className=' relative '>

                <Search dataSearch={data.dataSearch}></Search>
                <div className='absolute top-3/4  left-1/2 -translate-x-1/2  bg-white  w-3/4 h-48 rounded-lg'>
                    <Slideshow></Slideshow>
                </div>

            </div>
            <div className='flex justify-center mt-[150px]'>
                <div className='flex justify-between w-3/4'>
                    <h1 className=' font-bold text-2xl'> 100 <span className='text-red-900'>React developer</span>  job in Việt Nam</h1>
                    <button className='border border-red-900 w-32'>Filter</button>
                </div>
            </div>

            <div className='flex justify-center bg-[rgba(194,195,196,0.14)]'>
                <div className=' mt-[10px] flex   w-3/4 space-x-5  '>
                 
                    <ListJobs params={dataDetailJobs}></ListJobs>
                    <div className=' top-[95px] bg-white sticky left-1/2 w-3/5 h-[1000px]'>
                        <Job paramDetailJob={dataDetailJobs[0]}></Job>
                    </div>
                </div>
            </div>

            <Footer></Footer>
            
        
        </main>
  )
}
