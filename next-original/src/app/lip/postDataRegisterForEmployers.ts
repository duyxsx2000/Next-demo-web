import React from 'react'

export default async function postRegisterForEmployers(dataPost: any, key: any) {

    const res = await fetch('http://localhost:3000/api/employers',{
        next: { revalidate: 60},
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'API-Key': key
        },
        body: JSON.stringify(dataPost)
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      console.log('123');
      
    }
 

  

    return res.json()
   
    
}
