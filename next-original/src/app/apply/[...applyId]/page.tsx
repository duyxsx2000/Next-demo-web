'use client'

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation'

const styleH2 = "text-xl font-bold"

export default function ApplyIdPage({ params }: { params: {applyId: string[]} }) {

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect(`/auth/signIn/signInForUser?callbackUrl=/apply/${params.applyId}`)  
    }
  });
 
  if (!session?.user) return null;
  
  return (
    <div className='flex justify-center h-[100vh] pt-40 index z-50 bg-[rgba(194,195,196,0.14)] '>
          
      <div className='bg-white p-5 w-1/2 h-[500px] rounded-xl'>
        <h2 className={styleH2}>job</h2>
        <input  type='text' placeholder='your name' className='my-5 p-3 rounded-xl w-full border border-gray-400'></input>
        <h2 className={styleH2}>Your CV</h2 >

        <div className='mb-5 h-[50px] bg-pink-500 rounded-xl'>
            upload new CV
        </div>
        
        <h2 className={styleH2}>Cover Letter</h2>
        <label className='mt-5'>what skills, word projects or achievememts make you a strong candidate</label><br/>
        
        <textarea className='w-full border rounded-xl border-gray-600'></textarea>
        <button className=' mt-5 w-full rounded-xl p-3 bg-red-800 text-white font-bold'>send my cv</button>
      </div>
      
    </div>
  )
}
