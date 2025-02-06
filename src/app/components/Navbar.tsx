"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="z-50">
          <div className="bg-white opacity-95 h-20 flex justify-around items-center px-4 md:px-10 lg:px-20  z-50">
            <h1 className="text-orange-500 italic text-3xl"><span className="text-black">Dream</span> Club</h1>
            <div 
          className="md:hidden text-black cursor-pointer"
          onClick={() => setMenuOpen(!isMenuOpen)}
          aria-label="فتح القائمة"
          aria-expanded={isMenuOpen}
           aria-controls="mobile-menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setMenuOpen(!isMenuOpen);
            }
           
          }}
            >
              <span className="text-2xl z-50">&#9776;</span>
            </div>
            <ul  id="mobile-menu" className={`${isMenuOpen ? "block" : "hidden"} absolute md:static top-20 left-0 w-full flex flex-col md:flex-row items-center md:w-auto bg-white md:bg-transparent md:flex text-black gap-5 lg:gap-10 p-4 md:p-0 abs z-50 text-right shadow-lg md:shadow-none `} >
            <li className=" py-1 md:py-0 mt-1 sm:mt-0 z-50 transition hover:text-orange-500"><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li className="py-1 md:py-0 mt-1 sm:mt-0 z-50 transition hover:text-orange-500"><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li className="py-1 md:py-0 mt-1 sm:mt-0 z-50 transition hover:text-orange-500"><Link href="/service" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li className="py-1 md:py-0 mt-1 sm:mt-0 z-50 transition hover:text-orange-500"><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
              <Link href="/log" className="md:ml-10 border-2 border-solid border-orange-500 p-1 text-center w-32 rounded-full transition text-orange-500 hover:bg-orange-500 hover:text-white " onClick={() => setMenuOpen(false)}>LogIn</Link>
              <Link href="/sign" className="border-2 border-solid border-orange-500 p-1 text-center w-32 rounded-full transition  hover:bg-orange-500 hover:text-white" onClick={() => setMenuOpen(false)}>SignUp</Link>
              <Link href="/log/admin">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 text-orange-500 transform transition duration-300 hover:scale-150 animate-bounceLight">
              <path  fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"/>
              </svg>
              </Link>
            </ul>
          </div>
    </nav>
  )
};

export default Navbar;
