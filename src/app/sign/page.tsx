import React from 'react';

const SignUp = () => {
return (
    <div className="flex justify-center items-center h-screen">
       <div className="flex flex-col justify-evenly items-center  w-11/12 h-auto bg-zinc-900 rounded-3xl sm:w-9/12 md:w-6/12 lg:w-4/12 sm-h-4/5">
       <h1 className='text-2xl mt-3 italic text-orange-500 p-4'>Sign Up !</h1>
       <p>Weclome </p>
       <form className="flex flex-col text-xl mb-7"> 
        <label className="text-lg mb-2 mt-8">
         Name
          </label>
        <input type="text" 
        required 
        className="w-80 h-8  bg-zinc-700 rounded-md focus:outline-orange-500"  
         />
        <label className="text-lg mb-2 mt-8">
          Email address
          </label>
        <input type="email" 
        required 
        className="w-80 h-8  bg-zinc-700 rounded-md  focus:outline-orange-500"  
         />
        <label className="text-lg mb-2 mt-8">
         Phone
          </label>
        <input type="text" 
        required 
        className="w-80 h-8  bg-zinc-700 rounded-md  focus:outline-orange-500"  
         />
        <label className="text-lg mb-2 mt-4">
          Password
          </label>
        <input className="w-80 mb-4 h-8 bg-zinc-700 rounded-md focus:outline-orange-500" type="password" required  />
        <button type="submit" className="w-full mt-3  text-lg  p-1  bg-orange-500 text-white rounded-lg font-semibold h-auto"> 
          Sign in
          </button>
        
    </form>
       </div>
    </div>
);
};

export default SignUp;
