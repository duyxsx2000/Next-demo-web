'use client'

import Footer from '@/app/component/footer';
import postRegisterForEmployers from '@/app/lip/postDataRegisterForEmployers';
import Link from 'next/link';
import React,{useState} from 'react'

export default  function  PageRegisterForEmployers() {

    const [fullName, setFullName] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [workEmail, setWorkEmail] = useState<string>("");
    const [phone, setPhone] = useState<any>();
    const [companyLocation, setCompanyLocation] = useState<string[]>([]);
    const [companyName, setCompanyName] = useState<string>("");
    const [websiteUrl, setWebsiteUrl] = useState<string>("");
    const [rules, setRules] = useState<boolean>(false);
    const [notification,setNoticucation] = useState<string>('')

    const style ={
        input:'border w-full p-2 rounded-lg outline-0 bg-[rgba(194,195,196,0.14)] border-[rgba(194,195,196,0.14)]',
        linkButton: ' rounded-lg py-4 w-[90px] text-center  bg-red-500 text-white font-bold hover:bg-red-900'
    };
    
    const handleCheckboxChange = (company: string) => {
        setCompanyLocation([...companyLocation,company])
    };

    const handleFullnameChage = (e: any) =>{
          setFullName(e.target.value)
    };

    const handleClick = async () => {

        if(!rules) return null;
        
        const dataPost = {
            fullName: fullName,
            title: title,
            workEmail: workEmail,
            phone: phone,
            companyLocation: companyLocation,
            companyName: companyName,
            websiteUrl: websiteUrl
        };

        if(!dataPost 
            || !dataPost.fullName 
            || !dataPost.title 
            || !dataPost.workEmail 
            || !dataPost.phone 
            || !dataPost.companyName 
            || !dataPost.websiteUrl 
        ){setNoticucation('no content')}
        else{
            setNoticucation('done')

            try {
                const response = await  postRegisterForEmployers(dataPost, 'register for employers')
                const Notification = await response
                console.log(notification,'done');
                
                
            } catch (error) {
                console.log(error,'error');
                     
            }

        }

    };

  if(notification === "done")
  return(
    <main>
        <div className='bg-[rgba(194,195,196,0.14)] pt-40 px-40 pb-20 font-bold h-[800px]'>
            <h1 className='font-bold text-2xl text-center'>The information has been submitted successfully, please wait for the administrator to check and contact you later</h1>
            <div className=' mt-10'>
                <p className='text-center'>you can choose!</p>
                <div className='flex space-x-4 justify-center mt-4'>
                    <Link className={style.linkButton} href="/">Home</Link>
                    <Link className={style.linkButton} href="/jobs">All Jobs</Link>
                </div>
            </div>

        </div>
        <Footer/>
    </main>
    );

  return ( 
    <main>
        <div className='bg-[rgba(194,195,196,0.14)] pt-40 px-40 pb-20 font-bold'>
            <form className={` shadow-2xl w-[800px] space-y-4 p-8 bg-white rounded-lg ${notification === "no content" ? 'border border-red-800' : ""}`}>
                {notification === "no content" ? <h2 className='font-bold text-red-700 '>Please fill in complete and accurate information!!!!!!</h2> : <></>}

                <div>
                    <label>full name</label><br/>
                    <input className={style.input} type='text' value={fullName} onChange={(e)=> handleFullnameChage(e)}/>
                </div>
                
                <div>
                    <label>Title</label><br/>
                    <input className={style.input} type='text' value={title} onChange={(e)=> setTitle(e.target.value)}/>
                </div>

                <div className='flex justify-between'>

                    <div className=''>
                        <label>Work Email</label><br/>
                        <input className={style.input} type='email' value={workEmail} onChange={(e)=> setWorkEmail(e.target.value)}/>
                    </div>

                    <div>
                        <label>Phone Number</label><br/>
                        <input className={style.input} type='number' value={phone} onChange={(e)=> setPhone(e.target.value)}/>
                    </div>

                </div>

                <div>

                    <label>company location</label><br/>
                    <div className='flex space-x-3'>

                        <div >
                            <input type="checkbox" onChange={()=>handleCheckboxChange('Hà Nội')}/>
                            <label>Ha Noi</label>
                        </div>

                        <div>
                            <input type="checkbox"  onChange={()=>handleCheckboxChange('Hồ Chí Minh')} />
                            <label>Hồ Chí Minh</label>
                        </div>

                        <div>
                            <input type="checkbox"  onChange={()=>handleCheckboxChange('Đà Nẵng')} />
                            <label>Đà Nẵng</label>
                        </div>

                        <div>
                            <input type="checkbox" onChange={()=>handleCheckboxChange('others')}/>
                            <label>Others</label>
                        </div>
                    </div>

                </div>

                <div>
                    <label>Company Name</label><br/>
                    <input className={style.input} type='text' value={companyName} onChange={(e)=> setCompanyName(e.target.value)}/>
                </div>

                <div>
                    <label>Website URL</label><br/>
                    <input className={style.input} type='text' value={websiteUrl} onChange={(e)=> setWebsiteUrl(e.target.value)}/>
                </div>

                <div className='flex items-start'>
                    <input type='checkbox'  className='mt-2 mr-2' onChange={() => {!rules ? setRules(true) : setRules(false)}}/>
                    <p className='text-red-700'> I have read and agree to ITviecs Terms & Conditions and Privacy Policy in relation to my privacy information.</p>   
                </div>
                <div className='flex'>
                <button type='button' 
                        onClick={handleClick} 
                        className={`mb-5 w-1/3 border rounded-lg font-bold p-3 text-white ${rules ? 'border-red-800 bg-red-500 hover:bg-red-800 ' : 'bg-[rgba(123,124,122,0.5)]'}  `}
                >
                    <p>Contact Me</p>
                </button><br/>
                <p className='flex ml-2 mb-5 items-center'>
                    <span>already have account an employers</span>
                    <Link href="/#" className='text-blue-900 ml-2'>SignIn</Link>
                </p>
                </div>
            
            </form>
        
        </div>
        <Footer/>

    </main>
    
    
  )
}
