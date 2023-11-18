'use client'
import React from 'react'
import { MenuFoldOutlined, EditOutlined } from '@ant-design/icons'
type IdUser = {
  name: string,
  email:string,
  idUser: string,
  numberPhone: number
}

type Params = {
  users: IdUser[]
}

export default function ManageUsers({users}: Params) {
  console.log(users);
  
  return (
    <div className='flex justify-center min-h-[450px]'>
      <ul className='list-none w-[90%]'>
        {users.map(function(user, index) {
          return (
            <li key={index}>
              <div className='flex justify-between  border border-gray-300 rounded-lg p-2 mt-2'>
                <div className='flex w-[96%]'>
                  <div className='flex w-[40%]'>Email: {user.email}</div>
                  <div className='flex w-[30%]'>SDT: {user.numberPhone}</div>
                  <div className='flex w-[30%]'>ID: {user.idUser}</div>

                </div>

                <div className='text-blue-800 flex items-center space-x-2 font-bold'>
                  <MenuFoldOutlined />
                  <EditOutlined />
                </div>
              </div>
            </li>
          )
        })}

      </ul>
    </div>
  )
}
