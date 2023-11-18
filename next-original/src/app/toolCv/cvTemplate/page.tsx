'use client'

import Link from 'next/link'
import React from 'react'
import { FormOutlined, EyeOutlined } from '@ant-design/icons'
import CvCard from './cvCard'
const style = {
    itemCv: 'z-20 h-[350px] rounded-lg shadow-xl',
    cvCard: 'w-1/4 mt-4 p-2 h-[350px]'
}
export default function CvTemplatePage() {

  return (
    <div className='pt-[95px]  bg-F7F7F7 min-h-[100vh] flex flex-col items-center '>
        <h1 className='text-xl w-4/6 mt-6  font-bold'>Danh sách mẫu Cv chuẩn, đẹp, ấn tượng mới nhất 2023</h1>
        <div className='h-[100px] w-4/6 mt-6 rounded-lg bg-white'>filter</div>
        <div className='h-[900px] w-4/6 mt-6 rounded-lg bg-white'>
            <p>Trải nghiệm phiên bản công cụ tạo CV cá nhân hoá mới nhất của TopCV - CV Builder 2.0 với các mẫu CV mới nhất dưới đây.</p>
            <div className='flex flex-wrap mt-6  p-6'>
            <CvCard/>
            </div>
        </div>


    </div>
  )
}
