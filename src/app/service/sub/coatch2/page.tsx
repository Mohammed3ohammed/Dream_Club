import Image from 'next/image';
import React from 'react';
import logo from "../../../../../public/Captins/Image3.jpg";

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
          Professional Training Program - Captain Ali El-Kasaby
        </h2>
        
        <p className="text-gray-700 text-lg mb-4">
          Specialist in designing personalized training programs aimed at achieving your fitness and health goals.
        </p>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-400 mb-3">Customized Workout Plans</h3>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Weight loss and fat burning programs</li>
            <li>Muscle building and strength training</li>
            <li>Overall fitness and endurance improvement</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-400 mb-3">Holistic Fitness Approach</h3>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Combining the latest training techniques</li>
            <li>Balanced and healthy nutrition guidance</li>
            <li>Enhancing energy levels and confidence</li>
          </ul>
          <form action="/submit" method="post" className='flex flex-col gap-5 lg:w-8/12 p-4 md:w-8/12 w-full  justify-center '>
          <select id="gym-plan" name="gym-plan" className='bg-black text-gray-400'>
          <option value="">-- Men s Gym --</option>
                <option value="monthly">Monthly - 500 EGP</option>
                <option value="quarterly">Gym 3 Days a Week - 350 EGP</option>
                <option value="half-yearly">Injury Rehabilitation - 350 EGP</option>
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