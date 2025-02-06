"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// استيراد الصور
import img2 from "../../../public/Image/img2.jpg";
import img3 from "../../../public/Image/img3.jpg";
import img6 from "../../../public/Image/img6.jpg";
import img8 from "../../../public/Image/img8.jpg";
import img9 from "../../../public/Image/img9.jpg";
import img10 from "../../../public/Image/img10.jpg";
import img11 from "../../../public/Image/img11.jpg";
import img14 from "../../../public/Image/img14.jpg";
import img15 from "../../../public/Image/img15.jpg";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // التأكد من أنه يعمل فقط على العميل
    setIsClient(true);
    
    const imgs = document.querySelectorAll("img");
    gsap.fromTo(
      imgs,
      { opacity: 0, scale: 0.8, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: imgs,
          start: "top 90%",
          toggleActions: "play none none reverse",
          once: false,
        },
      }
    );
  }, []);

  if (!isClient) {
    return null; // تفادي أي محاولة لتطبيق الكود على الخادم
  }

  const images = [img2, img3, img6, img8, img9, img10, img11, img14, img15];

  return (
    <>
      {/* النصوص */}
      <div className="flex flex-col justify-center items-center mt-10 mb-10 p-2">
        <h1 className="text-3xl text-orange-500 italic">
          Dream <span className="text-white">Club</span> لية تشترك في
        </h1>
        <p className="w-full p-4 md:w-5/12 lg:w-5/12 mt-2 text-gray-400" dir="rtl">
          مكان هيغير حياتك ويوصلك لأهدافك الصحية والرياضية بطريقة ممتعة ومحترفة. لما تشترك معانا، هتستفيد
        </p>
        <ul className="list-disc text-gray-400 w-full p-5 md:w-5/12 lg:w-5/12 leading-relaxed" dir="rtl">
          <li>.كل حاجة حديثة ومتطورة عشان تمرينك يبقى أسهل وأحسن</li>
          <li>فريق محترف هيقف جنبك خطوة بخطوة ويوجهك بأحسن طريقة.</li>
          <li>سواء بتحب رفع الأوزان، الكارديو، أو حتى زومبا ويوجا، هنلاقي لك اللي يناسبك.</li>
          <li>مكان مصمم عشان تلاقي الراحة وتتحمس تحقق أحسن نسخة منك.</li>
          <li>هتقابل ناس زيك، كلهم عايزين يوصلوا لأهدافهم ويشجعوك على النجاح.</li>
          <li>مع Dream Club، رحلتك للصحة والسعادة تبدأ هنا. يلا اشترك دلوقتي! 🚀</li>
        </ul>
      </div>

      {/* الصور */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-4 justify-items-center place-items-center gap-9 mt-14 mb-10"
      >
        {images.map((img, id) => (
          <Image
            key={id}
            src={img}
            alt={`Image ${id + 1}`}
            className="w-80 h-96 mt-3 rounded-3xl transform transition duration-300 hover:scale-110"
          />
        ))}
      </div>
    </>
  );
};

export default Page;



