
import { NextResponse, } from 'next/server'
import mongoose from 'mongoose';
import { connectionSrt } from '@/app/lip/db';
import {DataAllJob, DataDetailJobs, DataEmployers, LoginInfo} from "@/app/lip/models/product"
import { getServerSession } from 'next-auth';
export  async function GET( req : Request) {
  console.log('5555ádad5555');
  const session = await getServerSession();

  if(!session) return NextResponse.json(null,{status: 400});
  const user = await LoginInfo.findOne({email: session.user.email}, 'role').exec();
  const role = user.role;
  console.log(role);
  
   // API Test

  // await DataEmployers.deleteMany({status: 'done'})
   
  // await DataAllJob.deleteMany()
  
 
  return NextResponse.json({oke:'123456789'})
}