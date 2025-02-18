import Image from 'next/image';
import React from 'react';
import logo from "../../../../../public/Captins/Image6.png";

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
            <section className=" py-12 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto p-8 shadow-lg rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-400 mb-6 text-center">
          Professional Training Program - Captain Alaa El-Abd
        </h2>
        
        <p className="text-gray-700 text-lg mb-4">
          A specialist in fitness and personal training, I help you achieve a balance between exercise and health in a fun and effective way.
        </p>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-400 mb-3">Tailored Training Programs</h3>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Weight loss and body sculpting</li>
            <li>Strength and endurance building</li>
            <li>Improving overall fitness and flexibility</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-400 mb-3">Comprehensive Fitness Approach</h3>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Making workouts enjoyable and motivating</li>
            <li>Incorporating proper nutrition guidance</li>
            <li>Ensuring sustainable and healthy progress</li>
          </ul>
          <form action="/submit" method="post" className='flex flex-col gap-5 lg:w-8/12 p-4 md:w-8/12 w-full justify-center '>
          <select id="gym-plan" name="gym-plan" className='bg-black text-gray-400'>
          <option value="">-- Women s Gym --</option>
                <option value="monthly">Monthly - 500 EGP</option>
                <option value="quarterly">Gym 3 Days a Week - 350 EGP</option>
                <option value="half-yearly">Personal Training - 700 EGP</option>
                </select>
                <a href="/log" className="border-2 border-solid border-orange-500 py-2 px-6 mt-5 rounded-full text-white hover:bg-orange-500 hover:text-white transition duration-300 w-full sm:w-auto text-center cursor-pointer" >
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

