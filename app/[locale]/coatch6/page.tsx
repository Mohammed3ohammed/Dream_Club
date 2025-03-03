import Image from 'next/image';
import React from 'react';
import logo from "../../../public/Captins/Image6.png";
// import { Link } from '../../../i18n/routing';
import { useTranslations } from 'next-intl';

const Page = () => {
  const t = useTranslations("Coatchs");

  return (
    <>
      <div className='flex justify-center'>
        <h1 className='text-3xl font-bold mt-10 italic text-orange-500'>{t("coatch6.title")}</h1>
      </div>
      <div>
        <p className='text-center mt-5 text-2xl'>{t("coatch6.result")}</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-20'>
          <div>
            <section className="py-12 px-6 lg:px-20">
              <div className="max-w-4xl mx-auto p-8 shadow-lg rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-400 mb-6 text-center">
                  {t("coatch6.name")}
                </h2>

                <p className="text-gray-700 text-lg mb-4">
                  {t("coatch6.description")}
                </p>

                <div className="mt-6">
                  <h3 className="text-2xl font-semibold text-gray-400 mb-3">
                    {t("coatch6.customized")}
                  </h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>{t("coatch6.fitness")}</li>
                    <li>{t("coatch6.strength")}</li>
                    <li>{t("coatch6.workout")}</li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="text-2xl font-semibold text-gray-400 mb-3">
                    {t("coatch6.modern")}
                  </h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>{t("coatch6.diverse")}</li>
                    <li>{t("coatch6.techniques")}</li>
                    <li>{t("coatch6.energy")}</li>
                  </ul>
                  <form action="/submit" method="post" className='flex flex-col gap-5 lg:w-8/12 p-4 md:w-8/12 w-full justify-center'>
                    <select id="gym-plan" name="gym-plan" className='bg-black text-gray-400'>
                      <option value="">{t("coatch6.gym_plan")}</option>
                      <option value="monthly">{t("coatch6.monthly")}</option>
                      <option value="quarterly">{t("coatch6.quarterly")}</option>
                      <option value="personalized">{t("coatch6.personalized")}</option>
                    </select>
                    <button type="submit" className="border-2 border-solid border-orange-500 py-2 px-6 mt-5 rounded-full text-white hover:bg-orange-500 hover:text-white transition duration-300 w-full sm:w-auto text-center">
                      {t("button")}
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>
          <div className='flex justify-center items-center relative'>
            <Image
              src={logo}
              alt="logo"
              className='w-80 h-96 rounded-2xl transform transition duration-300 hover:scale-105 animate-bounceLight cursor-pointer'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
