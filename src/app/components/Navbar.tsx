"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {

  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="z-50">
          <div className="bg-white opacity-95 h-20 flex justify-around items-center px-4 md:px-10 lg:px-20  z-50">
            <h1 className="text-black text-xl">Dream Club</h1>
            <div 
          className="md:hidden text-black cursor-pointer"
          onClick={() => setMenuOpen(!isMenuOpen)}
            >
              <span className="text-2xl z-50">&#9776;</span>
            </div>
            <ul className={`${isMenuOpen ? "block" : "hidden"} absolute md:static top-20 left-0 w-full flex items-center md:w-auto bg-white md:bg-transparent md:flex text-black gap-5 lg:gap-10 p-4 md:p-0 z-50 text-right`} >
              <Link href="/"><li className="text-red-700 py-1 md:py-0 mt-1 sm:mt-0 z-50">Home</li></Link>
              <Link href="/about"><li className="py-1 md:py-0 mt-1 sm:mt-0 z-50">About</li></Link>
              <Link href="/service"><li className="py-1 md:py-0 mt-1 sm:mt-0 z-50">Services</li></Link>
              <Link href="/contact"><li className="py-1 md:py-0 mt-1 sm:mt-0 z-50">Contact</li></Link>
              <Link href="/login" className="ml-10 border-2 border-solid border-cyan-400 p-1 text-center w-32 rounded-full transition hover:bg-cyan-400 hover:text-white">LogIn</Link>
              <Link href="/signup" className="border-2 border-solid border-cyan-400 p-1 text-center w-32 rounded-full transition hover:bg-cyan-400 hover:text-white">SignUp</Link>
            
            </ul>
           
          </div>
         
    </nav>
  )
};

export default Navbar;
