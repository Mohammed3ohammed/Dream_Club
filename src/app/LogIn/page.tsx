// import Image from "next/image";
// import logo from "../../../Image/logo.jpg";
import Link from "next/link";

const  LogIn = () => {
  return (
      <div className="flex justify-center items-center h-screen ">
           <div className="flex flex-col justify-evenly items-center   w-11/12 h-3/5 bg-zinc-900 rounded-3xl sm:w-9/12 md:w-6/12 lg:w-4/12 sm-h-4/5">
            {/* <Image className="w-24 h-24  md:w-32 md:h-20 block mt-5" src={logo} alt="Logo"  />  */}
            <h1 className= "text-2xl mt-2">Login in to Dream Club</h1>
     <form className="flex flex-col text-lg mb-8 sm:text-xl "> 
        <label className="mb-2 mt-8">
           Email address
          </label>
        <input type="email" 
        required 
        className="w-80 h-8  bg-zinc-700 rounded-md focus:border-indigo-800 "  
         />
        <label className=" mb-2 mt-4">
          Password
          </label>
        <input className="w-80 mb-4 h-8 bg-zinc-700 rounded-md focus:outline-transparent" type="password" required  />
       
        
        <button type="submit" className="w-full mt-3  text-lg  bg-green-400 text-white rounded-lg font-semibold h-8"> 
        <Link href="#">
        Login in
        </Link>
        </button>
          
        <Link href="#" className="mt-4 text-lg text-blue-700 sm:text-lg ">
        Create on account ?
        </Link> 
    </form>
     </div>
      </div>    
  );
};

export default LogIn;