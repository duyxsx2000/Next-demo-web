import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RightOutlined, EnvironmentOutlined, RightCircleOutlined} from '@ant-design/icons'

type Spotlight = {
    
    company: {
        logo: string,
        image: string,
        name: string,
        address: string,
        title: string
    },
    jobs: { name: string[], quantity: number}

}

type Props = {
    spotlight: Spotlight
}
export default function Spotlight({spotlight}: Props) {


  return (
    <div className='h-full w-full flex rounded-lg'>

        <div className='relative bg-red-300 w-1/3 h-full rounded-lg ' >
            <Image
                className='w-ull h-full rounded-l-lg'
                src={spotlight.company.image}
                alt={spotlight.company.name}
                width={500}
                height={500}
            />
            <Image
                className='absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 border border-[rgba(122,125,125,0.5)]  w-24 h-24 '
                src={spotlight.company.logo}
                alt={spotlight.company.name}
                width={500}
                height={500}
            />
            <div className='html absolute top-[10px] bg-red-400 rounded-r-md p-1 text-white'>
                <p>Company Spotlight</p>
                <div className='triangle'></div>
            </div>
        </div>

        <div className='flex flex-col justify-between border-x border-[rgba(117,114,114,0.42)] w-1/3 h-full'>

            <div className='flex flex-col items-center mt-4'>
               <h1 className=' font-semibold text-xl'>{spotlight.company.name}</h1>
               <p className='flex items-center text-gray-300 text-sm'><EnvironmentOutlined />{spotlight.company.address}</p>
            </div>
            <div className=' px-10'>
                <p className=' text-center'>{spotlight.company.title}</p>
            </div>

            <Link className='flex justify-center items-center space-x-2 text-center text-blue-800' href="/#">
                <span className='mr-2'>View</span> 
                {spotlight.jobs.quantity}
                <span>jobs</span> 
                <RightOutlined />
            </Link>

        </div>

        <div className=' w-1/3 h-full py-6'>
            {spotlight.jobs.name.map((name, index)=>{
                return(
                    <Link key={index} className=' flex items-center my-4  ml-2 space-x-2' href="/#">
                            <RightCircleOutlined className='mr-2 text-red-900' />
                            {name}
                    </Link>
                )
            })}
       </div>
   </div>
  )
}
