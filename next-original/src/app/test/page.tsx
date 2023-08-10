import React from 'react'

export default async function page() {


    const res = await fetch('http://localhost:3000/api/users')
    const data1 = await res.json()
    console.log(data1);

  return (
    <div>
      
    </div>
  )
}
