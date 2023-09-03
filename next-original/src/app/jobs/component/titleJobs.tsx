import React from 'react'

type Props = {
    nameJobs: string
}
export default function TitleJobs({nameJobs}: Props) {
  return (
    <div className='flex justify-center mt-[150px]'>

        <div className='flex justify-between w-3/4'>
            <h1 className=' font-bold text-2xl'> 100 <span className='text-red-900'>{nameJobs}</span>  job in Việt Nam</h1>
            <button className='border border-red-900 w-32'>Filter</button>
        </div>

    </div>
 
  )
}
