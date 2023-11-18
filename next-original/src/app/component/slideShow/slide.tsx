'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Spotlight from './spotlight';

const data =[
  {
    company: {
      logo: 'https://tse2.mm.bing.net/th?id=OIP.DHatbVyoB8le7BjSiov8OgHaE7&pid=Api&P=0&h=180',
      image:'https://tse3.explicit.bing.net/th?id=OIP.e7W0j7adJtaSVaNdiBOQZQHaEf&pid=Api&P=0&h=180',
      name: 'VNG',
      address: 'Hà Nội - HCM',
      title: "ideal place to work, keep writing passion"
    },
    jobs:{
      name:["intern .Net", "Global Application Service Manager","Frontend Technical Lead (React, HTML, CSS)"],
      quantity: 5
    }
  },
  {
    company: {
      logo: 'https://tse2.mm.bing.net/th?id=OIP.PjN-bwTxCweOovB61MIyuAHaFm&pid=Api&P=0&h=180',
      image: 'https://tse1.mm.bing.net/th?id=OIP.Kb7JOOZmaMQJ45rAAuFAJAHaE8&pid=Api&P=0&h=180',
      name: 'Viettel Group',
      address: 'Hà Nội - HCM',
      title: "ideal place to work, keep writing passion ideal place to work, keep writing passion ideal place to work, keep writing passion"
    },
    jobs:{
      name:["intern .Net", "Global Application Service Manager","Frontend Technical Lead (React, HTML, CSS)"],
      quantity: 5
    }
  },
  {
    company: {
      logo: 'https://tse3.mm.bing.net/th?id=OIP.4ZnC2cHdBhTA_Vy5fAOypQHaHa&pid=Api&P=0&h=180',
      image: 'https://tse3.mm.bing.net/th?id=OIP.oYLhHMUPIB3WH2XQZEU3EgHaEM&pid=Api&P=0&h=180',
      name: 'Soha Game',
      address: 'Hà Nội - HCM',
      title: "ideal place to work, keep writing passion"
    },
    jobs:{
      name:["intern .Net", "Global Application Service Manager","Frontend Technical Lead (React, HTML, CSS)"],
      quantity: 5
    }
  }
]

export default function Slideshow(){
  const [slideIndex, setSlideIndex] = useState(0);
 

 
  useEffect(() => {
    const timer = setTimeout(() => {
      changeSlide(1);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  },[slideIndex]);
  
  const handleChangeSlide = () => {
    changeSlide(1);
  };

  const showSlide = (index:any) => {
    const slides = document.getElementsByClassName('slide') as HTMLCollectionOf<HTMLElement>;

    if (index >= slides.length) {
      setSlideIndex(0);
    } else if (index < 0) {
      setSlideIndex(slides.length - 1);
    } else {
      setSlideIndex(index);
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[slideIndex].style.display = 'block';
  };

  const changeSlide = (n: any) => {
    showSlide(slideIndex + n);
  };
  
  const slide = (listSlide: any)=>{

    const content = listSlide.map((spotlight: any,index: any)=>{
      return (
        <div key={index} className="slide fade  h-full w-full  ">
            <Spotlight spotlight={spotlight}></Spotlight>
        </div>
      )
    })    
    return content
  };


  return (
    <div className="slideshow-container h-full w-full rounded-lg">

       {slide(data)}

      <a className="prev" onClick={() => changeSlide(-1)}>
        &#10094;
      </a>
      <a className="next" onClick={() => changeSlide(1)}>
        &#10095;
      </a>
    </div>
  );
};

