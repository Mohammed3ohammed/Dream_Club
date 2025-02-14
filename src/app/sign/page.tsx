import React from 'react';

const SignUp = () => {
return (
    <div className="flex justify-center items-center h-auto mt-10 mb-10">
       <div className="flex flex-col justify-evenly items-center  w-11/12 h-auto bg-zinc-900 rounded-3xl sm:w-9/12 md:w-6/12 lg:w-4/12 sm-h-4/5">
       <h1 className='text-2xl mt-3 italic text-orange-500 p-4'>Sign Up !</h1>
       <p className='italic text-orange-500'>Weclome <span className='text-white'>to Dream</span> Club !</p>
       <form className="flex flex-col text-xl mb-7"> 
        <label className="text-base mb-2 mt-8">
         Name
          </label>
        <input type="text" 
        required 
        className="w-80 h-8  bg-zinc-700 rounded-md focus:outline-orange-500"  
         />
        <label className="text-base mb-2 mt-8">
          Email address
          </label>
        <input type="email" 
        required 
        className="w-80 h-8  bg-zinc-700 rounded-md  focus:outline-orange-500"  
         />
        <label className="text-base mb-2 mt-8">
         Phone
          </label>
        <input type="number" 
        required 
        className="w-80 h-8  bg-zinc-700 rounded-md  focus:outline-orange-500"  
         />
        <label className="text-base mb-2 mt-4">
        Password
          </label>
        <input className="w-80 mb-4 h-8 bg-zinc-700 rounded-md focus:outline-orange-500" type="password" required  />
        <label className="text-base mb-2 mt-4">
        Weight
          </label>
        <input className="w-80 mb-4 h-8 bg-zinc-700 rounded-md focus:outline-orange-500" type="number" required  />
        <label className="text-base mb-2 mt-4">
          Height
          </label>
        <input className="w-80 mb-4 h-8 bg-zinc-700 rounded-md focus:outline-orange-500" type="number" required  />
        <label className="text-base mb-2 mt-4">
          Age
          </label>
        <input className="w-80 mb-4 h-8 bg-zinc-700 rounded-md focus:outline-orange-500" type="number" required  />
        <button type="submit" className="w-full mt-3  text-lg    border-2 border-solid border-orange-500 p-1 rounded-full text-white font-semibold h-auto transition hover:bg-orange-500"> 
          Sign Up
          </button>
        
    </form>
       </div>
    </div>
);
};

export default SignUp;
