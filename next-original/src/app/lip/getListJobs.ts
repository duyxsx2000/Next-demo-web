import { data } from 'autoprefixer'
import React from 'react'

export default async function getDataJobs(
  key: any, 
  idJob: string, 
  search: string ,
  page: string ,
  perPage: string ,
  type: string 
  ) {
  console.log(key,'77777');

  const res = await fetch('http://localhost:3000/api/job',{
    next:{revalidate: 10},
    method: 'GET',
    headers: {
    'Content-Type': 'application/json',
    'API-Key': key,
    'API-ID-Jobs': idJob,
    'API-SEARCH-Jobs':search,
    'API-page': page,
    'API-perPage':perPage,
    'API-type': type
    },
  
  });
  
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log('errrrrr');
    
    return null
  }
    
  
  return res.json()
}
    
   

