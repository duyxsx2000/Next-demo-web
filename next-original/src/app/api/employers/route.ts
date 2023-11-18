import { DataEmployers, DataUser, LoginInfo  } from '@/app/lip/models/product';
import { RandomID } from '@/app/lip/utils/ranomID';
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth';
import { checkRole } from '@/app/lip/utils/checkRole';

const keyGetDataEmployers = process.env.API_KEY_GET_EMPLOYERS
interface DataLogin {
    email: string,
    idUser: string,
    name: string,
    password: string,
    role: string
  }
export async function POST(request: Request) { //Create API to provide data, and receive login and registration data of employers
    
    // check role for session
    const session = await getServerSession();
    const email = session?.user.email;
    if(!email) return NextResponse.json(null, {status: 200})
    const user = await checkRole(email)

    const randomId = RandomID('E')
    const body = await request.json()
    const key = request.headers.get('API-Key') as string
    const date = Date.now();

    if(key === 'register for employers'){ // Get new employer registration data
        try {
            const dataPost: DataPost = body;
            if(!dataPost)return NextResponse.json({error:'no data'},{status:500})  ; 

            const dataOverlap = await DataEmployers.findOne({workEmail: dataPost.workEmail });
            if(dataOverlap) return NextResponse.json({error:'overlap Data'},{status: 500});
            // Create a registration form if eligible
            await DataEmployers.create({ 
                idEmployers:randomId,
                status:'await',
                role:'await',
                fullName:dataPost.fullName,
                title:dataPost.title ,
                workEmail: dataPost.workEmail,
                phone: dataPost.phone,
                companyLocation: dataPost.companyLocation,
                companyName: dataPost.companyName,
                websiteUrl: dataPost.websiteUrl,
                dateRegister: date,
                dateAccept: date
            })
            
            return NextResponse.json({title:'done'},{status: 200})
        } catch (error) {
            
            return NextResponse.json({error:'err'},{status: 500})
        };
       
    };
     

    // Create an account for employers, admin only

    if(key === 'signUp-employers'){
        
        if(user?.role != "admin") return NextResponse.json({error:'no data'},{status:400})
        
        type DataPostELY = {
            idEmployers: string,
            email: string,
            name: string,
            password: string,
            role: string,
            
        }

        const dataPost: DataPostELY = body;
        const dataUser = await DataUser.findOne({email: dataPost.email});
        const dataLogin = await LoginInfo.findOne({email: dataPost.email});
        const dataEmployers = await DataEmployers.findOne({workEmail: dataPost.email});
           
        if(!dataLogin && !dataUser && dataEmployers) {
          
            try {
                await LoginInfo.create({
                  idUser:dataPost.idEmployers,
                  name: dataPost.name,
                  email: dataPost.email,
                  password: dataPost.password,
                  date: date,
                  status: 'done',
                  role:'employers'
                });
                
                await DataEmployers.updateOne(
                    {idEmployers: dataPost.idEmployers},
                    {role:'employers'}
                );

                await DataEmployers.updateOne(
                    {idEmployers: dataPost.idEmployers},
                    {status:'done',}
                );
                
                await DataEmployers.updateOne(
                    {idEmployers: dataPost.idEmployers},
                    {dateAccept: date}
                );  

                return NextResponse.json('done',{status:200})

            } catch (error) {            
                return NextResponse.json('error',{status:400})  
            }
        };

        return NextResponse.json('error',{status:400}) 
    };
};

export async function GET(request: Request) {

    const key = request.headers.get('API-Key') as string
    const session = await getServerSession()
    const email = session?.user.email
    const dataLogin: DataLogin | null = await LoginInfo.findOne({email: email});
    
    if(!dataLogin) return NextResponse.json({error:'no data'},{status:400})

    const role = dataLogin.role

    if(key === keyGetDataEmployers){

        if(!role || role != 'admin') return NextResponse.json({error:'no data'},{status:400})

        const reqPage = request.headers.get('API-page') as string
        const reqPerPage = request.headers.get('API-perPage') as string
        const type = request.headers.get('API-type') as string
        const page = parseInt(reqPage,10)
        const perPage = parseInt(reqPerPage,10)

        try {
   
            const dataEmployers: TypeEmployers[] = await DataEmployers.aggregate([

                {$sort:{_id: -1}},
                {$match:{status: type}},
                {$skip: page},
                {$limit: perPage}
            ])      

            return NextResponse.json( dataEmployers, {status: 200});
            
        } catch (error) {
            return NextResponse.json(null, {status: 400})     
        }
    }

    return NextResponse.json(null, {status:400})
    
}