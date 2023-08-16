import React from 'react'
import Search from '../component/searchComponent'
import getDataHome from '../lip/getDataHome'
import Slideshow from '../component/slideShow/slide'
import Footer from '../component/footer'
import ListJobs from './component/listJobs'
import Job from './component/job'

export default async function jobsPage() {
    
    const dataHome: Promise<DataHome> = await getDataHome()
    const data = await dataHome

    const data1 = [
        {
            timePost:1692062066253,
            company:{
                name:"Viettel",
                logo:"https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN09SR3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--8116cf4b23cb755b3b556d410e98ed210b2f68c4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/logo%20Viettel.JPG"
            },
            job: {
                title:"05 Jr/Mid Java Developer(Spring/SQL)",
                address:"Hà Nội - Hồ Chí Minh",
                method:" At office",
                skills:["Java", "Node", "Sql"],
                wage:2000
            },
            reasons:[
                "Làm việc với các công nghệ mới nhất",
                "Lĩnh vực chứng khoán, tài chính hấp dẫn",
                "Liên tục được đào tạo chuyên môn, kĩ năng"
    
            ]
        },
        {
            timePost:1692062066253,
            company:{
                name:"Viettel",
                logo:"https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN09SR3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--8116cf4b23cb755b3b556d410e98ed210b2f68c4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/logo%20Viettel.JPG"
            },
            job: {
                title:"05 Jr/Mid Java Developer(Spring/SQL)",
                address:"Hà Nội - Hồ Chí Minh",
                method:" At office",
                skills:["Java", "Node", "Sql"],
                wage:2000
            },
            reasons:[
                "Làm việc với các công nghệ mới nhất",
                "Lĩnh vực chứng khoán, tài chính hấp dẫn",
                "Liên tục được đào tạo chuyên môn, kĩ năng"
    
            ]
        },
        {
            timePost:1692062066253,
            company:{
                name:"Viettel",
                logo:"https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN09SR3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--8116cf4b23cb755b3b556d410e98ed210b2f68c4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/logo%20Viettel.JPG"
            },
            job: {
                title:"05 Jr/Mid Java Developer(Spring/SQL)",
                address:"Hà Nội - Hồ Chí Minh",
                method:" At office",
                skills:["Java", "Node", "Sql"],
                wage:2000
            },
            reasons:[
                "Làm việc với các công nghệ mới nhất",
                "Lĩnh vực chứng khoán, tài chính hấp dẫn",
                "Liên tục được đào tạo chuyên môn, kĩ năng"
    
            ]
        }
    ]
  
    return (
        <main className='pt-px95 h-[601px] bg-F7F7F7  '>

            <div className=' relative '>

                <Search dataSearch={data.dataSearch}></Search>
                <div className='absolute top-3/4  left-1/2 -translate-x-1/2  bg-white  w-3/4 h-48 rounded-lg'>
                    <Slideshow></Slideshow>
                </div>

            </div>
            <div className='flex justify-center mt-[150px]'>
                <div className='flex justify-between w-3/4'>
                    <h1 className=' font-bold text-2xl'> 100 <span className='text-red-900'>React developer</span>  job in Việt Nam</h1>
                    <button className='border border-red-900 w-32'>Filter</button>
                </div>
            </div>

            <div className='flex justify-center bg-[rgba(194,195,196,0.14)]'>
                <div className=' mt-[10px] flex   w-3/4 space-x-5  '>
                    {/* <div className='  w-1/2 top-[95px]  '>
  
                       
                        
                    </div> */}
                    <ListJobs></ListJobs>
                    <div className=' top-[95px] sticky left-1/2 w-3/5 h-[1000px]'>
                        <Job></Job>
                    </div>
                </div>
            </div>

            <Footer></Footer>
            
        
        </main>
  )
}
