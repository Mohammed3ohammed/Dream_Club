import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faInstagram, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
 <div className=" grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-5  p-5 ">
 <div className="flex flex-col items-center text-center ">
    <h1 className="text-3xl text-orange-500 italic">Dream <span className="text-white">Club</span></h1>
    <p className="p-4  md:w-full w-96 mt-3 leading-relaxed">
    A place that will change your life and help you achieve your health and fitness goals in an enjoyable and professional way. When you join us, you will benefit.. </p>
        </div>
        <div className="grid grid-cols-2 justify-center items-center">
        <ul className="flex flex-col justify-center items-center  gap-6 ">
        <li><a href="/contact" className="hover:text-sky-600">Body Building</a></li>
            <li><a href="/contact" className="hover:text-sky-600">Boxing</a></li>
            <li><a href="/contact" className="hover:text-sky-600">Cardio</a></li>
        </ul>
        <ul className="flex flex-col justify-center items-center   gap-6">
            <li><a href="/contact" className="hover:text-sky-600">Kungfu</a></li>
            <li><a href="/contact" className="hover:text-sky-600">Yoga</a></li>            
            <li><a href="/contact" className="hover:text-sky-600">Running</a></li>
        </ul>
        </div>
        <div className="flex flex-col mr-5" dir='rtl'>
                <a href="#" className="mb-5 ">
                                <FontAwesomeIcon
                 icon={faLocationDot} fill="currentColor" className="icons w-8 h-8 mb-2  transform transition duration-300 hover:scale-125" />
                  <p>First Branch - Al-Hayar St., Abu El Matamir, Beheira</p>
                </a>
                <a href="#" className="mb-5 ">
                <FontAwesomeIcon
                 icon={faLocationDot} fill="currentColor" className="icons w-8 h-8 mb-2  transform transition duration-300 hover:scale-125 " />
                   <p>Second Branch - Khamis St., Abu El Matamir, Beheira</p>
                </a>
          </div>
          </div>

          <div className="flex justify-center gap-10 mt-5">
              <a href="https://www.facebook.com/Dreamclub.Officiall" target="_blank" aria-label="Visit our Facebook page">
              <FontAwesomeIcon
              icon={faFacebook} className="icons w-8 h-8 mb-8 transform transition duration-300 hover:scale-125" />
              </a>
            <a href="https://wa.me/201064245335"  target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon 
            icon={faWhatsapp} fill="currentColor" className="icons w-8 h-8  transform transition duration-300 hover:scale-125" />
            </a>
              <a href="https://www.instagram.com/dream_club.official?igsh=aWx5ejB6dHV3dnVw" target="_blank">
              <FontAwesomeIcon
              icon={faInstagram}  fill="currentColor"  className="icons w-8 h-8  transform transition duration-300 hover:scale-125"/>
              </a>
              <a href="http://tiktok.com">
              <FontAwesomeIcon
               icon={faTiktok} fill="currentColor" className="icons w-8 h-8  transform transition duration-300 hover:scale-125" />
              </a>
          </div>
          <p className="text-center text-xl p-5">All rights reserved by @ Team P9</p>
    </footer>
  );
};

export default Footer;
