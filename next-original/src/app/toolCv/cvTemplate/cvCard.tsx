'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { 
    FormOutlined, 
    EyeOutlined,
} from '@ant-design/icons'
import Cv1 from './listCv/cv1'

export default function CvCard() {
    const [priveiw, setPriveiw] = useState (false);
    const [itemPriveiw, setItemPriveiw] = useState(false)

    const handleClickOppenModal = () => {
        console.log('123');
        
        if(!priveiw){
            setPriveiw(true)
        } else {
            setPriveiw(false)
        }

        setTimeout(() => {
            if(!itemPriveiw){
                setItemPriveiw(true)
            } else {
                setItemPriveiw(false)
            }
        },100);
        
        console.log(priveiw);
        
    };


    function manageLeft(title: string, colors: string[], idCv: string ){
        console.log(colors);
        return ( 
          <>
            <h1 className='font-bold  px-4'>{title}</h1>
            <div className='px-4'>
            <p>màu sắc</p>
            <div className='flex space-x-2 mt-3'>
                {colors && colors.map((color, index) => (
                    <div key={index} className={`w-[25px] h-[25px] rounded-full ${'bg-' + color + '-300'}`}></div>
                ))}
            </div>
            </div>
            <div className='mt-2 flex flex-col items-center space-y-2 px-4'>
                <Link className='py-2 w-full text-center text-white font-bold bg-green-400 rounded-lg' href={`/toolCv/createCv/${idCv}`}>
                    Dùng thử mẫu này
                </Link>
            
                <button 
                    className=' py-2 w-full  text-gray-700 border font-bold border-gray-300 rounded-lg'
                    onClick={() =>handleClickOppenModal()}
                >
                    Đóng lại
                </button>
            </div>
          </>
        )
    }
  
    
    function card(){
        return (
            <div className='w-1/4 h-[350px] px-2 mt-[50px] '>
                
                <div className='w-full h-[350px] relative  p-x-2 rounded-lg shadow-xl '>    
                    <div className='group h-full rounded-t-lg bg-blue-100 z-10 relative '>   
                        <div className='absolute flex flex-col items-center p-2 space-y-2 group-hover:bottom-[90px] transition-all  bg-gradient-to-t from-[rgba(65,64,64,0.5)] to-transparent z-10 w-full h-[90px] bottom-0  '>

                            <Link href={'/toolCv/createCv/1'} className='rounded-full w-4/5 text-white justify-center flex items-center bg-blue-800 text-center'>
                                <FormOutlined className='mr-2'  /> 
                                Dùng mẫu
                            </Link>
                            <div onClick={() => {handleClickOppenModal()}}>Xem Trước</div>

                        </div>
                        
                    </div>
                    <div className='h-[100px] px-2 bg-white z-40 w-full rounded-b-lg absolute -bottom-[10px] '>
                        <p className='font-medium mt-2'>Cổ điển</p>
                        <div className='mt-2 flex space-x-2'>
                            <div className='w-[20px] h-[20px] rounded-lg bg-red-300'></div>
                            <div className='w-[20px] h-[20px] rounded-lg bg-blue-300'></div>
                            <div className='w-[20px] h-[20px] rounded-lg bg-green-300'></div>
                            <div className='w-[20px] h-[20px] rounded-lg bg-pink-300'></div>

                        </div>
                    </div>   
                </div>
            </div>
        )
    }

  return (
    <>
    {priveiw ? (
        <div className='h-[650px] z-50 w-full right-0 left-0  top-[95px] bg-[rgba(149,146,146,0.74)]  fixed'>
            <div className=' w-full h-full  relative'>
                <div  className={ `z-20 bg-white  h-[700px] left-1/2 -translate-x-1/2 -translate-y-1/2 fixed -top-[500px] transition-all ${itemPriveiw ? 'top-1/2 ' : ''}`}>
                    <div  className='w-full h-[700px] flex p-4 rounded-lg'>
                        <div className=' h-[680px]  overflow-auto p-1 '>
                            <div className='h-[1057px] w-[746px]  '>
                            <Cv1/>
                            </div>
                        </div>
                        <div className=' h-[500px] w-[288px] ounded-lg flex flex-col justify-between'>
                        {manageLeft('Mẫu Cổ Điển',['blue', 'red', 'pink'], 'a1')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <></>
    )}
   
    {card()}
    {card()}
    {card()}
    {card()}
    {card()}
    {card()}
    {card()}
    {card()}
    <div onClick={() => {handleClickOppenModal()}}>click me</div>
    <div 
        onClick={() => {handleClickOppenModal()}}
        
    >
        <EyeOutlined className='mr-2'/>
        Xem trước
    </div>

    </>
        
  )
}
