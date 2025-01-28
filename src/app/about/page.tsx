import Image from "next/image";
import img1 from"../../../public/Image/img1.jpg";
import img2 from"../../../public/Image/img2.jpg";
import img3 from"../../../public/Image/img3.jpg";
import img4 from"../../../public/Image/img4.jpg";
import img5 from"../../../public/Image/img5.jpg";
import img6 from"../../../public/Image/img6.jpg";
import img7 from"../../../public/Image/img7.jpg";
import img8 from"../../../public/Image/img8.jpg";
import img9 from"../../../public/Image/img9.jpg";
import img10 from"../../../public/Image/img10.jpg";
import img11 from"../../../public/Image/img11.jpg";
import img12 from"../../../public/Image/img12.jpg";
import img13 from"../../../public/Image/img16.jpg";
import img14 from"../../../public/Image/img14.jpg";
import img15 from"../../../public/Image/img15.jpg";

const page = () => {
    const imges = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];
  return (
    <>
        <div className="flex flex-col justify-center items-center mt-10 mb-10 p-2">
        <h1 className="text-3xl text-orange-500 italic">Deam <span className="text-white">Club</span> لية تشترك فى</h1>
         <p className="w-fll p-4 md:w-5/12 lg:w-5/12 mt-2 text-gray-400 " dir="rtl">
          مكان هيغير حياتك ويوصلك لأهدافك الصحية والرياضية بطريقة ممتعة ومحترفة. لما تشترك معانا، هتستفيد 
        </p>
        <ul className="list-disc text-gray-400 w-full p-5  md:w-5/12 lg:w-5/12  leading-relaxed" dir="rtl">
          <li>.كل حاجة حديثة ومتطورة عشان تمرينك يبقى أسهل وأحسن</li>
          <li>فريق محترف هيقف جنبك خطوة بخطوة ويوجهك بأحسن طريقة.</li>
          <li>سواء بتحب رفع الأوزان، الكارديو، أو حتى زومبا ويوجا، هنلاقي لك اللي يناسبك.</li>
          <li>مكان مصمم عشان تلاقي الراحة وتتحمس تحقق أحسن نسخة منك.</li>
          <li>هتقابل ناس زيك، كلهم عايزين يوصلوا لأهدافهم ويشجعوك على النجاح.</li>
          <li>مع Dream Club، رحلتك للصحة والسعادة تبدأ هنا. يلا اشترك دلوقتي! 🚀</li>
        </ul>
       
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-4 justify-items-center place-items-center gap-9 mt-14 ">
            {
          imges.map((item, id) => (
    
          <Image src={item} alt="Image" className="w-80 h-96 mt-3 rounded-3xl  transform transition duration-300 hover:scale-110 animate-bounceLight"  key={id} />
        ))
        }

          </div>
          </>
  )
}

export default page;


