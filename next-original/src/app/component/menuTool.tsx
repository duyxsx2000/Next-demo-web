import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

type Props = {
    listTool: Tool[]
}


export default function MenuTool({listTool}: Props) {  
   
    const tool = function(listTool: Tool[]){
        
        const toolCard = listTool.map((tool,index)=>{
            
            return(

                <div key={index} className='flex lg:flex-col justify-between lg:mx-5 shadow-lg  lg:w-80 w-full hover:shadow-2xl '>

                    <Image className=' w-full h-40'
                           src={tool.image} 
                           alt={tool.title}
                           width={300} height={160} 
                    /> 

                    <h1 className='flex justify-center items-center font-bold my-3 w-40 '>{tool.title}</h1>

                    <div className='flex justify-center items-center w-96  '>
                        <p className='text-center font-medium w-3/4'>{tool.text}</p>
                    </div>

                    <div className='flex justify-center items-center bottom-0'>
                    <Link className='flex items-center justify-center my-8 font-bold border border-red-800 text-red-800 h-10 lg:w-2/4 hover:bg-red-100 ' href='/#'>Explore</Link>
                    </div>
            
                </div>

            )
        })

        return  toolCard       
    }

  return (
    <>
        <h1 className='mt-5 text-2xl text-center font-bold '>Useful tools to help you find the right job</h1>
        <div className='flex flex-col lg:flex-row justify-around  lg:px-60 py-11  lg:h-h500 h-h800 '>
            {tool(listTool)}
        </div>
    </>

  )
}
