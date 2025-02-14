import Image from 'next/image'
import React from 'react'
import logo from "../../../../Image/logo.jpg";
import Link from 'next/link';

const page = () => {
  return (
    <>
        <div className='flex justify-center'>
        <h1 className='text-3xl font-bold mt-10 italic text-orange-500'>Subscribe <span className='text-white'>With Us</span></h1>
        </div>
        <div>
        <h2 className='text-center mt-5 text-2xl'>Now to Achieve the Best Result</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-20 '>
            <div className='mb-20 flex justify-center items-center'>
                <form action="/submit" method="post" className='flex flex-col gap-5 lg:w-8/12 p-4 md:w-8/12 w-full opacity-80  justify-center '>
                <label className='mt-10 text-xl'>Subscription Types</label>
                <select id="gym-plan" name="gym-plan" className='bg-black text-white'>
                <option value="">-- Men s Gym --</option>
                <option value="monthly">Monthly - 500 EGP</option>
                <option value="quarterly">Gym 3 Days a Week - 350 EGP</option>
                <option value="half-yearly">Injury Rehabilitation - 350 EGP</option>
                </select>
                <select id="gym-plan" name="gym-plan" className='bg-black text-white'>
                <option value="">-- Women s Gym (Includes Cardio & Zumba Classes) --</option>
                <option value="monthly">Monthly - 400 EGP</option>
                </select>           
                <select id="gym-plan" name="gym-plan" className='bg-black'>
                    <option value="">-- Spa --</option>
                    <option value="sauna">Sauna Session - 50 EGP</option>
                    <option value="jacuzzi">Jacuzzi Session - 100 EGP</option>
                    <option value="ice-jacuzzi">Ice Jacuzzi Session - 120 EGP</option>
                    <option value="back-massage">Back Massage Session - 300 EGP</option>
                    <option value="full-massage">Full Body Massage Session - 300 EGP</option>
                    <option value="cupping">Cupping Therapy Session - 350 EGP</option>
                    <option value="massage-cupping">Massage + Cupping Session - 450 EGP</option>
                </select>
                <select id="gym-plan" name="gym-plan" className='bg-black text-white'>
                    <option value="">-- Kung Fu --</option>
                    <option value="kids-kungfu">Kung Fu (Ages 4-14) - 200 EGP</option>
                    <option value="adults-kungfu">Kung Fu (15+ Years) - 350 EGP</option>
                    <option value="gymnastics">Gymnastics (Ages 4-7) - 200 EGP</option>
                </select>
                <Link href="/log"  className="border-2 border-solid border-orange-500 py-2 px-6 mt-5 rounded-full text-white hover:bg-orange-500 hover:text-white transition duration-300 w-full sm:w-auto text-center cursor-pointer" >
                <input type='submit' value="Subscribe Now"  />
                </Link>
            </form>
                </div>
                <div className='flex justify-center items-center relative '>
                    <Image src={logo} alt="logo" 
                    className='absolute h-96 -top-10 cursor-pointer rounded-3xl  p-4 transform transition duration-300 hover:scale-110 animate-bounceLight'
                   
                     />
                </div>
               
            </div>
        </div>
        
    </>
  );
};

export default page;