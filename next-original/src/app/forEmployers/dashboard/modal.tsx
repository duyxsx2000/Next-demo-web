'use client'
import React from 'react'
import { GoogleOutlined, 
  PhoneOutlined,
  SearchOutlined ,
  MessageOutlined ,
  DeleteOutlined,
  VerticalAlignBottomOutlined

} from '@ant-design/icons'
export default function ModalPage() {

  return (
    <div className='h-[100vh] w-full bg-[rgba(149,146,146,0.74)] fixed flex justify-center '>
      <div className='mt-[100px] h-[500px] w-2/4 bg-white rounded-lg p-4 '>
        <div className=' space-y-1 py-2 px-2 mt-4 border-b border-t border-gray-300 flex'> 
          <div className='w-4/6'>
            <div className='flex space-x-2 '>
              <p className='font-bold '>Đỗ Văn Nam</p>
              <div className='text-gray-300'>5h ago</div>
            </div>
            <div className='flex space-x-5'>
              <div className='flex items-center'>
                <GoogleOutlined  className='mr-2'/>
                nam123@gmail.com
              </div>

              <div className='flex items-center'>
                <PhoneOutlined className='mr-2' />
                0393564812578
              </div>

            </div>
            <div className='text-red-600 font-bold'>..............................</div>
          </div>
          <div>
            <div className='flex items-center font-bold text-blue-900'>
              <SearchOutlined  className="mr-3"/>
              See CV
            </div>
            <div className='flex items-center font-bold text-blue-900'>
              <MessageOutlined className="mr-3"/>
              Chat whit candidate 
            </div>
            <div className='flex space-x-4'>
              <div className='flex items-center font-bold text-red-900'>
                <DeleteOutlined className="mr-3"/>
                Del
              </div>
              <div className='flex items-center font-bold text-blue-900'>
               <VerticalAlignBottomOutlined className="mr-1"/>
                donwLoad
              </div>
            </div>

            
          </div>
       
        </div>
      </div>
    </div>
  )
}
