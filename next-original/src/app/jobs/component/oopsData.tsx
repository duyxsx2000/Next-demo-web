import React from 'react'
import Image from 'next/image'
export default function OopsData() {
  return (
    <div className=' flex justify-center items-center h-[500px]  '>

        <div className='W-1/2 h-[100px]'>
            <Image 
                className='h-[150px]'
                src='https://safesendsoftware.com/wp-content/uploads/2016/06/Human-Error.jpg'
                alt='img'
                width={500}
                height={1000}
            />
            <h1 className='w-full text-center font-bold text-2xl text-red-900'>Oops! The job you're looking for doesn't exist.</h1>
        </div>

    </div>
  )
}
