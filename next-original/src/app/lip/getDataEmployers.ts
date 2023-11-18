import React from 'react'

export default async function getDataEmployers(
    key: string, 
    page: string,
    perPage: string,
    type: string
) {

    const res = await fetch('http://localhost:3000/api/employers',{
        next:{revalidate: 1},
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'API-Key': key,
            'API-page': page,
            'API-perPage':perPage,
            'API-type': type
        }
    })
    
    if(!res.ok){

        console.log('error');
        
        return null
    }


  return res.json()

  
}
