'use client'
import { useRef } from 'react'
import React from 'react'
import jsPDF from 'jspdf'

import Cv1 from '../toolCv/cvTemplate/listCv/cv1';
import { Html2CanvasOptions } from 'jspdf';
import html2canvas from 'html2canvas';




export default function Page() {
  const hahahahaRef = useRef<HTMLDivElement>(null);
  

  const handleGeneratePdf = () => {
    const input = document.getElementById('app')
    if(!input) return 0
    html2canvas(input, {logging: true, useCORS: true}).then(canvas =>{
      const imgWidth = 400;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const imgData = canvas.toDataURL('img/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('myPdf.pdf')
    })
  };


  return (
    <div id='xnxx' className='pt-[95px]'>
      <div className='space-y-4' id='test'>
   

        <div  ref={hahahahaRef} id='app'>
          <div className='mt-3 space-y-3 '>
              <div className='flex space-x-2 text-[14px] text-gray-800'>
                  <strong>
                      <p>dai hoc a</p>  
                  </strong>
                  <div className='w-[1px] bg-black'></div>
                  <strong >
                      <p>2021  2023</p>
                  </strong>
              </div>

              <strong className='text-gray-800 text-[13px] '>
                  <p className='mt-3'>chuyên ngành mạng máy tính</p>
              </strong>

              <p className='text-[13px] border border-black p-2'>tot nghiep loai gioi</p>
              <div className='flex justify-center'>
                  <div className='w-full border-b border-dashed border-gray-200'></div>
              </div>
            </div>
          </div>
      </div>

      <button onClick={handleGeneratePdf} >click tui ne</button>

    </div>
  )
}
