
import React from 'react'
import { useSession } from "next-auth/react"
import { redirect } from 'next/navigation'
import Link from 'next/link'
export default function ForEmployerspage() {


  return (
    <div className='pt-px95'>
      <div className='mt-[95px] space-y-4'>
        <div>
          <Link href='/forEmployers/postJob'> post jobs</Link>
        </div>
        <div>
          <Link href='/forEmployers/dashboard'> dashboard</Link>
        </div>
        
        
      </div>
    </div>
  )
}
