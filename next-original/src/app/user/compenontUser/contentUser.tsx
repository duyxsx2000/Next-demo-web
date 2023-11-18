'use client'
import React, { useState } from 'react'
import Image from "next/image"

import {
  GoogleOutlined, 
  EditTwoTone,
  DeleteOutlined, 
  AreaChartOutlined, 
  PlusCircleOutlined, 
  ReconciliationFilled, 
  EditOutlined   
} from '@ant-design/icons'
import { type } from 'os';
import postUser from '@/app/lip/postUser';

type User = {
  name: string,
  id: number,
  image: string,
  email: string,
  role: string
}
type Props = {
  dataUser: User,

};

export default function ContentUser({dataUser} : Props) {

  const style = {
    input: 'border border-gray-300 rounded-lg p-2 w-2/5 outline-0',
    inputRed: 'border border-red-500 rounded-lg p-2 w-2/5 outline-0',
    button: 'h-[50px] w-[100px] border rounded-xl',
    leSelect: 'border border-gray-300 rounded-lg p-2 w-1/5 outline-0',
    leSelectRed: 'border border-red-500 rounded-lg p-2 w-1/5 outline-0'

  };
  const moth = ['Moth', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  const years = ['Year', '2023', '2022', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010'];
  const styleSelect = 'border border-gray-300 rounded-lg p-2 w-1/5 outline-0';
  
  const [openEdit,setOpenEdit] =  useState('');
  const [statusForm, setstatusForm] = useState<{status: boolean, name: string} | null>(null)
  const [userCardState, setUserCardState] = useState({
    fullName:'',
    title:'',
    date:'',
    gender:'',
    numberPhone: 9876543210,
    email:'',
    city:'',
    address:''
  });
  const [abountMeState, setAbountMeState] = useState('');
  const [formWorkExperience, setFormWorkExperience] = useState({
    jobTitle: '',
    company:'',
    stick: false,
    from:{
      moth: '',
      year:''
    },
    to:{
      moth: '',
      year:''
    },
    decription:''
  });
  const [workExperienceState, setWorkExperienceState] = useState([]);
  const [skillsState, setSkillsState] = useState<string[]>(['NodeJS','.Net','Reactjs']);
  const [educationState, setEducationState] = useState({
    major: '',
    school: '',
    stick: false,
    from:{
      moth: '',
      year:''
    },
    to:{
      moth: '',
      year:''
    },
    decription:''
  });
  const [certificatesState, setCertificatesState] = useState({
    certificatesName: '',
    organization: '',
    stick: false,
    from:{
      moth: '',
      year:''
    },
    to:{
      moth: '',
      year:''
    },
    decription:''
  });
  const [awardsHonorsState, setAwardsHonorsState] = useState({
    awardsHonorsName: '',
    organization: '',
    stick: false,
    from:{
      moth: '',
      year:''
    },
    decription:''
  });
  const [personalProjectState, setPersonalProjectState] = useState({
    projectName: '',
    decription:'',
    stick: false,
    from:{
      moth: '',
      year:''
    },
    to:{
      moth: '', 
      year:''
    },
    url:''
  });

  async function postData(dataPost: any) {
    // const res = await postUser(dataPost,'');
    const key = 'post-profile-user'
    console.log(dataPost.name);
    
    if (dataPost.name === 'userCard') {
      const res = await postUser({ name: dataPost.name, data: userCardState }, key);
      console.log(res);
       
    } else if (dataPost.name === 'abountMe') {
      console.log('44');
      
      const res = await postUser({ name: dataPost.name, data: abountMeState }, key);
      console.log(res);
    } else if (dataPost.name === 'formWorkExperience') {
      const res = await postUser({ name: dataPost.name, data: formWorkExperience }, key);
      console.log(res);
    } else if (dataPost.name === 'skills') {
      const res = await postUser({ name: dataPost.name, data: skillsState }, key);
      console.log(res);
    } else if (dataPost.name === 'education') {
      const res = await postUser({ name: dataPost.name, data: educationState }, key);
      console.log(res);
    } else if (dataPost.name === 'certificates') {
      const res = await postUser({ name: dataPost.name, data: certificatesState }, key);
      console.log(res);
    } else if (dataPost.name === 'awardsHonors') {
      const res = await postUser({ name: dataPost.name, data: awardsHonorsState }, key);
      console.log(res);
    } else if (dataPost.name === 'personalProject') {
      const res = await postUser({ name: dataPost.name, data: personalProjectState }, key);
      console.log(res);
    }
    
   
  }

  const hanldeClickEdit = (key: string) => {
    setOpenEdit(key) 
  }; 

  const handleClickButton = (item: {type: string, name: string}) => {
    console.log(item.name);

    if((item.type == 'save')){
      if(item.name === 'userCard'){
        const dataUserCard = userCardState
        if(Object.values(dataUserCard).every(value => value !== undefined && value !== null && value !== '')){
          postData(item); setstatusForm(null)
        }else setstatusForm({status: false, name: item.name})  ; console.log(statusForm);
        
      };
      if(item.name === 'abountMe'){
        const dataAbountMe = abountMeState
        if(Object.values(dataAbountMe).every(value => value !== undefined && value !== null && value !== '')){
          postData(item); setstatusForm(null)
        }else setstatusForm({status: false, name: item.name})
      };
      if(item.name === 'skills'){
        const dataSkills = skillsState
        if(Object.values(dataSkills).every(value => value !== undefined && value !== null && value !== '')){
          postData(item); setstatusForm(null)
        }else setstatusForm({status: false, name: item.name})  
      };
      if(item.name === 'workExperience'){
        console.log('0000');
        
        const dataWorkExperience = formWorkExperience
        if(Object.values(dataWorkExperience).every(value => value !== undefined && value !== null && value !== '')){
          postData(item); setstatusForm(null)
        }else setstatusForm({status: false, name: item.name})  
      };
      if(item.name === 'education'){
        const dataEducation = educationState
        if(Object.values(dataEducation).every(value => value !== undefined && value !== null && value !== '')){
          postData(item); setstatusForm(null)
        }else setstatusForm({status: false, name: item.name})  
      };
      if(item.name === 'certificates'){
        const dataCertificates = certificatesState
        if(Object.values(dataCertificates).every(value => value !== undefined && value !== null && value !== '')){
          postData(item); setstatusForm(null)
        }else setstatusForm({status: false, name: item.name})  
      };
      if(item.name === 'awardsHonors'){
        const dataAwardsHonors = awardsHonorsState
        if(Object.values(dataAwardsHonors).every(value => value !== undefined && value !== null && value !== '')){
          postData(item); setstatusForm(null)
        }else setstatusForm({status: false, name: item.name})  
      };
      if(item.name === 'personalProject'){
        const dataPersonalProject = personalProjectState
        if(Object.values(dataPersonalProject).every(value => value !== undefined && value !== null && value !== '')){
          postData(item); setstatusForm(null)
        }else setstatusForm({status: false, name: item.name})  
      };

    }else {setOpenEdit('exit'), setstatusForm(null)}

 
    
  };



  const userImage = dataUser?.image ? (
    <Image
        className="border-4  dark:border-slate-500  ml-5  w-[150px] h-[150px] rounded-full "
        src={dataUser.image}
        width={200}
        height={200}
        alt={dataUser?.name ?? "Profile Pic"}
        priority={true}
    />
  ) : (<div className='ml-5 flex justify-center items-center w-[150px] h-[150px] rounded-full bg-pink-500'>
        <p className='text-white text-2xl'>{dataUser?.name && dataUser.name[0]}</p>
      </div>
  );


  function buttoncustom(namePost: string){
    console.log(namePost);
    
    return(
      <div className='flex justify-end space-x-5'>
        <button type='button' onClick={()=>handleClickButton({type:'exit', name:''})} className={`border-gray-300 ${style.button}`}>Discard</button>
        <button type='button' onClick={()=>handleClickButton({type:'save' ,name:namePost})} className={`bg-red-600 text-white ${style.button}`}>Save</button>
      </div>
    )
  };

  function OppenModel(key: string){
    return(<div onClick={()=>hanldeClickEdit(key)} className='text-red-900'> <PlusCircleOutlined className='' /></div>)
  };


    
  
  function userCard() {
    return (
      <div className='border-b border-gray-300 flex items-center py-5  justify-between'>
        {userImage}
  
        <div className='ml-5 relative'>
          <h1 className='text-5xl'>{dataUser.name}</h1>
          <p className='text-center mt-4 flex space-x-3 items-center'>
            <GoogleOutlined className='mr-4'/>
            {dataUser.email}
          </p>
        </div>
  
        <div className='mr-4 text-2xl  '>
        <div onClick={()=>hanldeClickEdit('editUserCard')} className='text-red-900 ' ><EditTwoTone/></div>
        </div>
  
      </div>
     
    )

  }

  function editUserCard () {

    const handleOnchangeInput= (e: any) => {
      const {name, value} = e.target
     
      setUserCardState({
        ...userCardState,
        [name]: value
      });
      console.log(userCardState);
      
      
    };

    return(
      <div>
        {statusForm && <h1 className='text-center text-red-500 text-xl '>Xin hãy nhập đầy đủ, chính xác các thông tin và thử lại</h1>}
        <div className={`pt-5 flex justify-between `}>
  
          <div>
            {userImage}
            <div className='flex justify-center ml-2 space-x-4 mt-8'>
              <p className='space-x-4 flex items-center'>
                <AreaChartOutlined />
                <span className='ml-2'>Edit</span>
              </p>
              <p className='space-x-4 flex items-center'>
                <DeleteOutlined />
                <span className='ml-2'>Detele</span>
              </p>
            </div>
          </div>

          <div>
            <div className='space-y-5'>

              <input 
                className={`border outline-0 border-gray-300 rounded-lg p-2 w-full ${statusForm && 'border-red-500'}`} 
                type='text' 
                value={userCardState.fullName}
                name='fullName'
                onChange={handleOnchangeInput}
                placeholder='Full Name'
              > 
              </input>
              <input 
                className={`border outline-0 border-gray-300 rounded-lg p-2 w-full ${statusForm && 'border-red-500'}`}
                type='text' 
                placeholder='Title'
                value={userCardState.title}
                name='title'
                onChange={handleOnchangeInput}
              >
              </input>

              <div className='flex space-x-5  justify-between'>
                <input 
                  className={`border outline-0 border-gray-300 rounded-lg p-2 w-2/5 ${statusForm && 'border-red-500'}`}
                  type='date'
                  value={userCardState.date}
                  name='date'
                  onChange={handleOnchangeInput}
                > 
                </input>
                <select className={!statusForm ? style.input : style.inputRed} id="country" name="gender" value={userCardState.gender} onChange={handleOnchangeInput}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className='flex space-x-5'>
                <input 
                  className={!statusForm ? style.input : style.inputRed} 
                  type='number' 
                  placeholder='Phone Number'
                  value={userCardState.numberPhone}
                  onChange={handleOnchangeInput}
                  name='numberPhone'
                >
                </input>
                <input 
                  className={!statusForm ? style.input : style.inputRed} 
                  type='email' 
                  placeholder='email'
                  onChange={handleOnchangeInput}
                  name='email'
                  value={userCardState.email}
                >
                </input>
              </div>

              <div className='flex space-x-5'>
                <select className={!statusForm ? style.input : style.inputRed} id="country" name="city" value={userCardState.city} onChange={handleOnchangeInput}>
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                  <option value="HCM">HCM</option>
                  <option value="Other">Other</option>
                </select>
                <input 
                  className={!statusForm ? style.input : style.inputRed} 
                  type='text' 
                  placeholder='address'
                  name='address'
                  value={userCardState.address}
                  onChange={handleOnchangeInput}
                >
                </input>

              </div>
              {buttoncustom('userCard')}
            </div>
          </div>         
        </div>
 
      </div>
    )
  };
  
  function abountMe() {
    return(
      <div className='p-5 flex justify-between '>
        <div>
          <h1 className=' font-bold text-2xl mb-2'>Abount Me</h1>
          <p className='border-gray-400'>Introduce your strengths and years of experience</p>
        </div>
        {OppenModel('editAbountMe')}
      </div>
    )
  };

  function editAbountMe() {
    return (
      <div className='p-5 '>
        <h1 className=' font-bold text-2xl mb-2'>Abount Me</h1>
        <div className='border-t border-gray-400 pt-5 '>
          <p className='text-gray-300 font-light'>Tips: Introduce about you, your strengths and years of experience</p>
          <textarea 
            className='w-full h-[150px] border border-gray-300 rounded-lg outline-0 mt-4'
            value={abountMeState}
            onChange={(e: any)=> setAbountMeState(e.target.value)}></textarea>
          {buttoncustom('abountMe')}

        </div>

      </div>

    )
  };

  function workExperience(){
    const styleLi = 'flex items-center justify-between  text-blue-600 border-b border-gray-300 pb-2'
    const editJob = ()=> <div className=''><EditOutlined /></div>

    return(
      <div className='p-5 flex justify-between'>
        <div>
          <h1 className=' font-bold text-2xl mb-2'>Work Experience</h1>
          <p className='border-gray-400'>Highlight detailed information about your job history</p>
          <div className='mt-5'>
            <ul className='space-y-4 text-blue-600'>
            

              <li className={styleLi}>
                <div className='flex items-center space-x-4'>
                  <ReconciliationFilled />
                  <p>fontend developer </p>
                </div>
                {editJob()}

              </li>

              <li className={styleLi}>
                <div className='flex items-center space-x-4'>
                  <ReconciliationFilled />
                  <p>fontend developer </p>
                </div>
                {editJob()}

              </li>

              <li className={styleLi}>
                <div className='flex items-center space-x-4'>
                  <ReconciliationFilled />
                  <p>fontend developer </p>
                </div>
                {editJob()}

              </li>
      
            </ul>
          </div>
        </div>
        {OppenModel('editWorkExperience')}
      </div>
    )
  };

 function editWorkExperience () {

    function handleChangeInput(e: any) {

       const {name, value, type, checked } = e.target;

       if(name.includes('form')){
        const key = name.slice(5)
        setFormWorkExperience({
          ...formWorkExperience,
          from:{
            ...formWorkExperience.from,
            [key]: value
          }
         })
       };
       if(name.includes('to')){
        const key = name.slice(3)
        setFormWorkExperience({
          ...formWorkExperience,
          from:{
            ...formWorkExperience.from,
            [key]: value
          }
         })
       };
       setFormWorkExperience({
        ...formWorkExperience,
        [name]: type === 'checkbox' ? checked : value
       })
    }

    return(
      <div className='p-5'>
        <div>
          {statusForm && <h1 className='text-center text-red-500 text-xl mb-2'>Xin hãy nhập đầy đủ, chính xác tất cả các thông tin và thử lại</h1>}
          <h1 className='text-2xl font-bold border-b border-gray-300 mb-4 pb-2'>WorkExperience</h1>
          <form className='space-y-4'>
            <input 
              type='text' 
              className={`${!statusForm ? style.input : style.inputRed} w-full`} 
              placeholder='Job title'
              name='jobTitle'
              value={formWorkExperience.jobTitle}
              onChange={handleChangeInput}
            >    
            </input>
            <input 
              type='text' 
              className={`${!statusForm ? style.input : style.inputRed} w-full`} 
              placeholder='Company'
              name='company'
              value={formWorkExperience.company}
              onChange={handleChangeInput}
            >
            </input>
            <div className='flex space-x-3'>
              <input type='checkbox' checked={formWorkExperience.stick} name='stick' onChange={handleChangeInput}/>
              <p>I am currently working here</p>
            </div>
            <div className='flex'>
              <p className='w-1/2 text-gray-400'>From</p>
              <p className='w-1/2 text-gray-400'>To</p>
            </div>
            <div className='flex justify-between'>
            <select className={!statusForm ? style.leSelect : style.leSelectRed} value={formWorkExperience.from.moth} name='form moth' onChange={handleChangeInput}>
              {moth.map((item, index) =>
                <option key={index} value={item}>{item}</option>)}
            </select>
            <select className={!statusForm ? style.leSelect : style.leSelectRed} value={formWorkExperience.from.year} name='form years' onChange={handleChangeInput}>
              {years.map((item, index) =>
                <option key={index} value={item}>{item}</option>)}
            </select>
            <select className={!statusForm ? style.leSelect : style.leSelectRed} value={formWorkExperience.to.moth} name='to moth' onChange={handleChangeInput}>
              {moth.map((item, index) =>
                <option key={index} value={item}>{item}</option>)}
            </select>
            <select className={!statusForm ? style.leSelect : style.leSelectRed} value={formWorkExperience.to.year} name='to years' onChange={handleChangeInput}>
              {years.map((item, index) =>
                <option key={index} value={item}>{item}</option>)}
            </select>
            </div>
            <p className='text-gray-400'>Description</p>
            <textarea 
              className='w-full h-[150px] border border-gray-300 rounded-lg outline-0 mt-4' 
              name='decription' 
              value={formWorkExperience.decription}
              onChange={handleChangeInput}>  
            </textarea>
            {buttoncustom('workExperience')}

          </form>
        </div>
      </div>
    )
  };

  function skills() {

    return(
      <div className='p-5 flex justify-between'>
        <div>
          
          <h1 className=' font-bold text-2xl mb-2 border-b border-gray-400 py-4'>Skills</h1>
          <div className='flex space-x-4'>
            {skillsState && skillsState.map((skill, index) => <div key={index} className='rounded-full bg-[rgba(219,217,217,0.5)] p-2'><span>{skill}</span></div>)}
          </div>
        </div>
        {OppenModel('editSkills')}

      </div>
    )
  };

  function editSkills() {

    return(
      <div className='p-5 '>
        <h1 className=' font-bold text-2xl mb-2 border-b border-gray-400 py-4'>Skills</h1>
        <input 
          type='text' 
          placeholder='skill' 
          className={`${style.input} w-full mb-4` } 
          value={skillsState[skillsState.length - 1]} 
          onChange={(e)=>{const skills = [...skillsState]; const skillPost = skills.push(e.target.value); setSkillsState(skills)}}/>
        {buttoncustom('skills')}
      </div>
    )
  };

  function education() {

    return(
      <div className='p-5 flex justify-between'>
        <div>
          <h1 className=' font-bold text-2xl mb-2'>Education</h1>
          <p className='border-gray-400'>Share your background education</p>

        </div>
        {OppenModel('editEducation')}
      </div>
    )
  };

 function editEducation() {
    const handleOnChangeInput = (e: any)=>{
      const {name, value, type, checked } = e.target;

      if(name.includes('form')){
        const key = name.slice(5)
        setEducationState({
          ...educationState,
          from:{
            ...educationState.from,
            [key]: value
          }
         })
       };
       if(name.includes('to')){
        const key = name.slice(3)
        setEducationState({
          ...educationState,
          from:{
            ...educationState.from,
            [key]: value
          }
         })
       };
      setEducationState({
        ...educationState,
        [name]: type === 'checkbox' ? checked : value
      })
         
    }
    return(
      <div className='p-5'>
        {statusForm && <h1 className='text-center text-red-500 text-xl mb-2'>Xin hãy nhập đầy đủ, chính xác các thông tin và thử lại!</h1>}
        <h1 className='text-2xl font-bold border-b border-gray-300 mb-4 pb-2'>Education</h1>
        <form className='space-y-4'>
          <input 
            type='text' 
            className={`${!statusForm ? style.input : style.inputRed} w-full`} 
            placeholder='Major'
            name='major'
            value={educationState.major}
            onChange={handleOnChangeInput}
          ></input>
          <input 
            type='text' 
            className={`${!statusForm ? style.input : style.inputRed} w-full`} 
            placeholder='School'
            name='school'
            value={educationState.school}
            onChange={handleOnChangeInput}
          ></input>
          <div className='flex space-x-3'>
          <input type='checkbox' checked={educationState.stick} name='stick' onChange={handleOnChangeInput}/>
            <p>I am currently studyng here</p>
          </div>
          <div className='flex'>
            <p className='w-1/2 text-gray-400'>From</p>
            <p className='w-1/2 text-gray-400'>To</p>
          </div>
          <div className='flex justify-between'>
          <select className={!statusForm ? style.leSelect : style.leSelectRed} value={formWorkExperience.from.moth} name='form moth' onChange={handleOnChangeInput}>
            {moth.map((item, index) =>
              <option key={index} value={item}>{item}</option>)}
          </select>
          <select className={!statusForm ? style.leSelect : style.leSelectRed} value={formWorkExperience.from.year} name='form years' onChange={handleOnChangeInput}>
            {years.map((item, index) =>
              <option key={index} value={item}>{item}</option>)}
          </select>
          <select className={!statusForm ? style.leSelect : style.leSelectRed} value={formWorkExperience.to.moth} name='to moth' onChange={handleOnChangeInput}>
            {moth.map((item, index) =>
              <option key={index} value={item}>{item}</option>)}
          </select>
          <select className={!statusForm ? style.leSelect : style.leSelectRed} value={formWorkExperience.to.year} name='to years' onChange={handleOnChangeInput}>
            {years.map((item, index) =>
              <option key={index} value={item}>{item}</option>)}
          </select>       
          </div>
          <p className='text-gray-400'>Description</p>
          <textarea 
            className='w-full h-[150px] border border-gray-300 rounded-lg outline-0 mt-4' 
            value={educationState.decription} 
            name='decription'
            onChange={handleOnChangeInput}
          ></textarea>
          {buttoncustom('education')}

        </form>
      </div>
    )
  };

  function certificates() {

    return(
      <div className='p-5 flex justify-between'>
        <div>
          <h1 className=' font-bold text-2xl mb-2'>Certificates</h1>
          <p className='border-gray-400'>Provides evidence of your specific expertise and skills</p>

        </div>
        {OppenModel('editCertificates')}
      </div>
    )
  };

  function editCertificates() {
    const handleOnChangeInput = (e: any)=>{
      const {name, value, type, checked} = e.target;

      if(name.includes('form')){
        const key = name.slice(5)
        setCertificatesState({
          ...certificatesState,
          from:{
            ...certificatesState.from,
            [key]: value
          }
         })
       };
       if(name.includes('to')){
        const key = name.slice(3)
        setCertificatesState({
          ...certificatesState,
          from:{
            ...certificatesState.from,
            [key]: value
          }
         })
       };
      setCertificatesState({
        ...certificatesState,
        [name]: type === 'checkbox' ? checked : value
      })
         
    }
    return(
      <div className='p-5'>
        {statusForm && <h1 className='text-center text-red-500 text-xl'>Xin hãy nhập đầy đủ, chính xác các thông tin cần thiết và thử lại</h1>}
        <h1 className='text-2xl font-bold border-b border-gray-300 mb-4 pb-2'>Certificates</h1>
        <form className='space-y-4'>
        <input 
          type='text' 
          className={`${!statusForm ? style.input : style.inputRed} w-full`} 
          placeholder='Certificates name'
          name='ertificatesName'
          value={certificatesState.certificatesName}
          onChange={handleOnChangeInput}
        ></input>
        <input 
          type='text' 
          className={`${!statusForm ? style.input : style.inputRed} w-full`} 
          placeholder='Organization'
          name='organization'
          value={certificatesState.organization}
          onChange={handleOnChangeInput}
        ></input>
          <div className='flex space-x-3'>
          <input type='checkbox' checked={certificatesState.stick} name='stick' onChange={handleOnChangeInput}/>
            <p>No expiration date</p>
          </div>
          <div className='flex'>
            <p className='w-1/2 text-gray-400'>From</p>
            <p className='w-1/2 text-gray-400'>To</p>
          </div>
          <div className='flex justify-between'>
          <select className={!statusForm ? style.leSelect : style.leSelectRed} value={certificatesState.from.moth} name='form moth' onChange={handleOnChangeInput}>
            {moth.map((item, index) =>
              <option key={index} value={item}>{item}</option>)}
          </select>
          <select className={!statusForm ? style.leSelect : style.leSelectRed} value={certificatesState.from.year} name='form years' onChange={handleOnChangeInput}>
            {years.map((item, index) =>
              <option key={index} value={item}>{item}</option>)}
          </select>
          <select className={!statusForm ? style.leSelect : style.leSelectRed} value={certificatesState.to.moth} name='to moth' onChange={handleOnChangeInput}>
            {moth.map((item, index) =>
              <option key={index} value={item}>{item}</option>)}
          </select>
          <select className={!statusForm ? style.leSelect : style.leSelectRed} value={certificatesState.to.year} name='to years' onChange={handleOnChangeInput}>
            {years.map((item, index) =>
              <option key={index} value={item}>{item}</option>)}
          </select>         
          </div>
          <p className='text-gray-400'>Description</p>
          <textarea 
            className='w-full h-[150px] border border-gray-300 rounded-lg outline-0 mt-4'
            value={certificatesState.decription}
            name='decription'
            onChange={handleOnChangeInput}></textarea>
          {buttoncustom('certificates')}

        </form>
      </div>
    )
  };

  function awardsHonors() {

    return(
      <div className='p-5 flex justify-between'>
        <div>
          <h1 className=' font-bold text-2xl mb-2'>Awards & Honors</h1>
          <p className='border-gray-400'>PShowcase your results and accomplishments during the job</p>

        </div>
        {OppenModel('editAwardsHonors')}
      </div>
    )
  };

  function editAwardsHonors(){
    const handleOnChangeInput = (e: any)=>{
      const {name, value, type, checked} = e.target;

      if(name.includes('form')){
        const key = name.slice(5)
        setAwardsHonorsState({
          ...awardsHonorsState,
          from:{
            ...awardsHonorsState.from,
            [key]: value
          }
         })
       };

      setAwardsHonorsState({
        ...awardsHonorsState,
        [name]: type === 'checkbox' ? checked : value
      })
         
    }
    return(
      <div className='p-5'>
        {statusForm && <h1 className='text-center text-red-500 text-xl'>Xin hãy nhập đầy đủ, chính xác các thông tin cần thiết và thử lại</h1>}
        <h1 className='text-2xl font-bold border-b border-gray-300 mb-4 pb-2'>Awards & Honors</h1>
        <form className='space-y-4'>
          <input 
            type='text' 
            className={`${!statusForm ? style.input : style.inputRed} w-full`} 
            placeholder='Awards/Honors name'
            name='awardsHonorsName'
            value={awardsHonorsState.awardsHonorsName}
            onChange={handleOnChangeInput}
          ></input>
          <input 
            type='text' 
            className={`${!statusForm ? style.input : style.inputRed} w-full`} 
            placeholder='Organization'
            name='organization'
            value={awardsHonorsState.organization}
            onChange={handleOnChangeInput}
          ></input>
          <div className='flex space-x-3'>
            <input type='checkbox' checked={awardsHonorsState.stick} name='stick' onChange={handleOnChangeInput}/>
            <p>Issue date *</p>
          </div>
          <div className='flex space-x-4 w-1/2'>
          <select className={!statusForm ? style.leSelect : style.leSelectRed} value={awardsHonorsState.from.moth} name='from moth' onChange={handleOnChangeInput}>
            {moth.map((item, index) =>
              <option key={index} value={item}>{item}</option>)}
          </select>
          <select className={!statusForm ? style.leSelect : style.leSelectRed} value={awardsHonorsState.from.year} name='from years' onChange={handleOnChangeInput}>
            {years.map((item, index) =>
              <option key={index} value={item}>{item}</option>)}
          </select>  
          </div>
          <p className='text-gray-400'>Description</p>
          <textarea 
            className='w-full h-[150px] border border-gray-300 rounded-lg outline-0 mt-4'
            value={awardsHonorsState.decription}
            onChange={handleOnChangeInput}
            name='decription'></textarea>
          {buttoncustom('awardsHonors')}

        </form>
      </div>
    )
  };

  function personalProject(){

    return(
      <div className='p-5 flex justify-between'>
        <div>
          <h1 className=' font-bold text-2xl mb-2'>Personal Project</h1>
          <p className='border-gray-400'>List some relevant projects to show how you applied your capabilities</p>

        </div>
        {OppenModel('editPersonalProject')}
      </div>
    )
  };

  function editPersonalProject(){
    const handleOnChangeInput = (e: any)=>{
      const {name, value, type, checked} = e.target;

      if(name.includes('form')){
        const key = name.slice(5)
        setPersonalProjectState({
          ...personalProjectState,
          from:{
            ...personalProjectState.from,
            [key]: value
          }
         })
       };

      setPersonalProjectState({
        ...personalProjectState,
        [name]: type === 'checkbox' ? checked : value
      })
         
    }
    return(
      <div className='p-5'>
        {statusForm && <h1 className='text-center text-red-500 text-xl mb-2'>Xin hãy nhập đầy đủ, chính xác các thông tin cần thiết và thử lại</h1>}
        <h1 className='text-2xl font-bold border-b border-gray-300 mb-4 pb-2'>Personal Project</h1>
        <form className='space-y-4'>
          <input 
            type='text' 
            className={`${!statusForm ? style.input : style.inputRed} w-full`} 
            placeholder='Project Name'
            value={personalProjectState.projectName}
            name='ProjectName'
            onChange={handleOnChangeInput}
          ></input>

          <div className='flex space-x-3'>
            <input type='checkbox'/>
            <p>I am working on this project *</p>
          </div>
          <div className='flex'>
            <p className='w-1/2 text-gray-400'>From</p>
            <p className='w-1/2 text-gray-400'>To</p>
          </div>
          <div className='flex justify-between'>
          <select className={!statusForm ? style.leSelect : style.leSelectRed} value={personalProjectState.from.moth} name='form moth' onChange={handleOnChangeInput}>
            {moth.map((item, index) =>
              <option key={index} value={item}>{item}</option>)}
          </select>
          <select className={!statusForm ? style.leSelect : style.leSelectRed} value={personalProjectState.from.year} name='form years' onChange={handleOnChangeInput}>
            {years.map((item, index) =>
              <option key={index} value={item}>{item}</option>)}
          </select>
          <select className={!statusForm ? style.leSelect : style.leSelectRed} value={personalProjectState.to.moth} name='to moth' onChange={handleOnChangeInput}>
            {moth.map((item, index) =>
              <option key={index} value={item}>{item}</option>)}
          </select>
          <select className={!statusForm ? style.leSelect : style.leSelectRed} value={personalProjectState.to.year} name='to years' onChange={handleOnChangeInput}>
            {years.map((item, index) =>
              <option key={index} value={item}>{item}</option>)}
          </select>                
          </div>
          <p className='text-gray-400'>Description</p>
          <textarea 
            className='w-full h-[150px] border border-gray-300 rounded-lg outline-0 mt-4'
            value={personalProjectState.decription}
            name='decription'
            onChange={handleOnChangeInput}
          ></textarea>
          <input 
            type='text' 
            className={`${!statusForm ? style.input : style.inputRed} w-full `} 
            placeholder='Project URL'
            value={personalProjectState.url}
            name='url'
            onChange={handleOnChangeInput}
          ></input>
          {buttoncustom('personalProject')}

        </form>
      </div>
    )
  };


  return (
    <div className=' w-3/5   my-10 space-y-9 '>

        <div className=' rounded-lg border bg-white w-full py-5  px-5'>
          {openEdit === 'editUserCard' ? editUserCard() : userCard()}
        </div>
    

        <div className=' rounded-lg border bg-white w-full  '> 
          {openEdit === 'editAbountMe' ? editAbountMe() : abountMe()} 
        </div>

        <div className=' rounded-lg border bg-white w-full '>
          {openEdit === 'editWorkExperience' ? editWorkExperience() : workExperience()}
        </div>

        <div className=' rounded-lg border bg-white w-full '>
          {openEdit === 'editSkills' ? editSkills() :  skills()}
        </div>

        <div className=' rounded-lg border bg-white w-full '>
          {openEdit === 'editEducation'? editEducation() : education()}
        </div>

        <div className=' rounded-lg border bg-white w-full '>
          {openEdit === 'editCertificates'? editCertificates() : certificates()}
        </div>

        <div className=' rounded-lg border bg-white w-full '>
          {openEdit === 'editAwardsHonors'? editAwardsHonors() : awardsHonors()}
        </div>

        <div className=' rounded-lg border bg-white w-full '>
          {openEdit === 'editPersonalProject'? editPersonalProject() : personalProject()}
        </div>
      
        
    </div>
  )
}

