import Image from "next/image";
import logo from "../../Image/Logo.png";
import Link from "next/link";

const  LogIn = () => {
  return (
      <div className="flex justify-center items-center h-screen ">
           <div className="flex flex-col justify-evenly items-center   w-11/12 h-auto bg-zinc-900 rounded-3xl sm:w-9/12 md:w-6/12 lg:w-4/12 sm-h-4/5">
            <Image className="w-20 h-20  md:w-24 md:h-24 rounded-full block mt-5" src={logo} alt="Logo"  /> 
            <h1 className= "text-2xl mt-5">Login in to Dream Club</h1>
     <form className="flex flex-col text-base mb-8 sm:text-xl p-1" action="" method="POST"> 
        <label className="mb-2 mt-8 ">
           Email address
          </label>
        <input type="email" 

        className="w-80 h-8  bg-zinc-700 rounded-md focus:border-indigo-800 "  
         />
        <label className=" mb-2 mt-4">
          Password
          </label>
        <input className="w-80 mb-4 h-8 bg-zinc-700 rounded-md focus:outline-transparent" type="password"  />
       
        
        <button type="submit" className="w-full mt-3  text-xl p-1  bg-green-400 text-white rounded-lg font-semibold h-auto"> 
        <a href="/home">
        Login in
        </a>
        </button>
          
        <Link href="/SignUp" className="mt-4 text-xl text-blue-400 sm:text-lg ">
        Create on account ?
        </Link> 
    </form>
     </div>
      </div>    
  );
};

export default LogIn;