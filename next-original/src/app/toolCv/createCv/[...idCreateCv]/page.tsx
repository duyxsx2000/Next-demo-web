'use client'
import React from 'react'
import Cv1a from '../listCv/cv1a'
import {EyeOutlined, CloudDownloadOutlined, FileDoneOutlined } from '@ant-design/icons'
import MyEditor from '@/app/component/ricTextEditor'

export default function CreateCv() {
  return (
    <div className='pt-[95px] bg-F7F7F7'>
      <div className=' h-32 bg-white top-0 z-50 sticky left-1/2 w-full '>

        <div className='flex justify-between px-10 py-2 border-b border-gray-600'>
          <input className=' outline-none  border border-gray-700 rounded-lg p-2' placeholder='Cv Chưa đặt tên'></input>

          <div className='flex space-x-3'>
            <button className='flex items-center rounded-lg p-2 font-semibold bg-green-300 text-green-800 hover:bg-green-800 hover:text-white'>
              <EyeOutlined className='mr-2'/><p>Xem trước</p>
            </button>
            <button className=' flex items-center rounded-lg p-2 font-semibold bg-green-300 text-green-800 hover:bg-green-800 hover:text-white'>
              <CloudDownloadOutlined className='mr-2' />
              <p>Lưu và tải xuống</p>
            </button>
            <button className='flex items-center rounded-lg p-2 font-semibold bg-green-800 text-white'>
              <FileDoneOutlined className='mr-2' />
              <p>Lưu lại</p>
            </button>
          </div>

        </div>

        <div>
          <div className='h-[200px]'>
            
          </div>
        </div>

      </div>
      <MyEditor/>
      <div className='flex justify-between p-2'>
        <div>
          <div>ff</div>
          
        </div>

        <div className='w-[800px]' ><Cv1a/></div>
          
      </div> 
    </div>
  )
}
