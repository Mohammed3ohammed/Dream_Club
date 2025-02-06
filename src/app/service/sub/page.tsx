import Image from 'next/image'
import React from 'react'
import logo from "../../../../Image/logo.jpg";
import Link from 'next/link';

const page = () => {
  return (
    <>
        <div className='flex justify-center'>
        <h1 className='text-3xl font-bold mt-10 italic text-orange-500'>اشترك <span className='text-white'>معنا</span></h1>
        </div>
        <div>
            <h2 className='text-center mt-5 text-2xl '>الأن لتحقيق افضل نتيجه </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-20 '>
            <div className='mb-20 flex justify-center items-center'>
                <form action="/submit" method="post" className='flex flex-col gap-5 lg:w-8/12 p-4 md:w-8/12 w-full opacity-80  justify-center '>
                <label>السن</label>
                <input type='number' required placeholder='السن' className='text-black h-10 rounded-2xl outline-none transition focus:outline-orange-500 p-2' /> 
                <label>الوزن</label>
                <input type='number' required placeholder='الوزن' className='text-black h-10 rounded-2xl outline-none transition focus:outline-orange-500 p-2' />
                <label>الطول</label>
                <input type='number' required placeholder='الطول' className='text-black h-10 rounded-2xl outline-none transition focus:outline-orange-500 p-2' />
                <label className='mt-10 text-xl'>انواع الاشتركات</label>
                <select id="gym-plan" name="gym-plan" className='bg-black'>
    <option value="">-- جيم رجال --</option>
    <option value="monthly">شهري - 500 جنيه</option>
    <option value="quarterly">جيم 3 ايام في الأسبوع 350</option>
    <option value="half-yearly">تاهيل اصابات 350 --</option>
                </select>
                <select id="gym-plan" name="gym-plan" className='bg-black'>
    <option value="">--  جيم سيدات  شامل كارديو وكلاسات زومبا --</option>
    <option value="monthly">شهري -400 جنيه</option>

                </select>
                <select id="gym-plan" name="gym-plan" className='bg-black'>
    <option value="">-- Spa --</option>
    <option value="monthly">جلست ساونا 50جنية</option>
    <option value="quarterly">جالسة جاكوزي 100جنيه</option>
    <option value="half-yearly">جالسة جاكوزي بالتلج 120جنية</option>
    <option value="yearly">جلسة مساج ضهر 300جنية</option>
    <option value="yearly">جلسة مساج كامل 300جنية</option>
    <option value="yearly">جلسة حجامة 350جنية</option>
    <option value="yearly">جلسة مساج + حجامة 450جنية</option>
                </select>
                <select id="gym-plan" name="gym-plan" className='bg-black'>
    <option value="">-- كونغ فو --</option>
    <option value="monthly">كونغ فو من سن 4 - 14 سنة 200جنيه</option>
    <option value="quarterly">كونغ فو  فوق سن 15 سنة 350جنية</option>
    <option value="half-yearly">جمباز من سن 4 - 7 200جنية</option>

                </select>
                <Link href="/log"  className="border-2 border-solid border-orange-500 py-2 px-6 mt-5 rounded-full text-white hover:bg-orange-500 hover:text-white transition duration-300 w-full sm:w-auto text-center cursor-pointer" >
                <input type='submit' value="اشترك الأن"  />
                </Link>
            </form>
                </div>
                <div className='flex justify-center items-center relative '>
                    <Image src={logo}
                     alt="" 
                    className='absolute -top-10 cursor-pointer rounded-3xl  p-4 transform transition duration-300 hover:scale-110 animate-bounceLight'
                   
                     />
                </div>
               
            </div>
        </div>
        
    </>
  )
}

export default page;