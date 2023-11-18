import React from 'react'

export default async function getDataDashbord(key: string) {
  const res = await fetch('http://localhost:3000/api/dashboard',{
    next:{revalidate: 10},
    headers:{
      'API-key': key
    }
  });

  if(!res.ok){
    return null
  };

  return res.json()

}

