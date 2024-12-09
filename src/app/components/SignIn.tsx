import Image from "next/image";
import logo from "../../../Image/Logo.png"
import Link from "next/link";

const  SignIn = () => {
  return (
      <div className="flex justify-center items-center h-screen">
           <div className="flex flex-col justify-evenly items-center  w-4/12 h-3/5 bg-zinc-900 rounded-3xl">
            <Image className="w-32 h-32 rounded-full block mt-5" src={logo} alt="Logo"  /> 
            <h1 className= "text-2xl mt-2">Sign in to Dream Club</h1>
     <form className="flex flex-col text-xl mb-8"> 
        <label className="mb-2 mt-8">
          Username or email address
          </label>
        <input type="email" 
        required 
        className="w-80 h-8  bg-zinc-700 rounded-md focus:border-indigo-800 "  
         />
        <label className=" mb-2 mt-4">
          Password
          </label>
        <input className="w-80 mb-4 h-8 bg-zinc-700 rounded-md focus:outline-transparent" type="password" required  />
        <button type="submit" className="w-full mt-3  text-xl p-1  bg-green-400 text-white rounded-lg font-semibold h-8"> 
          Sign in
          </button>
        <Link href="/SignUp" className="mt-4 text-xl text-blue-700">
        Create on account ?
        </Link> 
    </form>
     </div>
      </div>    
  );
};

export default SignIn;