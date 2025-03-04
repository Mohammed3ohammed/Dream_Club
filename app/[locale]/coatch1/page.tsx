import Image from 'next/image';
import React from 'react';
import logo from "../../../public/Captins/Image2.jpg";
import { useTranslations } from 'next-intl';

const Page = () => {
    const t = useTranslations("Coatchs");
  return (
    <>
        <div className='flex justify-center'>
        <h1 className='text-3xl font-bold mt-10 italic text-orange-500'>{t("Coatch1.title")}</h1>
        </div>
        <div>
        <p className='text-center mt-5 text-2xl'>{t("Coatch1.result")}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-20 '>
            <div>
            <section className="py-12 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto  p-8 shadow-lg rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-600 mb-6 text-center">{t("Coatch1.name")}</h2>
        <p className="text-gray-600 text-lg mb-4">{t("Coatch1.description")}</p>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-600 mb-3">{t("Coatch1.physica")}</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>{t("Coatch1.fitness")}</li>
            <li>{t("Coatch1.strength")}</li>
            <li>{t("Coatch1.physical")}</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-600 mb-3">{t("Coatch1.combat")}</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>{t("Coatch1.advanced")}</li>
            <li>{t("Coatch1.improving")}</li>
            <li>{t("Coatch1.combatt")}</li>
          </ul>
          <form action="/submit" method="post" className='flex flex-col gap-5 lg:w-8/12 p-4 md:w-8/12 w-full  justify-center '>
          <select id="gym-plan" name="gym-plan" className='bg-black text-gray-400'>
                    <option value="" className=''>{t("Coatch1.gym_plan")}</option>
                    <option value="kids-kungfu">{t("Coatch1.quarterly")}</option>
                    <option value="adults-kungfu">{t("Coatch1.quarterly")}</option>
                    <option value="gymnastics">{t("Coatch1.gymnastics")}</option>
                </select>
                <select id="gym-plan" name="gym-plan" className='bg-black'>
                    <option value="">{t("Coatch1.Spa.spaa")}</option>
                    <option value="sauna">{t("Coatch1.Spa.sauna")}</option>
                    <option value="jacuzzi">{t("Coatch1.Spa.jacuzzi")}</option>
                    <option value="ice-jacuzzi">{t("Coatch1.Spa.ice-jacuzzi")}</option>
                    <option value="back-massage">{t("Coatch1.Spa.back-massage")}</option>
                    <option value="full-massage">{t("Coatch1.Spa.full-massage")}</option>
                    <option value="cupping">{t("Coatch1.Spa.cupping")}</option>
                    <option value="massage-cupping">{t("Coatch1.Spa.massage")}</option>
                </select>
                <button type="submit" className="border-2 border-solid border-orange-500 py-2 px-6 mt-5 rounded-full text-white hover:bg-orange-500 hover:text-white transition duration-300 w-full sm:w-auto text-center cursor-pointer">
                    {t("button")}
                  </button>
                </form>
        </div>
      </div>
    </section>
            </div>
                <div className='flex justify-center items-center relative '>
                    <Image src={logo} alt="logo" 
                    className='w-80 h-96 rounded-2xl transform transition duration-300 hover:scale-105 animate-bounceLight cursor-pointer' />
                </div>
            
            </div>
        </div>
        
    </>
  );
};

export default Page;