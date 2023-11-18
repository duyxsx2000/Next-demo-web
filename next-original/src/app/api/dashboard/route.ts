// import { NextResponse } from 'next/server'
// import { getServerSession } from 'next-auth'

// import { DataAllJob, DataApply, DataEmployers, DataUser, LoginInfo } from '@/app/lip/models/product';
// import { checkDate } from '@/app/lip/utils/checkDate';

// interface DataLogin {
//   email: string,
//   idUser: string,
//   name: string,
//   password: string,
//   role: string
// }

// type ResNumber = {
//   jobs: number | null,
//   employers: number | null,
//   users: number | null
// }
// type IdJob = {
//   status: string,
//   idJob: string,
//   dateAccept: Date,
//   job:{ jobTitle: string},
//   countApply: number,
//   countFeedBack:number
// }
// export async function GET(request: Request) {

//   const session = await getServerSession();
//   const email = session?.user.email;
//   const key = request.headers.get("API-key") as string
 
//   if(!email) return NextResponse.json(null, {status: 200})

//   const checkRole = async (email: string) => {
//     try {
//       const dataLogin: DataLogin | null = await LoginInfo.findOne({email: email});
//       if(!dataLogin) return null;
//       return {
//         role: dataLogin.role,
//         idUser: dataLogin.idUser
//       }   

//     } catch (error) {
//       return null
//     }
//   };

//   //role admin

//   if(key === 'admin'){
//     const user = await checkRole(email);
//     if(user?.role != 'admin') {
//       return NextResponse.json(null, {status: 200});
//     };
    
//     try {
//       const resJobs: TypeJob[]  = await DataAllJob.find();
//       const resUsers = await LoginInfo.find({role: 'user'});
//       const resEmployers: TypeEmployers[] = await DataEmployers.find();
      
//       const dateAll = {
//         jobs: resJobs.map(item => item.datePost),
//         employers: resEmployers.map(item => item.dateRegister),
//         users: resUsers.map(item => item.date)
//       };
  
//       type TypeDate = {
//         jobs: (Date | undefined)[],
//         employers: (Date | undefined)[],
//         users: (Date | undefined)[]
//       }
    
//       const dateAwait: TypeDate = {
//         jobs: resJobs.map((job) => {
//           if(job.status === 'await' && job.datePost)
//           return job.datePost 
//         }),
//         employers: resEmployers.map((employers) => {
//           if(employers.status === 'await')
//           return employers.dateRegister 
//         }),
//         users: resUsers.map((user) => {
//           if(user.status === 'await')
//           return user.dateRegister 
//         }),
//       };
  
//       const dateBan: TypeDate = {
//         jobs: resJobs.map((job) => {
//           if(job.status === 'ban')
//           return job.datePost 
//         }),
//         employers: resEmployers.map((employers) => {
//           if(employers.status === 'ban')
//           return employers.dateRegister 
//         }),
//         users: resUsers.map((user) => {
//           if(user.status === 'ban')
//           return user.dateRegister 
//         }),
//       };
  
//       const dateError: TypeDate = {
//         jobs: resJobs.map((job) => {
//           if(job.status === 'error')
//           return job.datePost 
//         }),
//         employers: resEmployers.map((employers) => {
//           if(employers.status === 'error')
//           return employers.dateRegister 
//         }),
//         users: resUsers.map((user) => {
//           if(user.status === 'error')
//           return user.dateRegister 
//         }),
//       };
 
//       const quantifyAll: ResNumber = {
//         jobs: resJobs.length,
//         employers: resEmployers.length,
//         users: resUsers.length
//       };
  
//       const awaitAll: ResNumber = {
//         jobs: resJobs.filter(job => job.status === 'await').length,
//         employers: resJobs.filter(job => job.status === 'await').length,
//         users: 0
//       };
  
//       const errorAll: ResNumber = {
//         jobs: resJobs.filter(job => job.status === 'error').length,
//         employers: resJobs.filter(job => job.status === 'error').length,
//         users: 0
//       };
  
//       const banAll: ResNumber = {
//         jobs: resJobs.filter(job => job.status === 'ban').length,
//         employers: resJobs.filter(job => job.status === 'ban').length,
//         users: 0
//       };
  
//       const quantifyToday: ResNumber = {
//         jobs: checkDate(dateAll.jobs, 'day'),
//         employers: checkDate(dateAll.employers, 'day'),
//         users: checkDate(dateAll.users, 'day')
//       };
      
//       const awaitToday: ResNumber = {
//         jobs: checkDate(dateAwait.jobs, 'day'),
//         employers: checkDate(dateAwait.employers, 'day'),
//         users: checkDate(dateAwait.users, 'day')
//       };
  
//       const banToday: ResNumber = {
//         jobs: checkDate(dateBan.jobs, 'day'),
//         employers: checkDate(dateBan.employers, 'day'),
//         users: checkDate(dateBan.users, 'day')
//       };
  
//       const errorToday: ResNumber = {
//         jobs: checkDate(dateError.jobs, 'day'),
//         employers: checkDate(dateError.employers, 'day'),
//         users: checkDate(dateError.users, 'day')
//       };
  
//       const quantifyThisMonth: ResNumber = {
//         jobs: checkDate(dateAwait.jobs, 'month'),
//         employers: checkDate(dateAll.employers, 'month'),
//         users: checkDate(dateAll.users, 'month')
//       };
  
//       const awaitThisMonth: ResNumber = {
//         jobs: checkDate(dateAwait.jobs, 'month'),
//         employers: checkDate(dateAwait.employers, 'month'),
//         users: checkDate(dateAwait.users, 'month')
//       };
  
//       const banThisMonth: ResNumber = {
//         jobs: checkDate(dateBan.jobs, 'month'),
//         employers: checkDate(dateBan.employers, 'month'),
//         users: checkDate(dateBan.users, 'month')
//       };
  
//       const errorThisMonth: ResNumber = {
//         jobs: checkDate(dateError.jobs, 'month'),
//         employers: checkDate(dateError.employers, 'month'),
//         users: checkDate(dateError.users, 'month')
//       };
  
//       return NextResponse.json(
//         {
//           title:'res quantify data',
//           data: {
//             all: {
//               quantify: quantifyAll,
//               await: awaitAll,
//               error: errorAll,
//               ban: banAll
//             },
//             today: {
//               quantify: quantifyToday,
//               await: awaitToday,
//               error: errorToday,
//               ban: banToday
//             },
  
//             thisMonth: {
//               quantify: quantifyThisMonth,
//               await: awaitThisMonth,
//               error: errorThisMonth,
//               ban: banThisMonth
//             }
//           }
//         },
//         {status: 200}
//       );

//     } catch (error) {
//       return NextResponse.json(null, {status: 200});  
//     }
//   };

//   // role employers

//   if(key === 'employers') {
 
//     const user = await checkRole(email);
//     if(user?.role != 'employers') {
//       return NextResponse.json(null, {status: 200});
//     };

//     try {
//       const res: IdJob[] = await DataAllJob.aggregate([
//         {$match:{
//           idEmployers: user.idUser
//         }},
//         {$project:{
//           _id: 0,
//           idJob: 1,
//           dateAccept: 1,
//           job:{jobTitle: 1},
//           status: 1,
//           countApply: 1,
//           countFeedBack:1
//         }}
//       ]);

//       return NextResponse.json({notification: 'done', data: res},{status:200})
      
//     } catch (error) {
//       return NextResponse.json({notification: 'error', data: null},{status:400})
//     }
    
//   };

//   return NextResponse.json({notification: 'error', data: null},{status:400})
     
// }
