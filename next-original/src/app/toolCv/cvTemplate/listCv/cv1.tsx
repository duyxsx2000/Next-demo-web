'use client'

import React, { useRef, useState } from 'react'
import { 
  PhoneOutlined,
  GoogleOutlined ,
  GlobalOutlined,
  HomeOutlined
} from '@ant-design/icons'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { Frame } from '../../component/smallComponent'
type DataItem = {
    title: string | null,
    date: string | null,
    smallItem?: {
        title: string | null,
        content: string | null,
    }[]

}
export default function Cv1() {
    const test = useRef<HTMLDivElement>(null)
    const test1 = useRef<HTMLDivElement>(null)
    const [content, setContent] = useState("Nhấn đúp chuột để chỉnh sửa văn bản.");

    const handleContentChange = (e: any) => {
      setContent(e.target.innerHTML);
    };

    const handleKeyPress = (e: any) => {
        if (e.key === 'Enter') {
          document.execCommand('insertHTML', false, '<br>');
          e.preventDefault();
        }
      };
    
    const handleGeneratePdf = () => {

        const input = test.current
        setTimeout(() => {
            
            if(!input) return 0
            html2canvas(input, {logging: true, useCORS: true}).then(canvas =>{
                console.log(canvas,'canvas');
                
              const imgWidth = 210;
              const imgHeight = canvas.height * imgWidth / canvas.width;
              const imgData = canvas.toDataURL('img/png');
              const pdf = new jsPDF('p', 'mm', 'a4');
              pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
              pdf.save('myPdf.pdf')
            })
        }, 1000)

    };
   
    function personalInformation(){
        return (
            <div className='px-2 mb-4 '>
                <Frame title='THÔNG TIN LIÊN LẠC' borderColor={null}/>
                <div className='space-y-3 mt-4'>
                    <div className='flex items-center'><PhoneOutlined className='mr-2' />0986514569</div>
                    <div className='flex items-center'><GoogleOutlined className='mr-2' />z1992@gmail.com</div>
                    <div className='flex items-center'><GlobalOutlined className='mr-2'/>www.it.dream.com</div>
                    <div className='flex items-center'><HomeOutlined className='mr-2'/>Nguyên Huệ, Hà Nội</div>
                </div>
            </div>
        )
    };
    
    const data: DataItem[] = [
         {
            title: 'TRƯỜNG ĐH IDFREAM',
            date: '2019 - 2023',
            smallItem: [
                {
                    title: 'Chuyên ngành Mạng máy tính',
                    content: 'Tốt nghiệp loại giỏi'
                }
            ]
        },
         {
            title: 'Công ty HTYU',
            date: '2019 - 2023',
            smallItem: [
                {
                    title: 'fontEnd Developer',
                    content: 'Đảm nhiệm vị trí fontend developer thiết kế giao diện người dùng bằng reactjs'
                }
            ]
        },
        {
            title: 'Công ty LOPI',
            date: '2023 - 2024',
            smallItem: [
                {
                    title: 'BackEnd Developer',
                    content: 'Đảm nhiệm vị trí BackEnd developer thiết kế, triển khai hệ thống BackEnd Api cho trang web bằng Nodejs(express)'
                }
            ]
        },
         {
            title: 'CUỘC THI TÀO LAO',
            date: '2019',
            smallItem: [
                {
                    title: 'Gải nhất',
                    content: 'Fix bug '
                }
            ]
        },
        {
            title: null,
            date: null,
            smallItem: [
                {
                    title: null,
                    content: 'Chơi game'
                },
                {
                    title: null,
                    content: 'Nghe nhạc'
                },
                {
                    title: null,
                    content: 'Dộc sách'
                }
            ]
        },
        {
            title: 'CUỘC THI Coder',
            date: '2019',
            smallItem: [
                {
                    title: 'Gải nhất',
                    content: '...... '
                }
            ]
        },
    ]
    function contentBlock(title: string, content: DataItem[]){

        return(
            <div className='mb-4'>
                <Frame title={title} borderColor={null} />
                {content.map((element, index) => (
                    <div key={index} className='mt-3 space-y-3 '>

                        <div className='flex space-x-2  text-gray-800'>
                            <strong>
                                <p>{element.title}</p>  
                            </strong>
                            <div className='w-[1px] bg-black'></div>
                            <strong >
                                <p>{element.date}</p>
                            </strong>
                        </div>
                        
                        {element.smallItem && element.smallItem.map((item) => (
                            <>
                                <strong className='text-gray-800  '>
                                    <p className='ml-3'>{item.title}</p>
                                </strong>
                                <p className='indent-6'>{item.content}</p>
                            </>
                        ))}
            
                        <div className='flex justify-center'>
                            <div className='w-full border-b border-dashed border-gray-200'></div>
                        </div>
                    </div>
                ))}
            </div>
        )

    };

    function contentBlock1() {
        return(
            <div>
                <Frame title='KỸ NĂNG' borderColor={null} />
                    <div className='mt-4 space-y-3  '>
                        <div>
                            <strong><p>FrontEnd</p></strong>
                            <p className='pl-2'>- Html/Css Javascrip, TypeScrip</p>
                            <p className='pl-2'>- Ant Design, Tailwind Css</p>
                            <p className='pl-2'>- Reactjs, Next13</p><br/>
                            <strong><p>BackEnd</p></strong>
                            <p className='pl-2'>{'- NodeJs(express), monggodb'}</p><br/>
                            <strong><p>English reading comprehension</p></strong><br/>
                            <strong><p>Self-study and group work skills</p></strong>
                        </div>
                </div>
            </div>
        )
    } 
    function contentBlock2 (){
        return(
            <>
                <Frame title='MỤC TIÊU' borderColor={null} />
                <div className='mt-3 pl-2  '>
                    <p className='indent-6 text-justify'>Tìm kiếm cơ hội thực tập Frontend Developer để áp dụng và phát triển kỹ năng lập trình và thiết kế web của tôi. Mong muốn đóng góp vào môi trường làm việc động độc đáo và học hỏi, nơi tôi có thể tận dụng kiến thức của mình về HTML, CSS, JavaScript và ReactJS. Đam mê sáng tạo, tôi muốn tham gia xây dựng trải nghiệm người dùng xuất sắc và đóng góp vào quá trình phát triển sản phẩm thông qua việc học hỏi liên tục và sự cam kết đối với chất lượng mã nguồn và thiết kế sáng tạo.</p>
                    <p  className='indent-6 text-justify'>Tìm kiếm cơ hội thực tập Frontend Developer để áp dụng và phát triển kỹ năng lập trình và thiết kế web</p>
                </div>
            </>
           
        )
    }

    function cv () {
        return(
            <div className='flex   ' id='app' ref={test}  >
                <div className='w-2/5 h-[1200px] px-2 bg-gradient-to-tl from-transparent to-orange-100'>
                    <div className='p-3 flex justify-center items-center'>
                    <div className='rounded-full bg-blue-gray-400 w-[200px] h-[200px]'></div>
                    </div>
                    <p className='text-2xl mt-4 text-center'>Nguyên Văn Z</p>
                    <p className='text-xl mt-4 text-center'>FontEnd Developer</p>
                    {personalInformation()}
                    {contentBlock1()}
                    {contentBlock("SỞ THÍCH", [data[4]])}
                </div>
                <div className='w-3/5 h-full px-3 space-y-5'>
                    {contentBlock2()}
                    {contentBlock('HỌC VẤN',[data[0]])}
                    {contentBlock('KINH NGHIỆM', [data[1], data[2]] )}
                    {contentBlock('GIẢI THƯỞNG', [data[3],data[5]])}
                </div>
               
            </div>
        )

    }

  return (
    <>
    {cv()}

    <button onClick={()=>handleGeneratePdf()}>click meeee</button>


    </>
 
  )
}
