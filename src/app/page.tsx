import Image from 'next/image';
import img1 from '../../Image/fd520ba8-4d1a-44bf-a2d2-6688656ba02e.jpg';
import logo1 from '../../Image/logo1.jpg';
import logo2 from '../../Image/logo2.jpg';
import logo3 from '../../Image/logo3.jpg';


const  Home = () => {
  return (
          <>
          <div>
            <Image className='w-full h-[50vh] sm:h-[70vh] lg:h-[80vh] xl:h-[90vh]' src={img1} alt="" />
        <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 '>
    <div className='flex justify-center lg:justify-end'>
        <div className='bg-white w-full h-auto sm:w-80 lg:w-80 flex justify-center rounded-2xl p-3'>
          <div className='text-black flex justify-evenly items-center flex-col'>
            <Image src={logo1} alt="" className="w-16 h-16" />
      <h1 className="border-b-2 border-solid border-orange-500 p-3">WEGHT LIFTING</h1>
            <p className='p-6'>Dignissimos asperiores vitae velit veniam totarn fuga molestias accusamus alias autem provident. odit ab aliquam dolor eius</p>
            <button className='flex border-2  border-solid p-3 rounded-full border-orange-500 text-orange-500'>More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1.5" stroke="currentColor" className="size-6 ml-4">
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
            <button className='flex border-2  border-solid p-3 rounded-full border-orange-500 text-orange-500'>More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1.5" stroke="currentColor" className="size-6 ml-4">
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
            <button className='flex border-2  border-solid p-3 rounded-full border-orange-500 text-orange-500'>More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  width="1.5" stroke="currentColor" className="size-6 ml-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
    </button>
          </div>
        </div>
                </div>  
                </div> 
            </div>
              </>    
  );
};

export default Home;
