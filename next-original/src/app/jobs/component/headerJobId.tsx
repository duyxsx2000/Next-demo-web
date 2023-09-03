import React from 'react'
import Search from '@/app/component/searchComponent'
import Slideshow from '@/app/component/slideShow/slide'

type Props = {
    dataSearch:{
      city: Array<string>,
      jobSunggest: Array<string>
    }
  }
export default function HeaderJobId({dataSearch} : Props) {

  return (
    <header>

        <div className=' relative '>

            <Search dataSearch={dataSearch}></Search>

            <div className='absolute top-3/4  left-1/2 -translate-x-1/2  bg-white  w-3/4 h-48 rounded-lg'>
                <Slideshow></Slideshow>
            </div>

        </div>

    </header>
  )
}
