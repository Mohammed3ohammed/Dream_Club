import Image from 'next/image';
import img1 from '../../Image/img.jpg';
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
import imge16 from "./Image/imge16.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDumbbell } from "@fortawesome/free-solid-svg-icons";
// 

const  Home = () => {
  const products = [ 
    { img: imge1, name: 'ماس مكمل غذائي', price: '3000  جنية' },
    { img: imge2, name: 'واي بروتين مكمل غذائي', price: '4000 جنية' },
    { img: imge3, name: 'كرياتين أون', price: '1900 جنية' },
    { img: imge4, name: 'ريد ريكس كرياتين', price: '1000 جنية' },
    { img: imge5, name: 'كرياتين', price: '1200 جنية' },
    { img: imge6, name: 'شيكر', price: '250 جنيه' },
    { img: imge7, name: 'شيكر', price: '400 جنية' },
    { img: imge8, name: 'حزام ضهر', price: '400 جنية' },
    { img: imge9, name: 'جونت جيم رجالي', price: '150  جنية' },
    { img: imge10, name: 'جونت جيم حريمي', price: '150 جنية' },
    { img: imge11, name: 'قلفز كونغوفو', price: '200 جنية' },
    { img: imge12, name: 'قلفز كونغوفو', price: '400 جنية' },
    { img: imge13, name: 'حزام تاهيل اصابات', price: '400 جنية' },
    { img: imge14, name: 'واقي قدم', price: '300 جنية' },
    { img: imge15, name: 'واقي راس', price: '300 جنية' },
    { img: imge16, name: 'مياه معدنيه', price: '10 جنية' },
  ];
  return (
          <section>
          <div>
            <Image className="w-full h-[400px] md:h-[500px] lg:h-[700px] 2xl:h-[990px]  object-cover" src={img1} alt="img1" />
        <div className='grid justify-center items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 gap-6 h-auto md:h-[800px] lg:h-[600px] '>
    <div className='flex justify-center items-center'>
        <div className='bg-white w-full h-[350px] md:h-[360px] lg:h-[360px]  md:w-80 lg:w-80 rounded-2xl p-3'>
          <div className='text-black flex justify-evenly items-center flex-col'>
            <Image src={logo1} alt="logo1" className="w-16 h-16 " />
      <h1 className="border-b-2 border-solid border-orange-500 p-3">WEGHT LIFTING</h1>
            <p className='p-6'>Dignissimos asperiores vitae velit veniam totarn fuga molestias accusamus alias autem provident. odit ab aliquam dolor eius</p>
          <a href='/contact'>
          <button className='flex border-2  border-solid p-2 rounded-full border-orange-500 text-orange-500 w-32 mt-5 transition hover:bg-orange-500 hover:text-white'>
              More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1.5" stroke="currentColor" className="size-6 ml-4 ">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
          </button>
          </a>
          </div>
        </div>
        </div>  

    <div className='flex justify-center items-center'>
        <div className='bg-white w-full h-[350px] md:h-[360px] lg:h-[360px]  md:w-80 lg:w-80 rounded-2xl p-3'>
          <div className='text-black flex justify-evenly items-center flex-col'>
          <Image src={logo2} alt="logo2" className='w-16 h-16' />
      <h1 className="border-b-2 border-solid border-orange-500 p-3">Cardio</h1>
            <p className='p-6' >
            Cardio exercises, like running, are essential for improving heart health, burning calories, and boosting overall energy levels.</p>
           <a href='/contact'>
           <button className='flex border-2  border-solid p-2 rounded-full border-orange-500 text-orange-500 w-32 mt-5 transition hover:bg-orange-500 hover:text-white'>
            More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1.5" stroke="currentColor" className="size-6 ml-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
          </button>
          </a>
          </div>
        </div>
        </div>  

    <div className='flex justify-center items-center'>
        <div className='bg-white w-full h-[350px] md:h-[360px] lg:h-[360px]  md:w-80 lg:w-80 rounded-2xl p-3'>
          <div className='text-black flex justify-evenly items-center flex-col'>
          <Image src={logo2} alt="logo3" className='w-16 h-16' />
      <h1 className="border-b-2 border-solid border-orange-500 p-3">Injury Rehabilitation</h1>
            <p className='p-6' >
              Injury rehabilitation involves a series of exercises and treatments to restore strength, flexibility, and function after an injury, helping  prevent .
            </p>
           <a href='/contact'>
           <button className='flex border-2  border-solid p-2 rounded-full border-orange-500 text-orange-500 w-32 transition hover:bg-orange-500 hover:text-white'>
            More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1.5" stroke="currentColor" className="size-6 ml-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
          </button>
          </a>
          </div>
        </div>
        </div>  


 <div className='flex justify-center items-center '>
        <div className='bg-white w-full h-[350px] md:h-[360px] lg:h-[360px]  md:w-80 lg:w-80 rounded-2xl p-3'>
          <div className='text-black flex justify-evenly items-center flex-col'>
          <Image src={logo3} alt="logo3" className='w-16 h-16' />
      <h1 className="border-b-2 border-solid border-orange-500 p-3">RUNING</h1>
            <p className='p-6'>
            Running offers numerous benefits, including improved cardiovascular health, increased stamina, and enhanced mental well-being.
            </p>
            <a href='/contact'>
            <button className='flex border-2  border-solid p-2 rounded-full border-orange-500 text-orange-500 w-32 mt-6 transition hover:bg-orange-500 hover:text-white'>
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
            <div className='p-10'>
              <h1 className='text-center text-orange-500 italic pt-8 text-2xl'>FITNESS <span className='text-white'>EXPERT</span></h1>
              <p className='text-zinc-300 text-center w-auto mt-3'>
              A dedicated fitness expert with a passion for helping individuals achieve their health and wellness <br /> goals through tailored workout plans, nutrition guidance, and motivational coaching. </p>
              <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 '>
    <div className='flex justify-center lg:justify-end'>
        <div className='bg-white w-auto h-auto sm:w-80 lg:w-80 flex justify-center flex-col rounded-2xl p-3'>

          <a href='/contact'>

          <Image src={fit1} alt="fit1" className="w-96 h-96 rounded-xl transform transition duration-300 hover:scale-105 animate-bounceLight" />
          <div className='flex justify-center p-5 gap-5'>
          <FontAwesomeIcon icon={faUser} fill="currentColor" className='w-6 h-6 text-orange-500' />
        <FontAwesomeIcon icon={faDumbbell} fill="currentColor"  className='w-6 h-6 text-orange-500'/>
          </div> 
          </a>
        </div>
        </div>  
    <div className='flex justify-center'>
        <div className='bg-white w-auto h-auto sm:w-80 lg:w-80 flex justify-center flex-col rounded-2xl p-3'>
        <a href='/contact'>
        <Image src={fit2} alt="fit2" className='w-96 h-96 rounded-xl transform transition duration-300 hover:scale-105 animate-bounceLight' />
          <div className='flex justify-center p-5 gap-5'>
          <FontAwesomeIcon icon={faUser} fill="currentColor" className='w-6 h-6 text-orange-500' />
          <FontAwesomeIcon icon={faDumbbell} fill="currentColor"  className='w-6 h-6 text-orange-500'/>
        </div>
        </a>
        </div>
          </div> 

    <div className='flex justify-center lg:justify-start '>
        <div className='bg-white w-auto h-auto sm:w-80 lg:w-80 flex justify-center flex-col rounded-2xl p-3'>
         
          <a href='/contact'>
          <Image src={fit3} alt="fit3" className='w-96 h-96 rounded-xl transform transition duration-300 hover:scale-105 animate-bounceLight' />
          <div className='flex justify-center p-5 gap-5'>
          <FontAwesomeIcon icon={faUser} fill="currentColor" className='w-6 h-6 text-orange-500' />
        <FontAwesomeIcon icon={faDumbbell} fill="currentColor"  className='w-6 h-6 text-orange-500'/>
        </div>
          </a>
          </div>
        </div>
                </div>  
                </div> 

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 p-5 mt-10  bg-white">
  {
  products.map((item, index) => (
    <div key={index} className="flex justify-center items-center flex-col p-5 ">
      <Image src={item.img} alt={item.name} className="w-24 h-24 rounded-xl transform transition duration-300 hover:scale-110 cursor-pointer" />
      <p className="text-black mt-3">{item.name}</p>
      <span className="text-black">{item.price}</span>
    </div>
  ))}
</div>
                {/*  */}
              </section>    
  );
};

export default Home;