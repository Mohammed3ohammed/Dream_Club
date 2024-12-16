import Image from 'next/image';
import img1 from '../../Image/img11.webp';
import logo1 from '../../Image/logo1.jpg';
import logo2 from '../../Image/logo2.jpg';
import logo3 from '../../Image/logo3.jpg';
import fit1 from '../../Image/fit1.jpg';
import fit2 from '../../Image/fit2.jpg';
import fit3 from '../../Image/fit3.jpg';


const  Home = () => {
  return (
    
          <>
          
          <div>
            <Image className='w-full h-[50vh] sm:h-[70vh] lg:h-[80vh] xl:h-[90vh] object-cover' src={img1} alt="" />
        <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 '>
    <div className='flex justify-center lg:justify-end'>
        <div className='bg-white w-full h-auto sm:w-80 lg:w-80 flex justify-center rounded-2xl p-3'>
          <div className='text-black flex justify-evenly items-center flex-col'>
            <Image src={logo1} alt="" className="w-16 h-16" />
      <h1 className="border-b-2 border-solid border-orange-500 p-3">WEGHT LIFTING</h1>
            <p className='p-6'>Dignissimos asperiores vitae velit veniam totarn fuga molestias accusamus alias autem provident. odit ab aliquam dolor eius</p>
            <button className='flex border-2  border-solid p-3 rounded-full border-orange-500 text-orange-500'>
              More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1.5" stroke="currentColor" className="size-6 ml-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
    </button>
          </div>
        </div>
                </div>  
    <div className='flex justify-center'>
        <div className='bg-white w-full h-auto sm:w-80 lg:w-80 flex justify-center rounded-2xl p-3'>
          <div className='text-black flex justify-evenly items-center flex-col'>
          <Image src={logo2} alt="" className='w-16 h-16' />
      <h1 className="border-b-2 border-solid border-orange-500 p-3">RUNING</h1>
            <p className='p-6' >Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius</p>
            <button className='flex border-2  border-solid p-3 rounded-full border-orange-500 text-orange-500'>
            More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1.5" stroke="currentColor" className="size-6 ml-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
    </button>
          </div>
        </div>
                </div>  
    <div className='flex justify-center lg:justify-start '>
        <div className='bg-white w-full h-auto sm:w-80 lg:w-80 flex justify-center rounded-2xl p-3'>
          <div className='text-black flex justify-evenly items-center flex-col'>
          <Image src={logo3} alt="" className='w-16 h-16' />
      <h1 className="border-b-2 border-solid border-orange-500 p-3">YOGA</h1>
            <p className='p-6'>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ad aliquam dolor eius</p>
            <button className='flex border-2  border-solid p-3 rounded-full border-orange-500 text-orange-500'>
              More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  width="1.5" stroke="currentColor" className="size-6 ml-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
    </button>
          </div>
        </div>
                </div>  
                </div> 
            </div>
 
            {/* Section 2 */}
            <div className='bg-slate-200 mt-80'>
              <h1 className='text-center text-black pt-8 text-2xl'>FITNESS EXPERT</h1>
              <p className='text-zinc-500 text-center w-auto mt-3'>Dignissimos asperiores vitae velit veniam totam fug molestias accusamus alias <br /> autem provident. Odit ab aliquam dolor eius </p>
              <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 '>
    <div className='flex justify-center lg:justify-end'>
        <div className='bg-gray-300 w-auto h-auto sm:w-80 lg:w-80 flex justify-center flex-col rounded-2xl p-3'>

            <Image src={fit1} alt="" className="w-96 h-96 rounded-xl" />
        <ul className='flex justify-center p-5 gap-5'>
          <li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-6 h-6'>
        <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288l111.5 0L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L349.4 44.6z"/>
           </svg>
        </li>
        <li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='w-6 h-6'>
        <path d="M96 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 160 0 64 0 160c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64-32 0c-17.7 0-32-14.3-32-32l0-64c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l32 0 0-64zm448 0l0 64 32 0c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64c0 17.7-14.3 32-32 32l-32 0 0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-160 0-64 0-160c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32zM416 224l0 64-192 0 0-64 192 0z"/>
        </svg>
        </li>
        <li>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-6 h-6'>
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
        </svg>
     </li>
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-6 h-6'>
            <path d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0L133.9 0c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0L487.4 0C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"/>
        </svg>
    </li>
          </ul>
        </div>
                </div>  
    <div className='flex justify-center'>
        <div className='bg-gray-300 w-auto h-auto sm:w-80 lg:w-80 flex justify-center flex-col rounded-2xl p-3'>
          <Image src={fit2} alt="" className='w-96 h-96 rounded-xl' />
          <ul className='flex justify-center p-5 gap-5'>
          <li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-6 h-6'>
        <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288l111.5 0L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L349.4 44.6z"/>
        </svg>
        </li>
        <li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='w-6 h-6'>
        <path d="M96 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 160 0 64 0 160c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64-32 0c-17.7 0-32-14.3-32-32l0-64c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l32 0 0-64zm448 0l0 64 32 0c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64c0 17.7-14.3 32-32 32l-32 0 0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-160 0-64 0-160c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32zM416 224l0 64-192 0 0-64 192 0z"/>
        </svg>
        </li>
        <li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-6 h-6'>
        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
        </svg>
        </li>
        <li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-6 h-6'>
        <path d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0L133.9 0c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0L487.4 0C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"/>
        </svg>
        </li>
        </ul>
        </div>
          </div> 

    <div className='flex justify-center lg:justify-start '>
        <div className='bg-gray-300 w-auto h-auto sm:w-80 lg:w-80 flex justify-center flex-col rounded-2xl p-3'>
         
          <Image src={fit3} alt="" className='w-96 h-96 rounded-xl' />
          <ul className='flex justify-center p-5 gap-5'>
          <li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-6 h-6'>
        <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288l111.5 0L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L349.4 44.6z"/>
        </svg>
        </li>
        <li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='w-6 h-6'>
        <path d="M96 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 160 0 64 0 160c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64-32 0c-17.7 0-32-14.3-32-32l0-64c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l32 0 0-64zm448 0l0 64 32 0c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64c0 17.7-14.3 32-32 32l-32 0 0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-160 0-64 0-160c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32zM416 224l0 64-192 0 0-64 192 0z"/>
        </svg>
        </li>
        <li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-6 h-6'>
        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
        </svg>
        </li>
        <li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-6 h-6'>
        <path d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0L133.9 0c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0L487.4 0C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"/>
        </svg>
        </li>
        </ul>
          
          </div>
        </div>
                </div>  
                </div> 

              </>    
  );
};

export default Home;
