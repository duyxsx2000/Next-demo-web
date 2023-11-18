'use client'
import React, { useState } from 'react'
import { QuestionCircleFilled,QuestionCircleOutlined } from '@ant-design/icons'
import getDataDashbord from '@/app/lip/getDataDashbord'
import getTest from '@/app/lip/getTest'
type Params = {
  dataPrams: CountData
}
const style = {
  td: 'border border-slate-300 p-2 flex items-center justify-between'
}
export default function StatisticalTables({dataPrams}: Params) {

  const [navbar, setNavbar] = useState('today')
  const [countShown, setCountShown] = useState<ClusterCount>(dataPrams.today);
  
  console.log(dataPrams);
  

  //handle action logic

  const handletest = async () =>{
    const res = await getTest()
    console.log(res); 
  };

  const handleClick = (key: string, data : ClusterCount) => {
    const newNavbar = key
    setCountShown(data)
    setNavbar(newNavbar);
    console.log(data);
    
    
  };

  const content = (array: string[]) => {
    
    return(
      <tr >
        <td className='border border-slate-300 p-2 font-bold'>{array[0]}</td>
        <td >
          <div className={style.td}>
            {array[1]} <QuestionCircleOutlined className='text-blue-800'/>
          </div>
        </td>
        <td >
          <div className={style.td}>
            {array[2]}<QuestionCircleOutlined className='text-blue-800'/>
          </div>
        </td>                
        <td >
          <div className={style.td}>
            {array[3]}<QuestionCircleOutlined className='text-blue-800'/>
          </div>
        </td>
      </tr>
    )

  }
  return (
    <div className='pt-2 px-6 min-h-[450px]'>
      <div className='flex justify-center'>
        <div className='flex w-4/6 mt-2 border mb-4 rounded-lg border-gray-300 '>

          <div 
            onClick={() => handleClick('today', dataPrams.today)}
            className={`w-1/2 text-center p2 font-bold  ${navbar === 'today' ? 'rounded-l-lg text-white bg-red-900' : ''}`}
          >
            Today
          </div>

          <div 
            onClick={() => {handleClick('in month', dataPrams.thisMonth)}} 
            className={`w-1/2 text-center p2 font-bold  ${navbar === 'in month' ? ' text-white bg-red-900' : ''}`}
          >
            In Month
          </div>

          <div 
            onClick={() => handleClick('all', dataPrams.all)} 
            className={`w-1/2 text-center p2 font-bold  ${navbar === 'all' ? 'rounded-r-lg text-white bg-red-900' : ''}`}
          >
            All
          </div> 

        </div>
      </div>

     <table className="custom-table w-full border-collapse rounded-lg border border-slate-400">
        <thead> 
          <tr className='bg-blue-700'>
            <th className='w-[25%] border border-slate-300'>parameter</th>
            <th className='w-[25%] border border-slate-300'>Jobs</th>
            <th className='w-[25%] border border-slate-300'>Employers</th>
            <th className='w-[25%] border border-slate-300'>User</th>
          </tr>
        </thead>
        <tbody> 
          {content([
            'Quantify All',
            countShown.quantify.jobs.toString(),
            countShown.quantify.employers.toString(),
            countShown.quantify.users.toString()
          ])}

          {content([
            'Awaiting',
            countShown.await.jobs.toString(),
            countShown.await.employers.toString(),
            countShown.await.users.toString()
          ])}

          {content([
            'Error',
            countShown.error.jobs.toString(),
            countShown.error.employers.toString(),
            countShown.error.users.toString()
          ])}

          {content([
            'ban',
            countShown.ban.jobs.toString(),
            countShown.ban.employers.toString(),
            countShown.ban.users.toString()
          ])}

        </tbody>
      </table>

      <table className="custom-table w-1/2 mt-8 border-collapse border border-slate-400">
        <thead> 
          <tr className='bg-red-700 text-white'>
            <th className='w-[25%] border border-slate-300'>Access times</th>
            <th className='w-[25%] border border-slate-300'>Apply times</th>

          </tr>
        </thead>
        <tbody>
          <tr >
            <td >
                <div className={style.td}>
                    15 <QuestionCircleOutlined className='text-blue-800'/>
                </div>
            </td>
            <td >
                <div className={style.td}>
                    48<QuestionCircleOutlined className='text-blue-800'/>
                </div>
            </td>            
          </tr>
        </tbody>
      </table>
    </div>
  )
}
