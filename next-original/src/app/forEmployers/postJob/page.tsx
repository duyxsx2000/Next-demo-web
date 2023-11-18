'use client'

import { PlusCircleOutlined } from '@ant-design/icons';

import { useSession } from "next-auth/react"
import { redirect } from 'next/navigation'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { 
    EnvironmentOutlined,
    BorderOutlined,
    DashboardOutlined,
    DollarOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import Footer from '../../component/footer'
import dataDetailJobs from "../../../../data/dataDetailJobs.json"
import postDataJobs from '@/app/lip/postDataJobs';
import { useRouter } from 'next/navigation';

export default function JobsPage() {
    
    // const dataHome: Promise<DataHome> = await getDataHome()
    // const data = await dataHome
    // data, state
    
    const { data: session } = useSession(
        {
        required: true,
        onUnauthenticated() {
            redirect('/')
        }
    });
    
    const route = useRouter()
   console.log(session?.user.role,'roleee');
   
    
    // if(session?.user || session?.user.role !== 'employers') {
    //     route.push('/');
    //     
    // }
    
    const [notification, setNotification] = useState('')
    const [idUser, setIdUser] = useState<any>('kiki')
    const [oppenEdit, setOppenEdit] = useState('');
    const [statusPost, setStatusPosst] = useState(false)
    const [dataCompany, setDataCompany] = useState({
        companyName:'VNG 2',
        companyUrl:'www.vng.com2',
        companyPhoneNumber:9999999999,
        companyEmail:'0336254869',
        companyAddress:'vng.froxi@gmail.com2',
        companyCity:''        
    });
    const [skill, setSkill] = useState('')
    const [dataJobPost, setDataJob] = useState({
        jobTitle:'Hot Job Reactjs 2',
        jobCity:'',
        jobAddress:'',
        jobMethod:'',
        jobRole:'',
        jobRoleSpecific:'intern developer 2',
        jobWage:999,
        jobDeadline:{
        from: new Date().toISOString().slice(0, 10),
        to: new Date().toISOString().slice(0, 10)
        },
        jobSkills:['0'],
       
    });

    const [postReasons, setpostReasons] = useState('');
    const [listReasons, setListReasons] = useState(['0']);
    const [postDescription, setpostDescription] = useState('');
    const [listDescription, setListDescription] = useState(['0']);
    const [postJobRequirements, setPostJobRequirements] = useState('');
    const [listJobRequirements, setListJobRequirements] = useState(['0']);
    const [postcustom, setPostCustom] = useState({title:'', content:''});
    const [listCustom, setListCustom] = useState<{ title: string; content: string; }[]>([]);
  
    const dataJob = dataDetailJobs[1];


    useEffect(() =>{
        if(
            Object.values(dataCompany).every(item => item != '' && item != null && item != undefined)
            && Object.values(dataJobPost).every(item => item != '' && item != null && item != undefined)
        ){setStatusPosst(true)}
        else console.log('fale');
        
    },[dataJobPost, dataCompany])

    // style css, 
    const style = {
        select: 'border rounded-lg border-gray-300 h-[40px] w-[116px]',
        input: ' h-[40px] p-2 border border-gray-300  rounded-lg mb-4 outline-none',
        select1: 'border rounded-lg border-gray-300 h-[40px]',
        input1: ' h-[40px] border border-gray-300  rounded-lg mb-4 outline-none'
    };

    //Processing function
    const handleChangeClick = (item: any) =>{
        setOppenEdit(item)
    };

    const handleDelete = (index: number, list: string[]) => {
        const newList = list.splice(index,1)
        setListReasons(newList)
    };

    const handleClickButton = () =>{
        

        async function postJob(){
            // if(statusPost){
                try {
                    if(session?.user){
                        const id = session.user.idUser
                        const dataPost: TypeJob = {
                            status: 'waiting',
                            rank: 'waiting',
                            datePost: new Date(Date.now()),
                            dateAccept: new Date(Date.now()),
                            idJob: '',      
                            idEmployers:id,
                            company: dataCompany,
                            job: dataJobPost,
                            reasons: listReasons,
                            description: listDescription,
                            requirements: listJobRequirements,     
                        }
                        
                        const res = await postDataJobs('postJobKeyAXS',dataPost) 
                        
                        if(res.title === 'done-post-job'){
                            setNotification('done-post-job')
                        }else if(!res || res === 'error-post-job' ) {
                            setNotification('error-post-job')    
                        }
                    }else return false

                    
                } catch (error) {
                    console.error('Error:', error);
                    setNotification('error');
                    
                } 

            // }else return null

        }
        postJob()
    }

    //Small component.
    const plusOppenEdit = (item: string) =><PlusCircleOutlined onClick={()=>handleChangeClick(item)} className='text-red-800' /> 
    const lable = (name: string) =>  <label className='text-gray-500'>{name}<span className='text-red-700'>*</span></label>
    
    const companyForm =  () => {
        const handleOnchangeInput = (e: any) =>{
            const {name, value} = e.target;
            setDataCompany({
                ...dataCompany,
                [name]: value
            })
        };
        return( 
            <div className='p-4 border border-gray-300 rounded-lg'>
                <h1 className=' mb-4'>
                    <span className=' font-bold text-xl mb-4'>Company</span>
                    <span className='text-gray-600 font-bold ml-2'>{'mandatory'}{lable('')}</span>
                </h1>

                {lable('Company Name')}
                <input
                    placeholder='name' 
                    type='text'
                    className={`${style.input} w-full `}
                    name='companyName'
                    value={dataCompany.companyName}
                    onChange={handleOnchangeInput}
                />

                {lable('Company URL')}
                <input
                    placeholder='URL' 
                    type='text'
                    className={`${style.input} w-full`}
                    name='companyUrl'
                    value={dataCompany.companyUrl}
                    onChange={handleOnchangeInput}
                />

                {lable('Company phone number')}
                <input
                    placeholder='Phone Number' 
                    type='text'
                    className={`${style.input} w-full`}
                    name='companyPhoneNumber'
                    value={dataCompany.companyPhoneNumber}
                    onChange={handleOnchangeInput}
                />
                
                {lable('Company Email')}
                <input
                    placeholder='Email' 
                    type='text'
                    className={`${style.input} w-full`}
                    name='companyEmail'
                    value={dataCompany.companyEmail}
                    onChange={handleOnchangeInput}
                />

                <div className='flex justify-between '>
                    {lable('Address')}
                    <input
                        placeholder='Address' 
                        type='text'
                        className={`${style.input} w-3/5`}
                        name='companyAddress'
                        value={dataCompany.companyAddress}
                        onChange={handleOnchangeInput}
                    />
                    <select className={style.select} name='companyCity' value={dataCompany.companyCity} onChange={handleOnchangeInput}>
                        <option value='City'>City</option>
                        <option value='HÀ Nội'> Hà Nội</option>
                        <option value='Hồ Chí Minh'> Hồ Chí Minh</option>
                        <option value='Đà Nẵng'> Đà Nẵng</option>
                    </select>
                </div>
  
            </div>
        )
    };
 
    const jobFrom = () =>{
        const handleOnchangeInput = (e: any) =>{
            const {name, value, date} = e.target;


            if (name === 'from' || name === 'to') {
                
                setDataJob({
                    ...dataJobPost,
                    jobDeadline: {
                        ...dataJobPost.jobDeadline,
                        [name]: value,
                    }
                });
            }else 

            setDataJob({
                ...dataJobPost,
                [name]: value
            })
        };
        const handleClickButton = () => {
            setDataJob({
                ...dataJobPost,
                jobSkills:[
                    ...dataJobPost.jobSkills,
                        skill
                ]
  
            });
            setSkill('')
        }
        return(
            <div className='p-4 border border-gray-300 rounded-lg'>
                <h1 className=' mb-4'>
                    <span className=' font-bold text-xl mb-4'>Job</span>
                    <span className='text-gray-600 font-bold ml-2'>{'mandatory'}{lable('')}</span>
                </h1>

                {lable('Title')}
                <input
                    placeholder='title' 
                    type='text'
                    className='w-full h-[40px] border border-gray-300  rounded-lg mb-4 outline-none'
                    name='jobTitle'
                    value={dataJobPost.jobTitle}
                    onChange={handleOnchangeInput}
                />

                <div className='flex space-x-2 justify-between mb-2'>
                    <select className={style.select} name='jobCity' value={dataJobPost.jobCity} onChange={handleOnchangeInput}>
                        <option value='City'>City</option>
                        <option value='HÀ Nội'> Hà Nội</option>
                        <option value='Hồ Chí Minh'> Hồ Chí Minh</option>
                        <option value='Đà Nẵng'> Đà Nẵng</option>
                    </select>

                    <div className='  w-4/6  flex space-x-2  justify-between '>
                        {lable('Address')}
                        <input
                            placeholder='Address'
                            type='text'
                            className={`${style.input} w-4/5`}
                            name='jobAddress'
                            value={dataJobPost.jobAddress}
                            onChange={handleOnchangeInput}
                        />
                    </div>
                </div>

                <div className=' flex justify-between space-x-2 mb-2'>
                    <select className={style.select} name='jobMethod' value={dataJobPost.jobMethod} onChange={handleOnchangeInput}>
                        <option value='Method'>Method</option>
                        <option value='At Office'>At Office</option>
                        <option value='online'>Online</option>
                    </select>

                    <div className='  w-4/6  flex space-x-2  justify-between '>
                        {lable('Wage :')}
                        <input
                            placeholder='Wage'
                            type='number'
                            className={`${style.input} w-4/5`}
                            name='jobWage'
                            value={dataJobPost.jobWage}
                            onChange={handleOnchangeInput}
                        />
                    </div>
                </div>

                <div className=' flex justify-between space-x-2 mb-2'>
                    <select className={style.select} name='jobRole' value={dataJobPost.jobRole} onChange={handleOnchangeInput}>
                        <option value='Role'>Role</option>
                        <option value='intern'>intern</option>
                        <option value='fresher'>fresher</option>
                    </select>
                    
                    <div className=' w-4/6 flex space-x-2  justify-between '>
                        {lable('Specific :')}
                        <input
                            placeholder='Specific'
                            type='text'
                            className={`${style.input} w-4/5`}
                            name='jobRoleSpecific'
                            value={dataJobPost.jobRoleSpecific}
                            onChange={handleOnchangeInput}
                        />
                    </div>
                </div>
                <div className='my-4'>
                    {lable('The application deadline')}
                    <div className='flex'>
                        <div className='w-1/2'>From</div>
                        <div className='w-1/2'>To</div>
                    </div>
                    <div className='flex'>
                        <div className='w-3/4'>
                            <input
                                type='date'
                                className='border outline-0 border-gray-300 rounded-lg p-2 w-2/5'
                                value={dataJobPost.jobDeadline.from}
                                name='from'
                                onChange={handleOnchangeInput}
                            />    
                        </div>
                        <div className='w-3/4'>
                            <input
                                type='date'
                                className='border outline-0 border-gray-300 rounded-lg p-2 w-2/5'
                                value={dataJobPost.jobDeadline.to}
                                name='to'
                                onChange={handleOnchangeInput}
                            />
                        </div>
                    </div>
                </div>

                <div className='flex'>
                    <input 
                        placeholder='skill'
                        type='text'
                        className={`${style.input} w-2/6`}
                        name='Skill'
                        value={skill}
                        onChange={(e: any)=> setSkill(e.target.value)}
                    />
                    <button onClick={handleClickButton} type='button' className='border px-3 rounded-lg h-[40px] font-bold text-white bg-red-700'>Add</button>

                    <div className='flex space-x-2 ml-4 font-bold'>
                        <div className=' h-[40px] p-1 rounded-full border-[#a6a5a7] border'>Reactjs</div>
                        <div className='h-[40px] p-1 rounded-full border-[#c7c5c8] border'>NodeJs</div>
                    </div>

                </div>
            </div>
        )
    };

    const reasons = () =>{

        return(
            <div className='p-4 border border-gray-300 rounded-lg'>
                <h1 className=' mb-4'>
                    <span className=' font-bold text-xl mb-4'>Reasons</span>
                    <span className='text-gray-600 font-bold ml-2'>{'suggestion'}</span>
                </h1>
                {plusOppenEdit('reasons')}
            </div>
        )
    }
    const addReasons = () =>{

        return(
            <div className='p-4 border border-gray-300 rounded-lg'>
                <h1 className=' mb-4'>
                    <span className=' font-bold text-xl mb-4'>Reasons</span>
                    <span className='text-gray-600 font-bold ml-2'>{'suggestion'}</span>
                </h1>
                <div className='flex justify-between space-x-2 mt-2'>
                    <input
                        type='text'
                        placeholder='reasons'
                        className={`${style.input} grow`}
                        value={postReasons}
                        onChange={(e) => setpostReasons(e.target.value)}
                    />
                    <button
                        className='border px-3 rounded-lg h-[40px] font-bold text-white bg-red-700'
                        type='button'
                        onClick={() => {setListReasons([...listReasons, postReasons]); setpostReasons('')}}
                    >
                        Add
                    </button>
                </div>

                <ul className='mt-4 space-y-2 list-disc marker:text-red-400 pl-2 ml-4'>
                    {listReasons.map((item, index) =>{
                        if(index === 0) return <></>
                        return(
                            <li key={index}>
                                <div className='flex items-center justify-between'>
                                    <span>{item}</span>
                                    <DeleteOutlined onClick={()=> handleDelete(index,listReasons)} className='mr-[100px]' />
                                </div>     
                            </li>
                        )
                    })}
                </ul>

            </div>
        )
    };
    
    const description = () =>{
        return(
            <div className='p-4 border border-gray-300 rounded-lg'>
                <h1 className=' mb-4'>
                    <span className=' font-bold text-xl mb-4'>Description</span>
                    <span className='text-gray-600 font-bold ml-2'>{'suggestion'}</span>
                </h1>
                {plusOppenEdit('description')}
            </div>
        )
    };
    const addDescription = () =>{
        return(
            <div className='p-4 border border-gray-300 rounded-lg'>
                <h1 className=' mb-4'>
                    <span className=' font-bold text-xl mb-4'>Description</span>
                    <span className='text-gray-600 font-bold ml-2'>{'suggestion'}</span>
                </h1>
                <div className='flex justify-between space-x-2 mt-2'>
                    <textarea
                        className='border rounded-lg border-gray-300 h-[100px] grow outline-none'
                        value={postDescription}
                        onChange={(e) => setpostDescription(e.target.value)}
                    />
                    
                    <button type='button' onClick={() => {setListDescription([...listDescription, postDescription]); setpostDescription('')}} className='border px-3 rounded-lg h-[40px] font-bold text-white bg-red-700'>Add</button>
                </div>
                <ul className='mt-4 space-y-2 list-none pl-2 ml-4'>
                    {listDescription.map((item, index) =>{
                        if(index === 0) return <></>
                        return(
                            <li key={index}>
                                <div className='flex items-center justify-between'>
                                    <div className='w-4/5' style={{ overflowWrap: 'break-word' }}>{item}</div>
                                    <DeleteOutlined onClick={()=> handleDelete(index,listDescription)} className='mr-[100px]' />
                                </div>     
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    };
    
    const jobRequirements = () =>{
        return(
            <div className='p-4 border border-gray-300 rounded-lg'>
                <h1 className=' mb-4'>
                    <span className=' font-bold text-xl mb-4'>job Requirements</span>
                    <span className='text-gray-600 font-bold ml-2'>{'suggestion'}</span>
                </h1>
                {plusOppenEdit('jobRequirements')}

            </div>
        )
    }
    const addJobRequirements = () =>{
        return(
            <div className='p-4 border border-gray-300 rounded-lg'>
                <h1 className=' mb-4'>
                    <span className=' font-bold text-xl mb-4'>job Requirements</span>
                    <span className='text-gray-600 font-bold ml-2'>{'suggestion'}</span>
                </h1>
                <div className='flex justify-between space-x-2 mt-2'>
                    <textarea
                        className='border rounded-lg border-gray-300 h-[100px] grow outline-none'
                        value={postJobRequirements}
                        onChange={(e) => setPostJobRequirements(e.target.value)}
                    />                   
                    <button type='button' onClick={() => {setListJobRequirements([...listJobRequirements, postJobRequirements]); setPostJobRequirements('')}} className='border px-3 rounded-lg h-[40px] font-bold text-white bg-red-700'>Add</button>
                </div>
                <ul className='mt-4 space-y-2 list-none pl-2 ml-4'>
                    {listJobRequirements.map((item, index) =>{
                            if(index === 0) return <></>
                            return(
                                <li key={index}>
                                    <div className='flex items-center justify-between'>
                                        <div className='w-4/5' style={{ overflowWrap: 'break-word' }}>{item}</div>
                                        <DeleteOutlined onClick={()=> handleDelete(index,listJobRequirements)} className='mr-[100px]' />
                                    </div>     
                                </li>
                            )
                    })}
                </ul>

            </div>
        )
    };
    
    const custom = () =>{
        return(
            <div className='p-4 border border-gray-300 rounded-lg'>
                 <h1 className=' mb-4'>
                    <span className=' font-bold text-xl mb-4'>Customization</span>
                    <span className='text-gray-600 font-bold ml-2'>{'customization'}</span>
                </h1>
                {plusOppenEdit('custom')}
            </div>

        )
    }
    const addCustom = () =>{
        const handleChangeInput = (e: any) => {
            const {value, name} = e.target;
            if(name === 'title') {
                setPostCustom({title: value, content:postcustom.content})
            }else if(name === 'content'){
                setPostCustom({title: postcustom.title, content:value})
            }       
        };
        const handleClickbutton = () => {
            const newListCustom = [...listCustom, postcustom]
            setListCustom(newListCustom)
           

        }
        return(
            <div className='p-4 border border-gray-300 rounded-lg'>
                <h1 className=' mb-4'>
                    <span className=' font-bold text-xl mb-4'>Customization</span>
                    <span className='text-gray-600 font-bold ml-2'>{'customization'}</span>
                </h1>
                <div className='flex justify-between space-x-2 mt-2'>
                    <input
                        placeholder='Title'
                        type='text'
                        className='border rounded-lg border-gray-300 grow outline-none'
                        name='title'
                        value={postcustom.title}
                        onChange={handleChangeInput}
                    />
              <button className='border px-3  rounded-lg h-[40px] font-bold text-white bg-red-700'>Add</button>

                </div>

                <div className='flex justify-between space-x-2 mt-2'>
                    <textarea
                        className='border rounded-lg border-gray-300 h-[100px] grow outline-none'
                        name='title'
                        value={postcustom.title}
                        onChange={handleChangeInput}
                    />
                    
                    <button className='border px-3  rounded-lg h-[40px] font-bold text-white bg-red-700'>Add</button>
                </div>
            </div>
        )
    };


    const postJob = () =>{
        const handleClick = () => {

        }
        return(
            <div>
                {statusPost ? <></> :  <div className={`text-center mb-2 text-red-800 `}>Please fill in all the required and accurate information to post a job</div>}
               
                <div className='p-4'>
                    <button 
                        className={` rounded-lg h-[40px] w-full font-bold  ${statusPost ? 'bg-red-500 text-white ' : 'bg-gray-700'}`}
                        onClick={handleClickButton}
                        type='button'
                    >
                        Post Jobs
                    </button>
                </div>
                <button type='button' onClick={handleClick}>show</button>
                {notification && (
                    <div className='h-[650px] z-50 w-full right-0 left-0  top-[95px] bg-[rgba(149,146,146,0.74)] fixed'>
                        <div className="fixed top-[200px] translate-x-1/2 right-1/2  z-50 h-[400px] w-[800px] bg-white border rounded-lg shadow-2xl">
                            <div className="modal bg-white p-4">  
                                <h1 className='text-center mb-8 font-bold text-xl'>
                                    {notification === 'done-post-job' ? 
                                        'Đã gửi yêu cầu post bài thành công xin vui lòng chờ đợi đội ngũ kiểm duyệt, sẽ liên lạc với bạn, có thắc mắc hãy liên hệ với admin!' :
                                        'Đã gập lỗi trong quá trình post job xin vui vòng thử lại hoặc quay về home'
                                    }
                                </h1>
                                <div className='flex justify-center '>
                                    <Link className='bg-red-800 flex items-center justify-center text-white text-center border rounded-xl h-[100px] w-[200px] text-2xl font-bold' href='/'>Home</Link>
                                    {notification === 'error-post-job' && <Link className='bg-red-800 flex items-center justify-center text-white text-center border rounded-xl h-[100px] w-[200px] text-2xl font-bold ml-4' href='/'>Retry</Link>}
                                </div>
                               
                            </div>
                        </div>
                    </div>


                )}
            </div>

        )
    };

    const  jobDetailsCard = function(detailJob: DetailJob){
           
        // const timeAgo = Date.now() - detailJob.timePost 
        // const hours =Math.floor(timeAgo / 3600000)
        const styleEml = "flex items-center"

        return(
            <div  className='py-4 space-y-2 text-[#414042] border-dotted border-t border-b border-[#414042]'>
                
                <div className={styleEml}>
                    <EnvironmentOutlined />
                    {dataCompany.companyCity ? 
                        <span className='ml-2'>{dataCompany.companyCity}</span> :
                            <span className='ml-2'>City</span>
                    }
 
                </div>
                <div className={styleEml}>
                    <BorderOutlined />
                    {dataJobPost.jobMethod ? 
                        <span className='ml-2'>{dataJobPost.jobMethod}</span> :
                            <span className='ml-2'>Method</span>
                    }
                    
                </div>
                <div className={styleEml}>
                    <DashboardOutlined />
                    <span className='ml-2'>0 hours ago</span>
                </div>

                <div className='space-x-4'>
                    <span>SkillS:</span>
                    {dataJobPost.jobSkills.map((skill,index)=>{
                        if(index === 0) return<></>
                        return <span key={index} className=' p-1 rounded-full border-[#414042] border'>{skill}</span>
                    })}                 
                </div>
                
            </div>
        )
    
         
    };

    const reasonsToJoin = function(reasons: string[]){
        return(
            <div className=' border-dotted border-b border-black py-4'>
                <h1 className=' font-bold text-xl'>Top 3 reasons to join us</h1>

                <ul className='ml-[20px] mt-2 space-y-2 list-disc marker:text-red-400'>
                    {reasons.map((title,index)=>{
                        if(index === 0) return<></>
                        return <li key={index}>{title}</li>
                    })}
                </ul>

            </div>
        )
    };

    const jobDescription = function(jobDescription: string[]){

        return(
            <div className='border-dotted border-b border-black py-4'>
                <h1 className='font-bold text-xl mb-2'>Job description</h1>
                {jobDescription.map((part,index)=>{
                    if(index === 0) return<></>
                    return <> <p key={index}>{part}</p><br/> </> 
                })}

            </div>
        )
    };

    const skillAndExperience = function(request: string[]){
        
        return(
            <div className='border-dotted border-b border-black py-4'>
                <h1 className='font-bold text-xl'>Your skills and experience</h1>

                <ul className='ml-[20px] mt-2 space-y-2 list-disc marker:text-red-400'>
                    {request.map((item,index)=>{
                        if(index === 0) return<></>
                        return <li key={index}>{item}</li>
                    })}
                </ul>

            </div>
        )
    };

    const companyIntroduction = function(){
        return(
            <div>
                <h1 className='font-bold text-xl'>VNG Corporation</h1>
                <p>We have a team of product experts, masters of design, and development geniuses</p>
                <div className='grid grid-rows-frows2 grid-cols-fcolumns'>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>

                </div>
            </div>
        )
    };

    // const customCard = (list: { title: string; content: string; }) => {

    //     return(
    //         <div className='border-dotted border-b border-black py-4'>
    //             <h1 className='font-bold text-xl'>{list.title}</h1>

    //             <ul className='ml-[20px] mt-2 space-y-2 list-disc marker:text-red-400'>
    //                 {request.map((item,index)=>{
    //                     if(index === 0) return<></>
    //                     return <li key={index}>{item}</li>
    //                 })}
    //             </ul>

    //         </div>
    //     )
    // }

    if(session?.user.role !== 'employers') return undefined
    
    return (
        <main className='pt-px95  bg-F7F7F7  '>

            <div className='flex justify-center '>
                <div className=' mt-[10px] flex   w-5/6 space-x-5  '>
                    <div className=' top-[95px] bg-white w-3/5 p-2'>
                        <form className='space-y-4'>
                            {companyForm()}
                            {jobFrom()}
            
                            <div>
                                {oppenEdit != "reasons" ? reasons() : addReasons()}
                                {oppenEdit != "description" ? description() : addDescription()}
                                {oppenEdit != "jobRequirements" ? jobRequirements() : addJobRequirements()}
                                {oppenEdit != "custom" ? custom() : addCustom()}
                            </div>
                            
                            {postJob()}
                        </form>
                    </div>
                 
                    <div className=' top-[95px] z-10  sticky left-1/2 w-2/5 h-[650px]'>
                        <div className='h-full bg-white'>

                            <header className='flex flex-col justify-between px-4 h-2/5 '>

                            <div className='flex  grow px-5  '>

                                {/* <Image
                                    className='border-b mt-10'
                                    src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN09SR3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--8116cf4b23cb755b3b556d410e98ed210b2f68c4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/logo%20Viettel.JPG"
                                    alt='logo'
                                    height={100}
                                    width={100}
                                /> */}
                                <div className='border text-blue-800 text-center border-gray-300 mt-10 w-[100px] h-[100px] text-xl'>
                                       Add Logo
                                </div>
                                <div className='border-b ml-4 grow mt-5'>
                                    <h1 className=' font-bold text-2xl'>{dataJobPost.jobTitle ? dataJobPost.jobTitle : 'Title Job'} </h1>
                                    <Link className=' text-lg text-[#414042]' href="/#">{dataCompany.companyName ? dataCompany.companyName : 'Company Name'}</Link>

                                    <p className='flex items-center text-lg text-[#19b23c]'>
                                        <DollarOutlined className='mr-2'/>
                                        <span>up to</span> 
                                        {dataJobPost.jobWage}
                                        <span>$</span>
                                    </p>

                                </div>  

                            </div>

                            <div className='flex justify-center items-center mb-4  bg-red-500 w-full h-10 '>
                                <Link className='text-center w-full  text-white' href={`/apply/${dataJob.id}/${dataJob.job.title}`}>Apply Now</Link>    
                            </div>

                            </header>

                            <main className='px-5 h-3/5 space-y-3   p-4 overflow-auto   '>
                                {dataJob && jobDetailsCard(dataJob)}
                                {listReasons && reasonsToJoin(listReasons)}
                                {dataJob && jobDescription(listDescription)}
                                {dataJob && skillAndExperience(listJobRequirements)}
                                {companyIntroduction()}        
                            </main> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[70px] bg-F7F7F7 '></div>
            <Footer></Footer>
            
        </main>
  )
}
