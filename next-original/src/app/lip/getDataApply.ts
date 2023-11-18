import React from 'react'

export default async function getDataApply(key: string, idJob: string) {

   const res = await fetch('http//localhost:3000/api/applyManager',{
    next:{revalidate: 10},
    headers:{
        'API-idJob': idJob
    }
   })
   
   if(!res.ok) {
        console.log('error');
        return null
    }

  return res.json()
}
