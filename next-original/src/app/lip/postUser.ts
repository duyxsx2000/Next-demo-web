import { data } from 'autoprefixer'
import React from 'react'

export default async function postUser(dataPost: any, key: any) {
 console.log(key,'77777');
 
  
    const res = await fetch('http://localhost:3000/api/user',{
       next: { revalidate: 60},
       method: 'POST',
       headers: {
        'Content-Type': 'application/json',
        'API-Key': key
       },
       body: JSON.stringify(dataPost),
       
      })
      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        console.log('errrrrr');
        
        return null
      }
    
     
      return res.json()
}
    
   

