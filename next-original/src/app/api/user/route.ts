import { DataUser, LoginInfo } from '@/app/lip/models/product';
import { RandomID } from '@/app/lip/utils/ranomID';
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json();
  const key = request.headers.get('API-Key') as string

  try {
    const dataUser = await DataUser.findOne({email: body.email});
    const dataLogin = await LoginInfo.findOne({email: body.email});
  
    if(!dataUser && ! dataLogin && key === 'signUp'){
      const dandomIdUsser = RandomID('U')    
      await DataUser.create({
        idUser:dandomIdUsser,
        email: body?.email,
        userCard: {
            fullName: body?.name,
            title:'',
            dateOfBirth: '',
            gender: '',
            numberPhone: body.phone,
            email: body?.email,
            accommodation: '',
            address: ''
        },
        abountUser: '',
        WorkExperienceUser:{
            jobTitle: '',
            company: '',
            dateForm:{
                moth: '',
                year: '',
            },
            dateTo:{
                moth: '',
                year: '',
            },
            description: ''
        },
        skills: [''],
        education:{
            major: '',
            school: '',
            dateForm:{
                moth: '',
                year: '',
            },
            dateTo:{
                moth: '',
                year: '',
            },
            description: ''
        },
        Certificates:{
            certificatesName: '',
            organization: '',
            dateForm:{
                moth: '',
                year: '',
            },
            dateTo:{
                moth: '',
                year: '',
            },
            description: ''  
        },
        awardsAndHonors:{
            awardsAndHonorsName: '',
            organization: '',
            dateForm:{
                moth: '',
                year: '',
            },
            
            description: ''  
        },
        personalProject:{
            projectName: '',
            dateForm:{
                moth: '',
                year: '',
            },
            dateTo:{
                moth: '',
                year: '',
            },        
            description: '',
            projectURL: ''
        }
      });
      
      await LoginInfo.create({
        idUser:dandomIdUsser,
        name: body.name,
        email: body.email,
        password: body.password,
        date: Date.now(),
        status:'done',
        role:'user'
      });
  
      return NextResponse.json({title: 'done'},{ status:200,})
    };

    return NextResponse.json(null,{status:400,})
    
  } catch (error) {

    return NextResponse.json(null,{status:400,})
    
  };


};

export async function GET(request: Request) {
  const key = request.headers.get('API-Key') as string;

  if(key === 'get-id-users'){
    try {
      const dataAllUser: ProfileUser[] = await DataUser.find()     
      const dataUsers =  dataAllUser.map(
        function(user) {     
          return {
            idUser: user.idUser, 
            email: user.email,
            name: user.userCard.fullName,
            numberPhone: user.userCard.numberPhone,
            
          }
        }
      );

      return NextResponse.json({title:'id users', data: dataUsers},{status: 200})
      
    } catch (error) {
      return NextResponse.json(null,{status: 400})
      
    }


  }
  return NextResponse.json({
    name: 'duy cute',
    id: 'ath678',
    image:'',
    email:'dkduy@gmail.com',
    role:'user'
  })
}

type DataUser = {
  name: string,
  id: number,
  image: string,
  email: string,
  role: string
}