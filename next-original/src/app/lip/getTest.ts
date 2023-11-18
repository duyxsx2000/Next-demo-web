import React from 'react'

export default async function getTest() {
  console.log('yyyy');
    const res = await fetch('http://localhost:3000/api/test', { next: { revalidate: 10} });

 
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      console.log('123');
      
    }
 

  

    return null
   
    
}
