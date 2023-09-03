import React from 'react'
import SearchAllJobs from './search-bar'
const key = process.env.NEXT_PUBLIC_API_KEY_JOBS 
export default function page() {
  
  
  return (
    <div>
      <SearchAllJobs ></SearchAllJobs>
    </div>
  )
}
