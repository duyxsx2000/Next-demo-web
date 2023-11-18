'use client'
import React, { useEffect, useState } from 'react'
import {
    CopyOutlined,
    GoogleOutlined,
    FacebookOutlined,
    PhoneOutlined,
    IeOutlined,
    GooglePlusOutlined ,
    DownCircleOutlined ,
    QuestionCircleOutlined,
    RightOutlined,
    LeftOutlined
} from '@ant-design/icons'
import postRegisterForEmployers from '@/app/lip/postDataRegisterForEmployers'
import { useAppDispatch } from '@/app/redux/services/hook'
import { log } from 'console'
import getDataEmployers from '@/app/lip/getDataEmployers'


type Params = {
    dataEmployers: TypeEmployers[],
};

const keyGetEmployers = 'Get-Data-Employers';
const keyGetAllJobs = 'Get-Data-All-Jobs';

export default function EmployersPage({dataEmployers}: Params) {
    
    const [oppenModal, setOppenModal] = useState(false);
    const [dataModal, setDataModal] = useState<TypeEmployers | null>(null);
    const [data, setData] = useState<TypeEmployers[] | undefined>(dataEmployers);
    const [employes, setEmployers] = useState<TypeEmployers  | null> (null);
    const [status, setStatus] = useState(false);
    const [statusNav, setStatusNav] = useState('await');
    const [dataJobs, setDataJobs] = useState<TypeJob[] | null > (null);
    const [idEmployers, setIdEmployers] = useState('');
    const [page, setPage] = useState(0);
    const [dataForm, setDataForm] = useState({
        idEmployers:'',
        email:'',
        name:'',
        password:'',
        role:'employers'
    });
    
    // handle action logic

    const handleClickButton = async () => {

        try {
            const res = await postRegisterForEmployers(dataForm, 'signUp-employers')         

            if(res){
                setStatus(true)
                
            }  
           
        } catch (error) {
            console.log(error,'error');
            
        }
    };

    const handleClickMorePage =  (number : number, action: string) => {

        async function getData(newPage: number) {
            try {
                const resEmployers: Promise<TypeEmployers[]> = await getDataEmployers(
                    keyGetEmployers,
                    newPage.toString(),
                    '5',
                    'await'
                );
                const dataEmployers : TypeEmployers[] = await resEmployers;            
                setData(dataEmployers)
             
            } catch (error) {
                console.log(error); 
            }
        };

        if(action === "more"){
            setPage(page + 1);
            const newPage = (number + 1) * 5;
            getData(newPage);
            return undefined
        };

        if(action === "previous" && number >= 1){
            setPage(page - 1);
            const newPage = (number - 1) * 5;
            getData(newPage);
            return undefined
        };

    };

    const handleOnclick = (element: TypeEmployers) => {
        setOppenModal(true);
        setDataModal(element);
        setEmployers(element)
        setDataForm({
            ...dataForm,
            idEmployers: element.idEmployers,
            name: element.fullName,
            email: element.workEmail,
            password: element.idEmployers

        })

    };


    const listJobs = (job: TypeJob, element : TypeEmployers) => {
             
        if(element.idEmployers != idEmployers) return <></>
        return(
            <li className=' border-b border-gray-300 p-2 w-full'>
                <div className='flex space-x-5'>
                    <span className='font-bold w-1/3'>{job.job.jobTitle}</span>
                    <span>{job.datePost.getTime()}</span>
                    <span>iD: {job.idJob}</span>
                    <span>status: {job.status}</span>
                    <span className='text-blue-700 ml-4 flex items-center '>Detail <QuestionCircleOutlined className='ml-1' /></span>
                </div>   
            </li>
        )
    };

    const nonejobs = (element: TypeEmployers) =>{
              
        if(element.idEmployers != idEmployers) return <></>
        return <div>chua co job nao het</div>
    }

    const item = (content: TypeEmployers[]) => {

        if(content.length < 1) return (
            <div className='h-[300px]'>
                <h1 className='mt-8  text-center font-bold text-2xl'>No Data</h1>
            </div>
        )

        return(

            <ul className='flex flex-col items-center'>
                {content.map((element, index) => {
                    
                    return(
                        <li key={index} className='  p-2  mt-6  w-4/5 '>
    
                            <div className=' w-full p-4 flex  justify-between  grow border  rounded-xl'>
                                <div className='w-2/4 flex'>
                        
                                    <div className='border-b w-[70px] h-[70px] flex justify-center items-center bg-red-500 rounded-full border-gray-300'>
                                        Logo
                                    </div>
                    
                                    <div className=' ml-4'>
                                        <div className='font-bold'>{element.companyName}</div>
                                        <div className='font-bold'>{element.fullName}</div>
                                        <div className='text-gray-500'>ago</div>
                                    </div>
                    
                                </div> 
                            
                                <div className='p-2 w-1/3 bg-F7F7F7'>
                                    <div >
                                        <span className='ml-6 font-bold'>{element.title}</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <PhoneOutlined className='mr-2'/>
                                        <span>{element.phone}</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <GooglePlusOutlined className='mr-2'/>
                                        <span>{element.workEmail}</span>
                                    </div>
  
                                </div>
                 
                                <div className='flex'>
                                    <div 
                                        onClick={() =>handleOnclick(element)} 
                                        className='bg-red-700 flex items-center p-2 text-white font-bold text-xl '
                                    >
                                        Del
                                    </div> 

                                    {statusNav === "await" && 
                                        <div 
                                            onClick={() =>handleOnclick(element)}  
                                            className='bg-blue-700 flex items-center p-2 text-white font-bold text-xl rounded-r-xl'
                                        >
                                            Add
                                        </div> 
                                    }
                                    {statusNav === "manage" && 
                                        <div 
                                            // onClick={()=>oppenJobs(element.idEmployers)} 
                                            className='bg-blue-700 flex items-center p-2 text-white font-bold text-xl rounded-r-xl'
                                        >
                                            Jobs <DownCircleOutlined />
                                        </div> 
                                    }
 

                                </div>
                            </div>
                            <div className='flex text-blue-800 space-x-6 px-6 border-b border-gray-400'>
                                <div className='flex items-center '>
                                    <IeOutlined className='mr-2' /> 
                                    <span>{element.websiteUrl}</span>
                                </div>
                                <div className='flex items-center' >
                                    <FacebookOutlined className='mr-2'/>
                                    <span>huyHr.facebook.com</span>
                                </div>
                                <div className='flex items-center' >
                                    <span>ID :</span>
                                    <span>{element.idEmployers}</span>
                                </div>
                            </div>
                            <div>
                                <ul className=' list-none border border-gray-300'>
                                    {dataJobs ? dataJobs.map((job)=> listJobs(job, element)) : nonejobs(element)}
                                </ul>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    };

    const modal = (content: any) => {
        console.log(content);
        
        return(
            <div className='h-[650px] z-50 w-full right-0 left-0  top-[95px] bg-[rgba(149,146,146,0.74)] fixed'>
                {dataModal && 
                    <div className='  mt-8  flex  justify-center'> 
                        
                        <div className=' flex w-[800px] space-x-2  bg-white    border border-gray-500 rounded-lg'>
                        
                            <div className='p-2 font-bold w-1/3'>
                                <div className='flex'>
                                    
                                    <span>{dataModal.fullName}</span>
                                </div>
                                <div className='flex'>
                                    
                                    <span>{dataModal.companyName}</span>
                                </div>
                            </div>

                            <div className='bg-red-800 w-[1px] '></div>
                            <div className='p-2 w-1/3 '>
                                <div className='flex  justify-start space-x-2'>
                                    <div className='w-[50px] '><PhoneOutlined /> </div>
                                    <span>{dataModal.phone}</span>
                                </div>
                                <div className='flex justify-start space-x-3'>
                                    <span className='w-[50px] '><GoogleOutlined />  </span>
                                    <span>{dataModal.workEmail}</span>
                                </div>
                            </div>

                            <div className='bg-red-800 w-[1px] '></div>
                            <div className='p-2 '>
                                <div className='flex justify-start'>
                                    <div className=' mr-2'>Url : </div>
                                    <span className='text-blue-700 cursor-pointer'>{dataModal.websiteUrl}</span>
                                </div>
                                <div className='flex'>
                                    <div className=' mr-2'>Id : </div>
                                    <span className='text-blue-700 cursor-pointer'>{dataModal.idEmployers}</span>
                                </div>
                            </div>

                        </div>      
                    </div>
                }
  
                <div className="fixed top-[200px] translate-x-1/2 right-1/2  z-50 h-[400px] w-[800px] bg-white border rounded-lg shadow-2xl">
                    <div className="modal bg-white p-4 relative rounded-lg" >  
                        <h1 className=' font-bold text-xl text-center'>Create Account for emplouyers</h1>
                        <div onClick={() => setOppenModal(false)} className='text-xl top-0 right-[5px] absolute'>x</div>

                        {!status &&
                            <>
                                <div className='mt-4 flex flex-col space-y-2'>
                                    <label>Email</label>
                                    <input
                                        className=' rounded-lg border border-gray-300 outline-none p-2 h-[40px] w-full'
                                        placeholder='email'
                                        type='email'
                                        value={dataForm.email}
                                        onChange={(e: any) => {setDataForm({...dataForm, email: e.target.value})}}
                                       
                                    />
                                </div>
                                
                                <div className='mt-4 flex flex-col space-y-2'>
                                    <label>Password</label>
                                    <input 
                                        className=' rounded-lg border border-gray-300 outline-none p-2 h-[40px] w-full'
                                        placeholder='password'
                                        type='text'
                                        value={dataForm.password}
                                        onChange={(e: any) => {setDataForm({...dataForm, password: e.target.value})}}
                                        
                                    />
                                </div>
                                <div className='mt-4 text-red-700 font-bold'>
                                    role: emloyers
                                </div>
                                <button 
                                    className='p-2 w-full h-[40px] bg-red-700 text-center font-bold text-white mt-4'
                                    onClick={handleClickButton}
                                >
                                    Add Account
                                </button>
                            </>
                        }
 
                      
                       {status && 
                            <>
                                <h2 className='mt-4 font-bold text-xl text-center'>Đã hoàn tất tạo tài khoản cho nhà tuyển dụng</h2>
                                <div className='mt-8'>
                                    <div className='flex space-x-3 justify-center '>
                                        <span>
                                            Email : dkduy@ gmail.com
                                        </span>
                                        <span className='text-blue-700'>
                                            <CopyOutlined />
                                        </span>     
                                    </div>
                                    <div className='flex space-x-3 justify-center '>
                                        <span>
                                            Password : duy123
                                        </span>
                                        <span className='text-blue-700'>
                                            <CopyOutlined />
                                        </span>     
                                    </div>
                                </div>
                            </>
                        }

                    </div>
                </div>
            </div>
        )
    };

    if(!data) return <>ẻtrtttrerttr</>
    console.log(oppenModal);
    
    return (
        <div className='min-h-[450px]'>
            <div className='flex justify-center '>
                <div className='flex w-4/6 mt-2  border rounded-lg border-gray-300 '>
                <div 
                    className={`w-1/2 text-center p2 font-bold rounded-l-lg  ${statusNav === 'await' && 'bg-red-900 text-white'}`}
                    onClick={() => setStatusNav('await')}
                >
                    waiting 
                </div>
                <div 
                    className={`w-1/2 text-center p2 font-bold rounded-r-lg  ${statusNav === 'manage' && 'bg-red-900 text-white'}`}
                    onClick={() => setStatusNav('manage')}
                >
                    manage 
                </div> 
                </div>
            </div>

            {statusNav === 'await' && 
                <div>
                    {data && item(data.filter(item => item.status === "await"))}
                    {oppenModal && modal(data) }
                </div> 
            }

            {statusNav === 'manage' && 
                <div>
                    {data && item(data.filter(item => item.status === 'done'))}
                    {oppenModal && modal(data) }
                </div> 
            }

            <div className='flex justify-center'>
                <div className='mt-6 mb-6 w-4/5 border-t border-gray-300 flex justify-end'>
                    <button 
                        type='button'
                        className={`mt-2 flex items-center ml-9 rounded-lg  font-bold p-2 ${page >= 1 ? 'bg-blue-700 text-white' : 'bg-gray-700' }`}
                        onClick={() =>handleClickMorePage(page, "previous")}
                    >   
                        <LeftOutlined className='mr- 2' />
                        Previous
                        
                    </button>
                   
                    <button 
                        type='button'
                        className='mt-2 justify-center w-[100px] flex items-center ml-9 rounded-lg bg-blue-700 text-white font-bold p-2'
                        onClick={() =>handleClickMorePage(page, 'more')}
                    >
                        More
                        <RightOutlined className='ml- 2' />
                    </button>
                </div>
            </div>


        </div>
    )
}
