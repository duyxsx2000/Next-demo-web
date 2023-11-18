
// import React, { useEffect, useState } from 'react'
import getDataHome from '../../lip/getDataHome'
import Footer from '../../component/footer'
import getListJobs from '@/app/lip/getListJobs'
import OopsData from '../component/oopsData'
import HeaderJobId from '../component/headerJobId'
import TitleJobs from '../component/titleJobs'
import ContentJobs from '../component/contentJobs'

const key = process.env.API_KEY_DETAIL_JOBS 
const keyGetAllJobs = process.env.API_KEY_GET_JOBS 
const keyGetJobsSearch = process.env.API_KEY_GET_JOB_SEARCH

type DataJobs = {
    notification: string,
    data: TypeJob[]
};

export default async function Page({params}: {params: {jobsId: string[]} } ) {

    const key = 'KEY-GET-Jobs-await'
    const idJob = params.jobsId[1]
    console.log(idJob);
    
    const dataHome : DataHome = await  getDataHome()
    const home = await dataHome
    const keySearchJob = params.jobsId[0]
    const data = null

    if(keySearchJob === 'get-job-employers'){

        const idJobParams = params.jobsId[1]       
        const idJob = idJobParams.substring(0,1)+ '@' + idJobParams.substring(4) 
        const key = 'KEY-GET-Jobs-employers';

        try {
            const res : Promise<DataJobs>  = await getListJobs(
                key,
                idJob,
                'none',
                "0",
                "10",
                "await"
            )
            const dataJobs = await res

            return (
                <main className='pt-px95 h-[601px] bg-F7F7F7  '>
        
                    <HeaderJobId dataSearch={home.dataSearch}/>
                    <TitleJobs nameJobs={'dfgdgdffd'}/>
                    <ContentJobs title='await' jobs={dataJobs.data}/>
                    <Footer/>
                
                </main>
            )
        
            
        } catch (error) {
            console.log(error,'error');
        }        
    };

    if(keySearchJob === "get-Jobs-await"){

        const idJobParams = params.jobsId[1]       
        const idJob = idJobParams.substring(0,1)+ '@' + idJobParams.substring(4) 
        const key = 'KEY-GET-Jobs-await'

        try {
            const res : Promise<DataJobs>  = await getListJobs(
                key,
                idJob,
                'none',
                "0",
                "10",
                "await"
            )
            const dataJobs = await res

            return (
                <main className='pt-px95 h-[601px] bg-F7F7F7  '>
        
                    <HeaderJobId dataSearch={home.dataSearch}/>
                    <TitleJobs nameJobs={'dfgdgdffd'}/>
                    <ContentJobs title='await' jobs={dataJobs.data}/>
                    <Footer/>
                
                </main>
            )
        
            
        } catch (error) {
            console.log(error,'error');
        }        
    };

    if(keySearchJob === "get-Jobs-search"){
        const search = params.jobsId[1]
        try {
            const res : TypeJob[] | null = await getListJobs(keyGetJobsSearch, 'none', search,"","","")
         
        } catch (error) {
            console.log(error,'error');
        
        }
    };
         
    if(!data ){

        return(
            <main className='pt-px95 h-[601px] bg-F7F7F7  '>
                <HeaderJobId dataSearch={home.dataSearch}></HeaderJobId>
                <OopsData></OopsData>
                <Footer></Footer>             
           </main>
        )
    };

    
    return (
        <main className='pt-px95 h-[601px] bg-F7F7F7  '>

            <HeaderJobId dataSearch={home.dataSearch}/>
            <TitleJobs nameJobs={'dfgdgdffd'}/>
            <ContentJobs title='all' jobs={data}/>
            <Footer/>
       
        </main>
    )
}
