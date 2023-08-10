import Link from 'next/link'
import React from 'react'
import Image from "next/image"

type Props = {
    listTool: Tool[]
}


export default function MenuTool({listTool}: Props) {  
   
    const tool = function(listTool: Tool[]){
        
        const toolCard = listTool.map((tool,index)=>{
            
            return(

                <div key={index} className='flex flex-col justify-between mx-5 shadow-lg  w-80 hover:shadow-2xl '>

                    <img className='w-full h-40' src={tool.image}></img>
              
                    <h1 className='flex justify-center font-bold my-3'>{tool.title}</h1>

                    <div className='flex justify-center '>
                        <p className='text-center font-medium w-3/4'>{tool.text}</p>
                    </div>

                    <div className='flex justify-center bottom-0'>
                    <Link className='flex items-center justify-center my-8 font-bold border border-red-800 text-red-800 h-10 w-2/4 hover:bg-red-100 ' href='/#'>Explore</Link>
                    </div>
            
                </div>

            )
        })

        return  toolCard       
    }

  return (
    <>
        <h1 className='mt-5 text-2xl text-center font-bold '>Useful tools to help you find the right job</h1>
        <div className='flex justify-around  px-60 py-11  h-h500 '>
            {tool(listTool)}
        </div>
    </>

  )
}
