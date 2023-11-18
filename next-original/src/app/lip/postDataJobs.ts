import { data } from 'autoprefixer'
import React from 'react'
import { json } from 'stream/consumers';

export default async function postDataJobs(key: string, data: TypeJob | string) {
 console.log(key,'77777');
 
  
  const res = await fetch('http://localhost:3000/api/job',{
    next:{revalidate: 10},
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'API-Key': key,
    },
    body: JSON.stringify(data)

    
    
    
  });
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log('errrrrr');
    
    return null
  }
    
  
  return res.json()
}
    
   

