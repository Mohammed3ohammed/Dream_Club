"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const toggleLanguage = () => {
    const currentLang = pathname.startsWith("/ar") ? "en" : "ar"; 
    let newPath = pathname.replace(/^\/(en|ar)/, ""); 
    newPath = newPath === "" ? "/" : newPath;
    router.replace(`/${currentLang}${newPath}`);
  };
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
          }}>
              <span className="text-2xl z-50">&#9776;</span>
            </div>
            <ul  id="mobile-menu" className={`${isMenuOpen ? "block" : "hidden"} absolute md:static top-20 left-0 w-full flex flex-col md:flex-row items-center md:w-auto bg-white md:bg-transparent md:flex text-black gap-5 lg:gap-10 p-4 md:p-0 abs z-50 text-right shadow-lg md:shadow-none `} >
            <li className=" py-1 md:py-0 mt-1 sm:mt-0 z-50 transition hover:text-orange-500"><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li className="py-1 md:py-0 mt-1 sm:mt-0 z-50 transition hover:text-orange-500"><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li className="py-1 md:py-0 mt-1 sm:mt-0 z-50 transition hover:text-orange-500"><Link href="/service" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li className="py-1 md:py-0 mt-1 sm:mt-0 z-50 transition hover:text-orange-500"><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
              <Link href="/log" className="md:ml-10 border-2 border-solid border-orange-500 p-1 text-center w-32 rounded-full transition text-orange-500 hover:bg-orange-500 hover:text-white " onClick={() => setMenuOpen(false)}>LogIn</Link>
              <Link href="/sign" className="border-2 border-solid border-orange-500 p-1 text-center w-32 rounded-full transition  hover:bg-orange-500 hover:text-white" onClick={() => setMenuOpen(false)}>SignUp</Link>
              <Link href="/log">
                <FontAwesomeIcon
                icon={faUser}
                className="w-6 h-6 text-orange-500 transform transition duration-300 hover:scale-150 animate-bounceLight"
                onClick={() => setMenuOpen(false)}
              />
              </Link>
              <button onClick={toggleLanguage}>
              <FontAwesomeIcon 
              icon={faEarthAmericas} fill="currentColor" className="w-6 h-6 text-orange-500 transform transition duration-300 hover:scale-150 animate-bounceLight" onClick={() => setMenuOpen(false)} />
              </button>
            </ul>
          </div>
    </nav>
  )
};

export default Navbar;
