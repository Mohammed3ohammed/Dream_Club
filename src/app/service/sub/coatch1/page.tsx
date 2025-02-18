import Image from 'next/image';
import React from 'react';
import logo from "../../../../../public/Captins/Image2.jpg";

const page = () => {
  return (
    <>
        <div className='flex justify-center'>
        <h1 className='text-3xl font-bold mt-10 italic text-orange-500'>Subscribe <span className='text-white'>With Us</span></h1>
        </div>
        <div>
        <h2 className='text-center mt-5 text-2xl'>Now to Achieve the Best Result</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-20 '>
            <div>
            <section className="py-12 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto  p-8 shadow-lg rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-600 mb-6 text-center">
          Training Program - Captain Assem El-Kasaby
        </h2>
        
        <p className="text-gray-600 text-lg mb-4">
          Specialist in sports injury rehabilitation and professional Kung Fu training.
        </p>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-600 mb-3">Physical Rehabilitation</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Fitness and flexibility recovery exercises</li>
            <li>Strength training and performance enhancement</li>
            <li>Physical therapy techniques and injury prevention</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-600 mb-3">Combat Skills Development</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Advanced Kung Fu training programs</li>
            <li>Improving speed and reaction time</li>
            <li>Combat tactics and fight endurance training</li>
          </ul>
          <form action="/submit" method="post" className='flex flex-col gap-5 lg:w-8/12 p-4 md:w-8/12 w-full  justify-center '>
          <select id="gym-plan" name="gym-plan" className='bg-black text-gray-400'>
                <option value="">-- Men s Gym --</option>
                <option value="half-yearly">Injury Rehabilitation - 350 EGP</option>
                </select>
          <select id="gym-plan" name="gym-plan" className='bg-black text-gray-400'>
                    <option value="" className=''>-- Kung Fu --</option>
                    <option value="kids-kungfu">Kung Fu (Ages 4-14) - 200 EGP</option>
                    <option value="adults-kungfu">Kung Fu (15+ Years) - 350 EGP</option>
                    <option value="gymnastics">Gymnastics (Ages 4-7) - 200 EGP</option>
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
                <a href="/log"  className="border-2 border-solid border-orange-500 py-2 px-6 mt-5 rounded-full text-white hover:bg-orange-500 hover:text-white transition duration-300 w-full sm:w-auto text-center cursor-pointer" >
                <input type='submit' value="Subscribe Now"  />
                </a>
                </form>
        </div>
      </div>
    </section>
            </div>
                <div className='flex justify-center items-center relative '>
                    <Image src={logo} alt="logo" 
                    className='w-80 h-96 rounded-2xl transform transition duration-300 hover:scale-105 animate-bounceLight cursor-pointer' />
                </div>
            
            </div>
        </div>
        
    </>
  );
};

export default page;





            {/* <div className='mb-20 flex justify-center items-center'>
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
                </div> */}