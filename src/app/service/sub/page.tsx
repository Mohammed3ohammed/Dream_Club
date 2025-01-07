import Image from 'next/image'
import React from 'react'
import logo from "../../../../public/Image/img2.jpg";

const page = () => {
  return (
    <>
        <div className='flex justify-center'>
        <h1 className='text-3xl font-bold mt-10'>اشترك معنا</h1>
        </div>
        <div>
            <h2 className='text-center mt-10 text-2xl '>اشترك الأن لتحقيق افضل نتيجه </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-20 '>
            <div className='mb-20 flex justify-center items-center'>
                <form action="/submit" method="post" className='flex flex-col gap-5 lg:w-8/12 p-4 md:w-8/12 w-full opacity-65  justify-center'>
                <label>الاسم</label>
                <input type='text' required placeholder='الاسم' className=' h-10 rounded-2xl outline-none transition focus:outline-sky-300 p-2' />
                <label>السن</label>
                <input type='text' required placeholder='السن' className=' h-10 rounded-2xl outline-none transition focus:outline-sky-300 p-2' />
                <label>الوزن</label>
                <input type='text' required placeholder='الوزن' className='h-10 rounded-2xl outline-none transition focus:outline-sky-300 p-2' />
                <label>رقم الهاتف</label>
                <input type='text' required placeholder='رقم الهاتف' className=' h-10 rounded-2xl outline-none transition focus:outline-sky-300 p-2' />
                <label>نوع الاشتراك</label>
                <textarea required placeholder='' className='shadow-lg h-52 rounded-2xl outline-none transition focus:outline-sky-300 p-2'></textarea>
                <input type='submit' value="اشترك الأن" className="border-2 border-solid border-cyan-300 py-2 px-6 mt-5 rounded-full text-cyan-300 hover:bg-cyan-300 hover:text-white transition duration-300 w-full sm:w-auto text-center cursor-pointer"  />
            </form>
                </div>
                <div className='flex justify-center items-center '>
                    <Image src={logo}
                     alt="" 
                    className='w-96 h-96 cursor-pointer rounded-3xl  p-4 transform transition duration-300 hover:scale-110 animate-bounceLight'
                   
                     />
                </div>
               
            </div>
        </div>
        
    </>
  )
}

export default page;