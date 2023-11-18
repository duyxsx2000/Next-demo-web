import { NextResponse } from 'next/server'
import listjobsData from "../../../../data/dataJobs.json"
import dataDetailJobs from '../../../../data/dataDetailJobs.json'
import { DataAllJob, DataEmployers, LoginInfo, } from '@/app/lip/models/product'
import { getServerSession } from 'next-auth'
import { RandomID } from '@/app/lip/utils/ranomID'
import { data } from 'autoprefixer'
import { checkRole } from '@/app/lip/utils/checkRole'

const keyDetailJobs = process.env.API_KEY_DETAIL_JOBS 
const keyJobs = process.env.NEXT_PUBLIC_API_KEY_JOBS 
const keyGetAllJobs = process.env.API_KEY_GET_JOBS 
const keyGetJobsSearch = process.env.API_KEY_GET_JOB_SEARCH
const keyPostJob = 'postJobKeyAXS'

interface DataLogin {
  email: string,
  idUser: string,
  name: string,
  password: string,
  role: string
};

export async function POST(request: Request) { // create job
  
  const body = await request.json();
  const key = request.headers.get('API-Key') as string;

  const session = await getServerSession();
  const email = session?.user.email;
  if(!email) return NextResponse.json(null, {status: 200})
  const user = await checkRole(email)
  const role = user?.role;

  if(key === 'accept-job' && role === "admin"){ // accept job, only admin

    try {
      const idJob = body
      const datajob = await DataAllJob.findOne({idJob: idJob})
      if(!datajob) return NextResponse.json(null,{status:400})

      await DataAllJob.updateOne({idJob: idJob},{status:'done'});
      await DataAllJob.updateOne({idJob: idJob},{dateAccept: Date.now})
     
      return NextResponse.json({title:'done accept job', data:undefined}, {status:200})

    } catch (error) {
      return NextResponse.json(null,{status:400})
    }
  };

  if(key === keyPostJob && role === 'employers') { // post job, only employers
    
    const dataPost: TypeJob = body;
    const date =  Date.now();

    if(dataPost){

      const idJob = RandomID('j')
      await DataAllJob.create({
        status:'await',
        rank:'none',
        idJob:idJob,
        idEmployers:dataPost.idEmployers,
        datePost: date,
        dateAccept:  date,
        countApply: 0,
        countFeedBack:0,
        company:{
          companyName: dataPost.company.companyName,
          companyurl: dataPost.company.companyName,
          companyEmail: dataPost.company.companyEmail,
          companyPhoneNumber: dataPost.company.companyPhoneNumber,
          companyCity: dataPost.company.companyCity,
          companyAddress: dataPost.company.companyAddress,    
        },
        job:{
          jobTitle:dataPost.job.jobTitle,
          jobCity: dataPost.job.jobCity,
          jobAddress: dataPost.job.jobAddress,
          jobMethod: dataPost.job.jobMethod,
          jobRole: dataPost.job.jobRole,
          jobScecific: dataPost.job.jobRoleSpecific,
          jobWage: dataPost.job.jobWage,
          jobDeadline:{
              from: dataPost.job.jobDeadline.from,
              to:dataPost.job.jobDeadline.to
          },
          jobSkills:dataPost.job.jobSkills,
        } ,
        reasons:dataPost.reasons,
        description:dataPost.description,
        requirements:dataPost.requirements 
      });

      await DataEmployers.updateOne(
        {idEmployers: dataPost.idEmployers},
        {$push: { jobs: idJob}}
      )

      return NextResponse.json({title:'done-post-job', data: undefined},{
        status:200,
        statusText:'ok',
      });
      
    };

    return NextResponse.json(null,{
      status:400,
      statusText:'error',
      headers: {
          'Access-Control-Allow-Origin': origin || '*',
          'Content-Type': 'application/json', 
        },

    })
    
  }

  return NextResponse.json({ error: 'Internal Server Error0' }, { status: 500 });
           
};


export async function GET(request: Request) { // create an API that returns data jobs

  const key = request.headers.get('API-Key') as string;
  const reqPage = request.headers.get('API-page') as string;
  const reqPerPage = request.headers.get('API-perPage') as string;
  const type = request.headers.get('API-type') as string;
  const idJob = request.headers.get('API-ID-Jobs') as string
  const page = parseInt(reqPage,10);
  const perPage = parseInt(reqPerPage,10);
 

  if(key === keyGetAllJobs){ // return all jobs

    try {
      
      const dataJobs: TypeJob[] = await DataAllJob.aggregate([
        {$sort:{_id: -1}},
        {$match:{status: type}},
        {$skip: page},
        {$limit: perPage}
      ]);

      return NextResponse.json( {notification:'done get job', data: dataJobs}, { status: 200 });
    } catch (error) {
      return NextResponse.json(null, { status: 400 });
    }; 
  };
  
  if(key === keyGetJobsSearch){ // return job for key search
    const search = request.headers.get('API-SEARCH-Jobs') as string
    try {
      const dataAllJobs: TypeJob[] = await DataAllJob.find()
      const dataJobs: TypeJob[] = dataAllJobs.filter(iteam => 
        iteam.company.companyName.includes(search)
        || iteam.job.jobCity.includes(search)
        || iteam.job.jobTitle.includes(search)
        || iteam.job.jobSkills.includes(search)
      );

      if(dataJobs){
        return NextResponse.json( {notification:'done get job', data: dataJobs} , { status: 200 });
      };
      return NextResponse.json(null, { status: 400 });
      
    } catch (error) {
      return NextResponse.json( null, { status: 400 });
    }
  };

  if(key === "KEY-GET-Jobs-await"){ // retunr jobs , only status await
  
    try {
      const dataAllJobs: TypeJob[] = await DataAllJob.find();
      const job = dataAllJobs.find(item => item.idJob === idJob);
      const idEmloyers = job?.idEmployers;
      const jobs = dataAllJobs.filter( iteam => iteam.idEmployers === idEmloyers);
      
      if(job){
        const res: TypeJob[] = [job, ...jobs]
        return NextResponse.json({notification:'jobs-await', data:res},{status:200})
      };
      return NextResponse.json(null,{status:404})
           
    } catch (error) {
      return NextResponse.json(null,{status:400})
    }
  };

  if(key === 'KEY-GET-Jobs-employers' ){
   
    try {
      const resjob: TypeJob | null = await DataAllJob.findOne({idJob: idJob});
      if(!resjob) return NextResponse.json(null,{status:400});

      const resJobs: TypeJob[] = await DataAllJob.aggregate([
        {$sort: {id: -1}},
        {$match: {idEmployers: resjob.idEmployers}}
      ]);
      const filterJobs = resJobs.filter((job) => job.idJob != idJob)

      const jobs: TypeJob[] = [resjob, ...filterJobs]
      return NextResponse.json({notification: 'done get jobs', data: jobs })
      
    } catch (error) {
      return NextResponse.json(null,{status:400})
    } 
  }

  return NextResponse.json(null,{status:400})
}


