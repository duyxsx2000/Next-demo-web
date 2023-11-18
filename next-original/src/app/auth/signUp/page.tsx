'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import postUser from '@/app/lip/postUser'
import { redirect, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const style = {
  input: 'mb-5 border border-gray-500 w-full p-2',
  infalse: 'mb-5 border border-red-700 w-full p-2 '
};

export default function PageSignUp() {

  const [dataSignUp, setDataSignUp] = useState({
    name:'',
    email:'',
    password:'',
    phone:84,
  });
  const [condition, setCondition] = useState(false);
  const [status, setStatus] = useState(false);
  const router = useRouter();

  const handleObChange = (e: any) => {
    const {name , value}  = e.target
    setDataSignUp({
      ...dataSignUp,
      [name]: value
    });
    setStatus(false)
  };
     
  const handleClick = (event: any) => {
    event.preventDefault();

    async function postRegister(){
      if(!condition){
        console.log('exit');  
      }
      else {
        const dataPost = dataSignUp

        if(Object.values(dataPost).every(value => value !== undefined && value !== null && value !== '')){
          try {
            const res = await postUser(dataPost,'signUp')
            if(res)router.push('/');  
            
          } catch (error) {
            console.log(error,'errorrr'); 
          }

        }
        else setStatus(true)
      }
      
    };
    postRegister()  
  }

  return (
    <div className=' p-60 flex space-x-16 justify-around'>
      <form className='w-[536px]'>
        <h1 className='text-xl font-bold '>Welcome to itDream</h1>
        <h2 className='text-xl font-bold '>Sign up</h2>

        <div>
          <p className='my-6'>
            <span className='mr-2'>
                <input type='checkbox'></input>
            </span>
            By signing up with Google, I agree to ITviec’s Terms & Conditions and Privacy Policy in relation to your privacy information.
          </p>   
        </div>
        
        <div>
          <button className='mb-5 w-full border border-red-800 text-red-800 font-bold p-3'>Sign In with Google</button><br/>
          {!status ? <></> :  <h1 className='text-xl text-red-700 my-3 border rounded-lg border-gray-300 text-center p2'>Xin hãy nhập đầy đủ, chính xác các thông tin cần thiết và thử lại!!</h1>}
        
          
          <label >Name</label><br/>
          <input 
            className={!status ? style.input : style.infalse} 
            placeholder='Name'
            name='name'
            type='text'
            value={dataSignUp.name}
            onChange={handleObChange}></input>
          
          <label >Email</label><br/>
          <input 
            className={!status ? style.input : style.infalse} 
            placeholder='Email'
            name='email'
            type='email'
            value={dataSignUp.email}
            onChange={handleObChange}
          >
          </input>

          <label >Number Phone</label><br/>
          <input 
            className={!status ? style.input : style.infalse} 
            placeholder='Number Phone'
            name='phone'
            type='number'
            value={dataSignUp.phone}
            onChange={handleObChange}
          >
          </input>
          
          <div className='flex justify-between'>
            <label>Password</label>
          </div>
        
          <input 
            className={!status ? style.input : style.infalse}
            placeholder='password'
            name='password'
            type='password'
            value={dataSignUp.password}
            onChange={handleObChange}
          >
          </input>
          
          <div>
            <p className='my-6'>
              <span className='mr-2'>
                  <input type='checkbox' onClick={()=> {!condition ? setCondition(true) : setCondition(false)}}></input>
              </span>
              I have read and agree to ITviec’s Terms & Conditions and Privacy Policy in relation to my privacy information.
            </p>   
          </div>

          <button 
            className={`w-full  font-bold p-3 ${!condition ? 'bg-[rgba(211,135,135,0.5)] text-gray-300' : 'text-white bg-red-600'}`} 
            onClick={handleClick} 
            type='submit'
          >
            <span>SignUp</span>
          </button>
        </div>
      </form>
    <div className=''>
    </div>
  </div>
  )
}
