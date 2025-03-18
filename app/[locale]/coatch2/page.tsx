"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import axios from 'axios';
import { useTranslations } from 'next-intl';
import logo from "../../../public/Captins/Image3.jpg";

const Page = () => {
  const t = useTranslations("Coatchs");
  const [plan, setPlan] = useState("");

  // دالة الاشتراك مع الكابتن
  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      console.log("Token:", token); // ✅ طباعة التوكن للتأكد

      if (!token) {
        alert("يرجى تسجيل الدخول أولًا قبل الاشتراك!");
        return;
      }

      if (!plan) {
        alert("يرجى اختيار خطة الاشتراك!");
        return;
      }

      // ✅ إرسال `program_id` مع بيانات الاشتراك
      await axios.post(
        "http://localhost:8000/api/client/subscribe",
        { 
          plan,
          program_id: 2 // ✅ إضافة `program_id` الخاص بالكابتن التاني
        }, 
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, 
          },
        }
      );

      alert("تم الاشتراك مع الكابتن بنجاح!");

      // تحديث بيانات اللاعب في localStorage
      const storedData = localStorage.getItem("playerData");
      if (storedData) {
        const player = JSON.parse(storedData);
        player.captainSubscribed = true;
        localStorage.setItem("playerData", JSON.stringify(player));
      }

    } catch (error: unknown) {
      console.error("Subscription Error:", error);

      if (axios.isAxiosError(error)) {
        console.error("Response Data:", error.response?.data);
        if (error.response?.status === 401) {
          alert("الجلسة انتهت، يرجى تسجيل الدخول مرة أخرى.");
        } else {
          alert(`حدث خطأ: ${error.response?.data?.message || "يرجى المحاولة مرة أخرى!"}`);
        }
      } else {
        alert("حدث خطأ أثناء الاشتراك مع الكابتن!");
      }
    }
  };

  return (
    <>
      <div className='flex justify-center'>
        <h1 className='text-3xl font-bold mt-10 italic text-orange-500'>{t("coatch2.title")}</h1>
      </div>
      <div>
        <p className='text-center mt-5 text-2xl'>{t("coatch2.result")}</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-20'>
          <div>
            <section className="py-12 px-6 lg:px-20">
              <div className="max-w-4xl mx-auto p-8 shadow-lg rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-400 mb-6 text-center">{t("coatch2.name")}</h2>
                <p className="text-gray-700 text-lg mb-4">{t("coatch2.description")}</p>

                <div className="mt-6">
                  <h3 className="text-2xl font-semibold text-gray-400 mb-3">{t("coatch2.customized")}</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>{t("coatch2.weight")}</li>
                    <li>{t("coatch2.muscle")}</li>
                    <li>{t("coatch2.fitness")}</li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="text-2xl font-semibold text-gray-400 mb-3">{t("coatch2.holistic")}</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>{t("coatch2.latest")}</li>
                    <li>{t("coatch2.nutrition")}</li>
                    <li>{t("coatch2.energy")}</li>
                  </ul>

                  <form onSubmit={handleSubscribe} className='flex flex-col gap-5 lg:w-8/12 p-4 md:w-8/12 w-full justify-center'>
                    <select 
                      id="gym-plan" 
                      name="gym-plan" 
                      className='bg-black text-gray-400'
                      value={plan}
                      onChange={(e) => setPlan(e.target.value)}
                    >
                      <option value="">{t("coatch2.gym_plan")}</option>
                      <option value="monthly">{t("coatch2.monthly")}</option>
                      <option value="quarterly">{t("coatch2.quarterly")}</option>
                    </select>
                    <button
                      type="submit"
                      className="border-2 border-solid border-orange-500 py-2 px-6 mt-5 rounded-full text-white hover:bg-orange-500 hover:text-white transition duration-300 w-full sm:w-auto text-center cursor-pointer"
                    >
                      {t("button")}
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>
          <div className='flex justify-center items-center relative'>
            <Image src={logo} alt="logo" 
              className='w-80 h-96 rounded-2xl transform transition duration-300 hover:scale-105 animate-bounceLight cursor-pointer' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;