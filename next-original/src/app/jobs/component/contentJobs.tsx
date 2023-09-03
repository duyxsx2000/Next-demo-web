import React from 'react'
import ListJobs from './listJobs'
import Job from './job'
type Props = {
    detailJobs: DetailJob[]
}
export default function ContentJobs({detailJobs} : Props) {

  return (
    
    <div className='flex justify-center bg-[rgba(194,195,196,0.14)]'>

        <div className=' mt-[10px] flex   w-3/4 space-x-5  '>

            <ListJobs params={detailJobs}></ListJobs>

            <div className=' top-[95px] bg-white sticky left-1/2 w-3/5 h-[1000px]'>

                {detailJobs.length > 0 && <Job paramDetailJob={detailJobs[0]}></Job>}
                
            </div>

        </div>

    </div>
  )
}
