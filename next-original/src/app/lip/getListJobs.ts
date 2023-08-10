import { data } from 'autoprefixer'
import React from 'react'

export default async function getListJobs() {
 
    const res = await fetch('http://localhost:3000/api/job',{ next: { revalidate: 60} })

   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    
     
      return res.json()
}
    
   

