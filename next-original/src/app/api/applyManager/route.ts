import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'

import { DataAllJob, DataApply, DataEmployers, DataUser, LoginInfo } from '@/app/lip/models/product';
import { checkDate } from '@/app/lip/utils/checkDate';
import {checkRole} from './checkRole';

interface DataLogin {
  email: string,
  idUser: string,
  name: string,
  password: string,
  role: string
}


export default async function GET(request: Request) {
    
  const session = await getServerSession();
  const email = session?.user.email;
  const idJob = request.headers.get('API-idJob')
  
  if(!email) return NextResponse.json(null, {status: 200});
  const user = await checkRole(email);
  const role = user?.role;
  if(!role || role != 'employers') return NextResponse.json(null)
  
  try {
    const res = await DataApply.find({idJob: idJob})
    return NextResponse.json(
      {
        notification:'done get data', 
        data: res
      },
      {
        status: 200
      }
    )
  } catch (error) {
    return NextResponse.json(null)
    
  }


}
