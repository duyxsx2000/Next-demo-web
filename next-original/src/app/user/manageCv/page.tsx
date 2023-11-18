import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PlusCircleOutlined, CloudUploadOutlined} from '@ant-design/icons'
import Footer from '@/app/component/footer'
export default function ManageCvPage() {

  return (
    <div className='pt-[95px]  bg-F7F7F7 min-h-[100vh] flex flex-col items-center justify-between'>
      <div className='bg-F7F7F7 mt-8   w-4/5 flex justify-between' >
        <div className='w-3/5 rounded-lg '>

          <div className='w-full h-[200px] rounded-lg bg-green-200'>
            <h1 className='font-bold text-2xl text-center  text-white'>Quảng Cáo</h1>
          </div>

          <div className='w-full min-h-[200px] mt-6 rounded-lg bg-white'>
            <div className='flex p-2 justify-between'>
              <h2 className='font-bold p-2 text-xl'>Cv đã tạo trên IT Dream</h2>
              <Link href='/'  className='bg-green-500 rounded-full p-1 flex items-center text-white font-bold'>
                <PlusCircleOutlined className='mr-2'/>
                Tạo Mới
              </Link>
            </div>
            <div>
              <div className='flex justify-center mt-6'>
                <Image 
                  src='https://static.topcv.vn/v4/image/cv-manager/no-cv.png' 
                  alt='' 
                  width={100} 
                  height={200}
                />
              </div>
              <div className='text-center mt-2'>Chưa có Cv nào trong danh sách</div>
            </div>
          </div>

          <div className='w-full min-h-[200px]  mt-6 rounded-lg bg-white'>
            <div className='flex p-2 justify-between'>
              <h2 className='font-bold p-2 text-xl'>Cv đã tải lên IT DREAM</h2>
              <Link href='/'  className='bg-green-500 rounded-full py-1 px-2 flex items-center text-white font-bold'>
                <CloudUploadOutlined className='mr-2'/>
                Tải lên
              </Link>
            </div>
            <div>
              <div className='flex justify-center mt-8'>
                <Image 
                  src='https://static.topcv.vn/v4/image/cv-manager/no-cv-upload.png' 
                  alt='' 
                  width={100} 
                  height={200}
                />
              </div>
              <div className='text-center mt-2'>Chưa có Cv nào trong danh sách</div>
            </div>
          </div>

          <div className='w-full min-h-[200px] mb-8  mt-6 rounded-lg bg-white'>
            <div className='flex p-2 justify-between'>
              <h2 className='font-bold p-2 text-xl'>Profile</h2>
              <Link href='/'  className='bg-green-500 rounded-full py-1 px-2 flex items-center text-white font-bold'>
                <PlusCircleOutlined className='mr-2'/>
                Tạo ngay
              </Link>
            </div>
            <div>
              <div className='flex justify-center mt-8'>
                <Image 
                  src='https://static.topcv.vn/v4/image/cv-manager/no-profile.png' 
                  alt='' 
                  width={100} 
                  height={200}
                />
              </div>
              <div className='text-center mt-2'>Chưa cập nhật Profile</div>
            </div>
          </div>

        </div>
        
        <div className='w-2/6 h-[400px] rounded-lg bg-white'>

        </div>
        
      </div>
      <Footer/>
    </div>
  )
}
