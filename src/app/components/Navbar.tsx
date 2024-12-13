"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {

  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <nav>

          <div className="bg-white h-20 flex justify-around items-center px-4 md:px-10 lg:px-20">
            <h1 className="text-black text-xl">Dream Club</h1>
            <div 
          className="md:hidden text-black cursor-pointer"
          onClick={() => setMenuOpen(!isMenuOpen)}
            >
              <span className="text-2xl">&#9776;</span>
            </div>
            <ul className={`${isMenuOpen ? "block" : "hidden"} absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex text-black gap-5 lg:gap-10 p-4 md:p-0 z-10 text-right`} >
              <Link href="/"><li className="text-red-700 py-1 md:py-0 mt-1 sm:mt-0">Home</li></Link>
              <Link href="/about"><li className="py-1 md:py-0 mt-1 sm:mt-0">About</li></Link>
              <Link href="/services"><li className="py-1 md:py-0 mt-1 sm:mt-0">Services</li></Link>
              <Link href="/contact"><li className="py-1 md:py-0 mt-1 sm:mt-0">Contact</li></Link>
            
            </ul>
            
          </div>
    </nav>
  )
};

export default Navbar;


//className="flex text-black gap-5 lg:gap-10 "