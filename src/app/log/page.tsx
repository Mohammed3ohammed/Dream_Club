// import Image from "next/image";
// import logo from "../../../Image/logo.jpg";
import Link from "next/link";

const  LogIn = () => {
  return (
      <div className="flex justify-center items-center h-screen ">
           <div className="flex flex-col justify-evenly items-center   w-11/12 h-3/5 bg-zinc-900 rounded-3xl sm:w-9/12 md:w-6/12 lg:w-4/12 sm-h-4/5">
            {/* <Image className="w-24 h-24  md:w-32 md:h-20 block mt-5" src={logo} alt="Logo"  />  */}
            <h1 className= "text-xl mt-2 italic text-orange-500">Login in <span className="text-white">to Dream </span>Club !</h1>
     <form className="flex flex-col text-lg mb-8 sm:text-xl "> 
        <label className="text-base mb-2 mt-5">
           Phone 
          </label>
        <input type="email" 
        required 
        className="w-80 h-8  bg-zinc-700 rounded-md  focus:outline-orange-500"  
        />
        <label className="text-base mb-2 mt-4">
          Password
          </label>
        <input className="w-80 mb-4 h-8 bg-zinc-700 rounded-md focus:outline-orange-500" type="password" required  />
      
        <button type="submit" className="w-full mt-3  text-lg    border-2 border-solid border-orange-500 p-1 rounded-full text-white font-semibold h-auto transition hover:bg-orange-500"> 
        <Link href="#">
        Login in
        </Link>
        </button>
          
        <Link href="/sign" className="mt-5 text-lg text-orange-500 sm:text-lg ">
        Create on account ?
        </Link> 
    </form>
     </div>
      </div>    
  );
};

export default LogIn;