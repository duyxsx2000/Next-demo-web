'use client'
import React,{useState, useRef, useEffect} from 'react'
import Link from 'next/link'
import { DownOutlined, EnvironmentOutlined, SearchOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
type Props = {
  dataSearch:{
    city: Array<string>,
    jobSunggest: Array<string>
  }
}
export default function Search({dataSearch}: Props) {

  const [city,setCity] = useState<string>("All Cities")
  const [openList,setOpenList] = useState<boolean>(false)
  const [inputValue,setInputValue] = useState<string>('')
  const containerRef = useRef<HTMLDivElement | null>(null);
  const data = {city:{city}, value:{inputValue}}
  const route = useRouter()
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpenList(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  }

  const search = () =>{
    const dataSearch = {
      keySearch: inputValue,
      city: city
    }
    console.log(dataSearch);
    route.push(`/jobs/${inputValue}/${city}`)
      
  }


    return (
      <div className=' relative bg-gradient-to-r from-black12 from-50% to-pink-900 h-h324 flex flex-col justify-center items-center'>
        <div className=' w-2/4 h-4/5'>
            <h1 className='  text-white text-2xl '>99999+ Jobs For Developer</h1>
            <form className=' mt-4 '>
              <div className=' flex justify-between h-14'>

                <div ref={containerRef} onClick={()=>{!openList ? setOpenList(true) : setOpenList(false)}} className=' relative flex py-2 justify-between items-center rounded-lg w-1/5 h-full bg-white '>
                    
                  <div className='flex justify-cencer ml-4 items-center'>
                    <EnvironmentOutlined />
                    <h1 className=' grow m-3'>{city}</h1>
                    <DownOutlined />
                  </div>


                  {openList && 
                    <ul className='absolute flex flex-col justify-between top-full m-1 rounded bg-white  w-full h-36 '>
                      {dataSearch.city.map((city,index)=>{
                        return <li key={index} onClick={()=>setCity(city)} className='p-1 font-bold text-gray-500 hover:bg-pink-100 hover:text-black'>{city}</li>
                      })}
                    </ul>
                  }
  
                </div>

                <input type='text' 
                  value={inputValue}
                  onChange={handleInputChange} 
                  placeholder='Enter Keyword skill, Jb title,Compani...' 
                  className=' grow mx-2 rounded-lg h-full outline-0  text-xl '
                  style={{ paddingLeft: '10px' }}
                />
                <div onClick={search} className=' flex items-center justify-center py-3 rounded-lg font-bold text-white bg-red-500 w-1/5 h-full hover:bg-red-700'>
                <SearchOutlined className='mr-2'/>
                <button  type="button" ><p>Search</p></button>

                </div>
                

              </div>
            </form>

            <div className='flex  h-10 mt-12'>

              <div className='flex items-center text-white h-full'><p>Suggestions for you :</p></div>

              <div className='flex space-x-8 ml-3 text-gray-400 h-full '>
                {dataSearch.jobSunggest.map((jobSunggest, index)=>{
                  return (<div key={index}> <Link  className='flex items-center p-2 font-bold border border-D3B3D3 rounded-full hover:bg-gray-700 hover:text-white' href='/#'>{jobSunggest}</Link></div> )
                })}            
              </div>

            </div>

        </div>
    
      </div>
    )
}
