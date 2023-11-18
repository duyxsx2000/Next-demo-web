import Link from 'next/link';
import React from 'react';
import { 
    PhoneOutlined,
    GoogleOutlined ,
    GlobalOutlined,
    HomeOutlined
  } from '@ant-design/icons'
type Props = {
    title: string,
    borderColor: string | null
};
type DataItem = {
    title: string,
    date: string | null,
    smallItem?: {
        title: string | null,
        content: string | null,
    }[]
};


export  const Frame = ({title , borderColor}:  Props) => (
    <div className={`border p-2 mt-4 ${borderColor ? borderColor : 'border-black'} `}>
        <p className='text-center abcd '>{title}</p>
    </div>
);
export  const PersonalInformation = () => {
    return (
      <div className='px-2 mb-4 '>
          <Frame title='THÔNG TIN LIÊN LẠC' borderColor={null}/>
          <div className='space-y-3 mt-4'>
              <div className='flex items-center'><PhoneOutlined className='mr-2' />0986514569</div>
              <div className='flex items-center'><GoogleOutlined className='mr-2' />z1992@gmail.com</div>
              <div className='flex items-center'><GlobalOutlined className='mr-2'/>www.it.dream.com</div>
              <div className='flex items-center'><HomeOutlined className='mr-2'/>Nguyên Huệ, Hà Nội</div>
          </div>
      </div>
    )
  };





