
import React from 'react'
import getDataHome from '../../lip/getDataHome'
import Footer from '../../component/footer'
import getListJobs from '@/app/lip/getListJobs'
import OopsData from '../component/oopsData'
import HeaderJobId from '../component/headerJobId'
import TitleJobs from '../component/titleJobs'
import ContentJobs from '../component/contentJobs'

const key = process.env.API_KEY_DETAIL_JOBS 

export default async function Page({params}: {params: {jobsId: string} } ) {
    
    const keySearchJob = params.jobsId
    const [dataDetailJob, dataHome]: [DetailJob[] | null , DataHome] = await Promise.all([getListJobs(keySearchJob, key ), getDataHome()]) 
    const home = await dataHome
       
    if(!dataDetailJob ){

        return(
            <main className='pt-px95 h-[601px] bg-F7F7F7  '>
                <HeaderJobId dataSearch={home.dataSearch}></HeaderJobId>
                <OopsData></OopsData>
                <Footer></Footer>             
           </main>
        )
    };

    const detailJobs = await dataDetailJob
    return (
        <main className='pt-px95 h-[601px] bg-F7F7F7  '>

            <HeaderJobId dataSearch={home.dataSearch}/>
            <TitleJobs nameJobs={keySearchJob}/>
            <ContentJobs detailJobs={detailJobs}/>
            <Footer/>
       
        </main>
    )
}
