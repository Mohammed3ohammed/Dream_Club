import Image from 'next/image';
import img1 from '../../Image/img.jpeg';
import logo1 from '../../Image/logo1.jpg';
import logo2 from '../../Image/logo2.jpg';
import logo3 from '../../Image/logo3.jpg';
import fit1 from '../../Image/fit1.jpg';
import fit2 from '../../Image/fit2.jpg';
import fit3 from '../../Image/fit3.jpg';
// 
import imge1 from "./Image/imag1.jpg";
import imge2 from "./Image/imag2.jpg";
import imge3 from "./Image/imag3.jpg";
import imge4 from "./Image/imag4.jpg";
import imge5 from "./Image/imag5.jpg";
import imge6 from "./Image/imag6.jpg";
import imge7 from "./Image/imag7.jpg";
import imge8 from "./Image/imag8.jpg";
import imge9 from "./Image/imag9.jpg";
import imge10 from "./Image/imag10.jpg";
import imge11 from "./Image/imag11.jpg";
import imge12 from "./Image/imag12.jpg";
import imge13 from "./Image/imag13.jpg";
import imge14 from "./Image/imag14.jpg";
import imge15 from "./Image/imag15.jpg";
// 

const  Home = () => {
  return (
          <>
          <div>
            <Image className='w-full h-[50vh] sm:h-[70vh] lg:h-[80vh] xl:h-[90vh] object-cover' src={img1} alt="" />
        <div className='grid  grid-cols-1 md:grid-cols-4 lg:grid-cols-4 p-4 gap-6 h-96 '>
    <div className='flex justify-center items-center'>
        <div className='bg-white w-full  md:w-80 lg:w-80 rounded-2xl p-3'>
          <div className='text-black flex justify-evenly items-center flex-col'>
            <Image src={logo1} alt="" className="w-16 h-16 " />
      <h1 className="border-b-2 border-solid border-orange-500 p-3">WEGHT LIFTING</h1>
            <p className='p-6'>Dignissimos asperiores vitae velit veniam totarn fuga molestias accusamus alias autem provident. odit ab aliquam dolor eius</p>
          <a href='/contact'>
          <button className='flex border-2  border-solid p-3 rounded-full border-orange-500 text-orange-500'>
              More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1.5" stroke="currentColor" className="size-6 ml-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
          </button>
          </a>
          </div>
        </div>
        </div>  

    <div className='flex justify-center items-center'>
        <div className='bg-white w-full  md:w-80 lg:w-80 flex justify-center rounded-2xl p-3'>
          <div className='text-black flex justify-evenly items-center flex-col'>
          <Image src={logo2} alt="" className='w-16 h-16' />
      <h1 className="border-b-2 border-solid border-orange-500 p-3">RUNING</h1>
            <p className='p-6' >Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius</p>
           <a href='/contact'>
           <button className='flex border-2  border-solid p-3 rounded-full border-orange-500 text-orange-500'>
            More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1.5" stroke="currentColor" className="size-6 ml-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
          </button>
          </a>
          </div>
        </div>
        </div>  

    <div className='flex justify-center items-center'>
        <div className='bg-white w-full  md:w-80 lg:w-80 flex justify-center rounded-2xl p-3'>
          <div className='text-black flex justify-evenly items-center flex-col'>
          <Image src={logo2} alt="" className='w-16 h-16' />
      <h1 className="border-b-2 border-solid border-orange-500 p-3">RUNING</h1>
            <p className='p-6' >Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius</p>
           <a href='/contact'>
           <button className='flex border-2  border-solid p-3 rounded-full border-orange-500 text-orange-500'>
            More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1.5" stroke="currentColor" className="size-6 ml-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
          </button>
          </a>
          </div>
        </div>
        </div>  


 <div className='flex justify-center items-center '>
        <div className='bg-white w-full  md:w-80 lg:w-80 flex justify-center rounded-2xl p-3'>
          <div className='text-black flex justify-evenly items-center flex-col'>
          <Image src={logo3} alt="" className='w-16 h-16' />
      <h1 className="border-b-2 border-solid border-orange-500 p-3">YOGA</h1>
            <p className='p-6'>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ad aliquam dolor eius</p>
            <a href='/contact'>
            <button className='flex border-2  border-solid p-3 rounded-full border-orange-500 text-orange-500'>
              More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  width="1.5" stroke="currentColor" className="size-6 ml-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
    </button>
            </a>
          </div>
        </div>
                </div>   
                </div> 
            </div>
 
            {/* Section 2 */}
            <div className='bg-slate-200  p-10'>
              <h1 className='text-center text-black pt-8 text-2xl'>FITNESS EXPERT</h1>
              <p className='text-zinc-500 text-center w-auto mt-3'>Dignissimos asperiores vitae velit veniam totam fug molestias accusamus alias <br /> autem provident. Odit ab aliquam dolor eius </p>
              <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 '>
    <div className='flex justify-center lg:justify-end'>
        <div className='bg-gray-300 w-auto h-auto sm:w-80 lg:w-80 flex justify-center flex-col rounded-2xl p-3'>

          <a href='/service'>

          <Image src={fit1} alt="" className="w-96 h-96 rounded-xl transform transition duration-300 hover:scale-105 animate-bounceLight" />
          <div className='flex justify-center p-5 gap-5'>
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='w-6 h-6'>
        <path d="M96 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 160 0 64 0 160c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64-32 0c-17.7 0-32-14.3-32-32l0-64c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l32 0 0-64zm448 0l0 64 32 0c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64c0 17.7-14.3 32-32 32l-32 0 0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-160 0-64 0-160c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32zM416 224l0 64-192 0 0-64 192 0z"/>
        </svg>
          </span>
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-6 h-6'>
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
        </svg>
          </span>

          </div> 
          </a>
        {/* */}
        </div>
                </div>  
    <div className='flex justify-center'>
        <div className='bg-gray-300 w-auto h-auto sm:w-80 lg:w-80 flex justify-center flex-col rounded-2xl p-3'>
        <a href=''>
        <Image src={fit2} alt="" className='w-96 h-96 rounded-xl transform transition duration-300 hover:scale-105 animate-bounceLight' />
          <div className='flex justify-center p-5 gap-5'>

          <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='w-6 h-6'>
        <path d="M96 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 160 0 64 0 160c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64-32 0c-17.7 0-32-14.3-32-32l0-64c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l32 0 0-64zm448 0l0 64 32 0c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64c0 17.7-14.3 32-32 32l-32 0 0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-160 0-64 0-160c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32zM416 224l0 64-192 0 0-64 192 0z"/>
        </svg>
          </span>
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-6 h-6'>
        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
        </svg>
          </span>

        </div>
        </a>
        </div>
          </div> 

    <div className='flex justify-center lg:justify-start '>
        <div className='bg-gray-300 w-auto h-auto sm:w-80 lg:w-80 flex justify-center flex-col rounded-2xl p-3'>
         
          <a href='/contact'>
          <Image src={fit3} alt="" className='w-96 h-96 rounded-xl transform transition duration-300 hover:scale-105 animate-bounceLight' />
          <div className='flex justify-center p-5 gap-5'>

        <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='w-6 h-6'>
        <path d="M96 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 160 0 64 0 160c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64-32 0c-17.7 0-32-14.3-32-32l0-64c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l32 0 0-64zm448 0l0 64 32 0c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64c0 17.7-14.3 32-32 32l-32 0 0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-160 0-64 0-160c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32zM416 224l0 64-192 0 0-64 192 0z"/>
        </svg>
        </span>
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-6 h-6'>
        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
        </svg>
        </span>


        </div>
          </a>
          
          </div>
        </div>
                </div>  
                </div> 
                {/*  */}
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 p-3  bg-white'>
                  <div className='flex justify-center items-center flex-col'>
                    <Image src={imge1} alt='' className='w-40 h-40 ' />
                    <p className='text-black mt-3'>ماس مكمل غذائي</p>
                    <span className='text-black text-center'>3000 جنية </span>
                  </div>
                  <div className='flex justify-center items-center flex-col p-5'>
                    <Image src={imge2} alt='' className='w-32 h-32 ' />
                    <p className='text-black mt-3'>واي بروتين مكمل غذائي</p>
                    <span className='text-black'>4000 جنية</span>
                  </div>
                  <div className='flex justify-center items-center flex-col p-5'>
                    <Image src={imge3} alt=''  className='w-40 h-40 ' />
                    <p className='text-black mt-3'>كرياتين أون</p>
                    <span className='text-black'>1900 جنية</span>
                  </div>
                  <div className='flex justify-center items-center flex-col p-5'>
                    <Image src={imge4} alt='' className='w-40 h-40 ' />
                    <p className='text-black mt-3'>ريد ريكس كرياتين</p>
                    <span className='text-black'>1000 جنية</span>
                  </div>
                  <div className='flex justify-center items-center flex-col p-5'>
                    <Image src={imge5} alt='' className='w-40 h-40 ' />
                    <p className='text-black mt-3'>كرياتين </p>
                    <span className='text-black'>1200 جنية</span>
                  </div>
                  <div className='flex justify-center items-center flex-col p-5'>
                    <Image src={imge6} alt='' className='w-40 h-40 ' />
                    <p className='text-black mt-3'>شيكر</p>
                    <span className='text-black'>250 جنيه</span>
                  </div>
                  <div className='flex justify-center items-center flex-col p-5'>
                    <Image src={imge7} alt='' className='w-40 h-40 ' />
                    <p className='text-black mt-3'>شيكر</p>
                    <span className='text-black'>400 جنية</span>
                  </div>
                  <div className='flex justify-center items-center flex-col p-5'>
                    <Image src={imge8} alt='' className='w-40 h-40 ' />
                    <p className='text-black mt-3'>حزام ضهر </p>
                    <span className='text-black'>400 جنية</span>
                  </div>
                  <div className='flex justify-center items-center flex-col p-5'>
                    <Image src={imge9} alt='' className='w-40 h-40 ' />
                    <p className='text-black mt-3'>جونت جيم رجالي</p>
                    <span className='text-black'>150 جنية</span>
                  </div>
                  <div className='flex justify-center items-center flex-col p-5'>
                    <Image src={imge10} alt='' className='w-40 h-40 ' />
                    <p className='text-black mt-3'>جونت جيم حريمي</p>
                    <span className='text-black'>150 جنية</span>
                  </div>
                  <div className='flex justify-center items-center flex-col p-5'>
                    <Image src={imge11} alt='' className='w-40 h-40 ' />
                    <p className='text-black mt-3'>قلفز كونغوفو</p>
                    <span className='text-black'>200 جنية</span>
                  </div>
                  <div className='flex justify-center items-center flex-col p-5'>
                    <Image src={imge12} alt='' className='w-40 h-40 ' />
                    <p className='text-black mt-3'>قلفز كونغوفو</p>
                    <span className='text-black'>400 جنية</span>
                  </div>
                  <div className='flex justify-center items-center flex-col p-5'>
                    <Image src={imge13} alt='' className='w-40 h-40 ' />
                    <p className='text-black mt-3'> حزام تاهيل اصابات </p>
                    <span className='text-black'>400 جنية</span>
                  </div>
                  <div className='flex justify-center items-center flex-col p-5'>
                    <Image src={imge14} alt='' className='w-40 h-40 ' />
                    <p className='text-black mt-3'>واقي قدم </p>
                    <span className='text-black'>300 جنية </span>
                  </div>
                  <div className='flex justify-center items-center flex-col p-5'>
                    <Image src={imge15} alt='' className='w-40 h-40' />
                    <p className='text-black mt-3'>واقي راس</p>
                    <span className='text-black'>300 جنية</span>
                  </div>
                </div>
                {/*  */}
              </>    
  );
};

export default Home;