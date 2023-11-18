'use client'



import Link from 'next/link'
import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { signIn as nextAuthSignIn, useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '../../redux/services/hook';

const styleLi = 'flex items-center space-x-2'

export default function LoginPage() {
  const urlID = useAppSelector((state)=> state.user.test);
  const [email,setEmail] = useState('duy2k@gmail.com');
  const [password,setPassword] = useState('11111');
  const [error,setError] = useState('');
  const router = useRouter();
  const {data: session} = useSession();

  const pathname = usePathname();
  const searchParams = useSearchParams(); 
  const a = searchParams.get('callbackUrl') || '/';
   
  async function signIn(){
     
   nextAuthSignIn("credentials", {
      email: email,
      password: password,
      keySignIn:'userSignIn',
      redirect: true,
      callbackUrl: a 
    });
 
  };
 
  async function signInWithGoogle(){

    nextAuthSignIn("google",{
      callbackUrl: a || ""
    })

  }

  function chageEmail(event: any){
    setEmail(event?.target.value)
  };

  function chagePass(event: any){
    setPassword(event?.target.value)
  }
  
  return (
    <div className=' p-72 flex space-x-16 justify-around'>

      <form className='w-[580px] p-2 shadow-xl'>

        <h1 className='text-2xl font-bold '>Welcome to itDream</h1>
        <p className='my-6'>By signing in, you agree to ITviec’s Terms & Conditions and Privacy Policy in relation to your privacy information.</p>
       
        <div>
          <button type='button' onClick={signInWithGoogle} className='mb-5 w-full border border-red-800 text-red-800 font-bold p-3'>Sign In with Google</button><br/>

          {error && (
            <div className='p-2 text-center text-white font-bold bg-red-600'>{error}</div>
          )}

          <label >Account</label><br/>
          <input type='email' value={email} onChange={chageEmail} className='mb-5 border border-gray-500 w-full p-2' placeholder='Email'></input>
         
          <div className='flex justify-between'>
            <label>Password</label>
            <Link className='text-blue-500' href="/#">Forgot password?</Link>
          </div>

          <input type='password' value={password} onChange={chagePass} className='mb-5 border border-gray-500 w-full p-2' placeholder='password'></input>
          
          <button onClick={signIn} type='button' className='w-full bg-red-900 text-white font-bold p-3'>
            <span>Sign In With account</span>
          </button>
        </div>

      </form>

      <div className=''>
        <h1 className='text-2xl font-bold mb-6'>Sign in to get instant access to thousands of reviews and salary information</h1>
        
        <ul className='space-y-5'>

          <li className={styleLi}>
            <FontAwesomeIcon icon={faCheck} style={{color: "#23c762",}} />
            <p>View salary to help you negotiate your offer or pay rise</p>
          </li>

          <li className={styleLi}>
            <FontAwesomeIcon icon={faCheck} style={{color: "#23c762",}} />
            <p>Find out about benefits, interview, company culture via reviews</p>
          </li>

          <li className={styleLi}>
            <FontAwesomeIcon icon={faCheck} style={{color: "#23c762",}} />
            <p>Easy apply with only 1 click</p>
          </li>
          
          <li className={styleLi}>
            <FontAwesomeIcon icon={faCheck} style={{color: "#23c762",}} />
            <p>Manage your own profile & privacy</p>
          </li>
        
        </ul>
      </div>
 
    </div>
  )
}
