'use client'
import React, { useState } from 'react'
import Image from "next/image"
import { User } from 'next-auth'
import {
  GoogleOutlined, 
  EditTwoTone,
  DeleteOutlined, 
  AreaChartOutlined, 
  PlusCircleOutlined, 
  ReconciliationFilled, 
  EditOutlined   
} from '@ant-design/icons'


type Props = {

  dataUserCard: User  

};
export default function Test() {
    const style = {
        input: 'border border-gray-300 rounded-lg p-2 w-2/5 outline-0',
        button: 'h-[50px] w-[100px] border rounded-xl'
      };

      const [userCard, setUserCard] = useState({
        fullName:'',
        title:'',
        date:'',
        gender:'',
        numberPhone: 9876543210,
        email:'',
        city:'',
        address:''
      })
    
    

    
      const handleOnchangeInput= (e: any) => {
        const {name, value} = e.target
       
        setUserCard({
          ...userCard,
          [name]: value
        })
        console.log(name,value);
        
        console.log(userCard.fullName);
        
      }

    
  return (
    <div className='pt-5 flex justify-between'>
  
    <div>
     
      <div className='flex justify-center ml-2 space-x-4 mt-8'>
        <p className='space-x-4 flex items-center'>
          <AreaChartOutlined />
          <span className='ml-2'>Edit</span>
        </p>
        <p className='space-x-4 flex items-center'>
          <DeleteOutlined />
          <span className='ml-2'>Detele</span>
        </p>
      </div>
    </div>

    <div>
      <div className='space-y-5'>

        <input 
          className='border outline-0 border-gray-300 rounded-lg p-2 w-full' 
          type='text' 
          value={userCard.fullName}
          name='fullName'
          onChange={handleOnchangeInput}
          placeholder='Full Name'> 
        </input>
        <input 
          className='border outline-0 border-gray-300 rounded-lg p-2 w-full' 
          type='text' 
          placeholder='Title'
          value={userCard.title}
          name='title'
          onChange={handleOnchangeInput}>
        </input>

        <div className='flex space-x-5  justify-between'>
          <input className='border border-gray-300 rounded-lg p-2 w-2/5' type='date' ></input>
          <select className={style.input} id="country" name="country">
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="uk">UK</option>
            <option value="australia">Australia</option>
          </select>
        </div>

        <div className='flex space-x-5'>
          <input className={style.input} type='number' placeholder='Phone Number'></input>
          <input className={style.input} type='email' placeholder='email'></input>
        </div>

        <div className='flex space-x-5'>
          <select className={style.input} id="country" name="country">
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="uk">UK</option>
            <option value="australia">Australia</option>
          </select>
          <input className={style.input} type='text' placeholder='address'></input>

        </div>
       
      </div>
    </div>
    
  </div>

)

}
