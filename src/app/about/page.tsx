"use client";
import { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import img1 from "../../../public/Image/img1.jpg";
import img2 from "../../../public/Image/img2.jpg";
import img3 from "../../../public/Image/img3.jpg";
import img4 from "../../../public/Image/img4.jpg";
import img5 from "../../../public/Image/img5.jpg";
import img6 from "../../../public/Image/img6.jpg";
import img7 from "../../../public/Image/img7.jpg";
import img8 from "../../../public/Image/img8.jpg";
import img9 from "../../../public/Image/img9.jpg";
import img10 from "../../../public/Image/img10.jpg";
import img11 from "../../../public/Image/img11.jpg";
import img12 from "../../../public/Image/img12.jpg";
import img13 from "../../../public/Image/img16.jpg";
import img14 from "../../../public/Image/img14.jpg";
import img15 from "../../../public/Image/img15.jpg";

const page = () => {
  const imges = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
  ];

  useEffect(() => {
    // تفعيل الانميشن باستخدام GSAP
    const rotationDuration = 20; // مدة التدوير حول النقطة المركزية (ثواني)
    
    gsap.to(".rotating-image", {
      rotation: 360,
      repeat: -1, // التكرار المستمر
      duration: rotationDuration,
      transformOrigin: "center center",
      ease: "none",
      stagger: 0.1, // إضافة تأخير بسيط بين كل صورة لزيادة الواقعية
    });

    gsap.fromTo(
      ".rotating-image",
      {
        opacity: 0,
        scale: 0.8, // تكبير الصورة عند البداية
      },
      {
        opacity: 1,
        scale: 1,
        repeat: -1,
        yoyo: true, // تجعل التأثير يكرر ثم يعود
        duration: rotationDuration * 0.5, // مدة التأثير
        ease: "power1.inOut", // تأثير انسيابي
        stagger: 0.1, // إضافة تأخير بين كل صورة
      }
    );
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10 p-2 h-auto">
        <h1 className="text-3xl text-gray-300">Deam Club لية تشترك فى</h1>
        <p className="w-fll p-4 md:w-5/12 lg:w-5/12 mt-2 text-gray-400" dir="rtl">
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

      <div className="relative w-full h-96 flex justify-center items-center mt-14">
        {/* صورة المركز */}
        <Image
          src={img1}
          alt="Center Image"
          className="w-32 h-32 rounded-full absolute z-10"
        />
        
        {/* الصور المتحركة */}
        <div className="absolute w-full h-full flex justify-center items-center">
          {imges.map((item, id) => (
            <Image
              key={id}
              src={item}
              alt="Rotating Image"
              className="rotating-image w-24 h-24 rounded-full absolute"
              style={{
                transform: `rotate(${(id * 360) / imges.length}deg) translateX(220px)`, // تغيير المسافة بين الصور
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;


