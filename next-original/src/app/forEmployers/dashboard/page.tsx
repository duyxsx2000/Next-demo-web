
import React from 'react'
import MainPage from './main'
import getDataDashbord from '@/app/lip/getDataDashbord'

type IdJob = {
  status: string,
  idJob: string,
  dateAccept: Date,
  job:{ jobTitle: string},
  countApply: number,
  countFeedBack:number
}



export default async function pageb() {

  return (
    <>
      <h1>dsfffffffffffffffffffff</h1>
      <MainPage />
      <h1>dsfffffffffffffffffffff</h1> 
    </>
  )
}
