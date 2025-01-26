import Image from 'next/image';
import React from 'react'
import imge1 from"../../../public/Captins/Image1.jpg";
import imge2 from"../../../public/Captins/Image2.jpg";
import imge3 from"../../../public/Captins/Image3.jpg";
import imge4 from"../../../public/Captins/Image4.jpg";
import imge5 from"../../../public/Captins/Image5.jpg";
import imge6 from"../../../public/Captins/Image6.png";

const page = () => {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ' dir='rtl'>
       <div className='flex justify-center gap-8 '>
       <div className=' flex flex-col justify-center items-center  p-5 rounded-xl mt-10'>

        <Image src={imge1} alt='Image' className='w-80 h-96 rounded-2xl transform transition duration-300 hover:scale-110 animate-bounceLight cursor-pointer' />
            <h2 className='text-3xl mt-8'>كابتن عبد الرحمن عرقوب</h2>
            <p className='w-96  text-lg text-center mt-2'>معيد لدي كلية تربيه رياضيه جامعة الاسكندرية</p>
            <p className='w-80 md:w-96 lg:w-96 text-base mt-8' >
            متخصص في تأهيل الإصابات الرياضية وتدريب الكونغ فو. بخبرة تمتد لسنوات في هذا المجال، أقدم برامج تدريب وتأهيل مخصصة لكل فرد، تهدف إلى استعادة القوة والمرونة بعد الإصابات، مع تحسين الأداء البدني.
            أعمل أيضًا على تدريب المهارات القتالية وتعزيز الأداء الرياضي في الكونغ فو بمستوى احترافي. أضمن تقديم خطة تدريب متكاملة تعتمد على أحدث الأساليب لضمان تطور ملحوظ ومستدام
            </p>
            <button className='border-solid border-2 border-red-400 rounded-full w-36 p-2 mt-5 hover:bg-red-950 transition cursor-pointer'><a href="/service/sub">اشترك الان</a></button>
        </div>
       </div>

{/*  */}

<div className='flex justify-center gap-8 '>
       <div className=' flex flex-col justify-center items-center  p-5 rounded-xl mt-10'>
        <Image src={imge2} alt='Image' className='w-80 h-96 rounded-2xl transform transition duration-300 hover:scale-110 animate-bounceLight cursor-pointer' />
            <h2 className='text-3xl mt-8'>كابتن عاصم القصبي</h2>
            <p className='w-96 text-xl text-center mt-2'>كلية تربيه رياضية جامعة القاهره</p>
            <p className='w-80 md:w-96 lg:w-96 text-base mt-8'>
            متخصص في تأهيل الإصابات الرياضية وتدريب الكونغ فو. بخبرة تمتد لسنوات في هذا المجال، أقدم برامج تدريب وتأهيل مخصصة لكل فرد، تهدف إلى استعادة القوة والمرونة بعد الإصابات، مع تحسين الأداء البدني.
            أعمل أيضًا على تدريب المهارات القتالية وتعزيز الأداء الرياضي في الكونغ فو بمستوى احترافي. أضمن تقديم خطة تدريب متكاملة تعتمد على أحدث الأساليب لضمان تطور ملحوظ ومستدام
            </p>
        <button className='border-solid border-2 border-red-400 rounded-full w-36 p-2 mt-5 hover:bg-red-950 transition'><a href="/service/sub">اشترك الان</a></button>
        </div>
       </div>
       {/*  */}

       <div className='flex justify-center gap-8 '>
       <div className=' flex flex-col justify-center items-center  p-5 rounded-xl mt-10'>

        <Image src={imge3} alt='Image' className='w-80 h-96 rounded-2xl transform transition duration-300 hover:scale-110 animate-bounceLight cursor-pointer' />
            <h2 className='text-3xl mt-8'>كابتن على القصبي</h2>
            <p className='w-96 text-xl text-center mt-2'>كلية تربيه رياضية جامعة القاهرة</p>
            <p className='w-80 md:w-96 lg:w-96 text-base mt-8'>متخصص في تصميم برامج تدريب شخصية تهدف إلى تحقيق أهدافك الرياضية والصحية. بخبرة تمتد لسنوات في مجال اللياقة البدنية، أعمل على تقديم خطط تدريبية مخصصة لكل فرد بناءً على احتياجاته، سواء كنت تسعى لفقدان الوزن، بناء العضلات، أو تحسين مستوى لياقتك العامة.
أؤمن بأن الرياضة ليست فقط وسيلة لتحسين المظهر الجسدي، بل هي أسلوب حياة يساعدك على الشعور بالنشاط والثقة. من خلال دمج أحدث تقنيات التدريب مع نظام غذائي صحي ومتوازن، أضمن لك تحقيق نتائج مستدامة
</p>
<button className='border-solid border-2 border-red-400 rounded-full w-36 p-2 mt-5 hover:bg-red-950 transition'><a href="/service/sub">اشترك الان</a></button>
        </div>
       </div>
       {/*  */}

       <div className='flex justify-center gap-8 '>
       <div className=' flex flex-col justify-center items-center  p-5 rounded-xl mt-10'>

        <Image src={imge4} alt='Image' className='w-80 h-96 rounded-2xl transform transition duration-300 hover:scale-110 animate-bounceLight cursor-pointer' />
            <h2 className='text-3xl mt-8'>كابتن  محمد القصبى</h2>
            <p className='w-96 text-xl text-center mt-2'>كلية تربيه رياضية جامعة الاسكندرية</p>
            <p className='w-80 md:w-96 lg:w-96 text-base mt-8'>متخصص في تصميم برامج تدريب شخصية تهدف إلى تحقيق أهدافك الرياضية والصحية. بخبرة تمتد لسنوات في مجال اللياقة البدنية، أعمل على تقديم خطط تدريبية مخصصة لكل فرد بناءً على احتياجاته، سواء كنت تسعى لفقدان الوزن، بناء العضلات، أو تحسين مستوى لياقتك العامة.
أؤمن بأن الرياضة ليست فقط وسيلة لتحسين المظهر الجسدي، بل هي أسلوب حياة يساعدك على الشعور بالنشاط والثقة. من خلال دمج أحدث تقنيات التدريب مع نظام غذائي صحي ومتوازن، أضمن لك تحقيق نتائج مستدامة</p>
<button className='border-solid border-2 border-red-400 rounded-full w-36 p-2 mt-5 hover:bg-red-950 transition'><a href="/service/sub">اشترك الان</a></button>
        </div>
       </div>
         {/*  */}
    <div className='flex justify-center gap-8' dir='rtl'>
       <div className=' flex flex-col justify-center items-center  p-5 rounded-xl mt-10'>

        <Image src={imge5} alt='Image' className='w-80 h-96 rounded-2xl transform transition duration-300 hover:scale-110 animate-bounceLight cursor-pointer' />
            <h2 className='text-3xl mt-8'>كابتن فارس المناخلي</h2>
            <p className='w-96 text-xl text-center mt-2'>كلية تربيه رياضية جامعة الاسكندريه</p>
            <p className='w-80 md:w-96 lg:w-96 text-base mt-8'>متخصص في تصميم برامج تدريب شخصية تهدف إلى تحقيق أهدافك الرياضية والصحية. بخبرة تمتد لسنوات في مجال اللياقة البدنية، أعمل على تقديم خطط تدريبية مخصصة لكل فرد بناءً على احتياجاته، سواء كنت تسعى لفقدان الوزن، بناء العضلات، أو تحسين مستوى لياقتك العامة.
أؤمن بأن الرياضة ليست فقط وسيلة لتحسين المظهر الجسدي، بل هي أسلوب حياة يساعدك على الشعور بالنشاط والثقة. من خلال دمج أحدث تقنيات التدريب مع نظام غذائي صحي ومتوازن، أضمن لك تحقيق نتائج مستدامة</p>
<button className='border-solid border-2 border-red-400 rounded-full w-36 p-2 mt-5 hover:bg-red-950 transition'><a href="/service/sub">اشترك الان</a></button>
        </div>
       </div>
       {/*  */}
         {/*  */}
    <div className='flex justify-center gap-8' dir='rtl'>
       <div className=' flex flex-col justify-center items-center  p-5 rounded-xl mt-10'>

        <Image src={imge6} alt='Image' className='w-80 h-96 rounded-2xl transform transition duration-300 hover:scale-110 animate-bounceLight cursor-pointer' />
            <h2 className='text-3xl mt-8'>كابتن بسملة رضا</h2>
            <p className='w-96 text-xl text-center mt-2'>كلية تربيه رياضية جامعة الاسكندريه</p>
            <p className='w-80 md:w-96 lg:w-96 text-base mt-8'>متخصص في تصميم برامج تدريب شخصية تهدف إلى تحقيق أهدافك الرياضية والصحية. بخبرة تمتد لسنوات في مجال اللياقة البدنية، أعمل على تقديم خطط تدريبية مخصصة لكل فرد بناءً على احتياجاته، سواء كنت تسعى لفقدان الوزن، بناء العضلات، أو تحسين مستوى لياقتك العامة.
أؤمن بأن الرياضة ليست فقط وسيلة لتحسين المظهر الجسدي، بل هي أسلوب حياة يساعدك على الشعور بالنشاط والثقة. من خلال دمج أحدث تقنيات التدريب مع نظام غذائي صحي ومتوازن، أضمن لك تحقيق نتائج مستدامة</p>
<button className='border-solid border-2 border-red-400 rounded-full w-36 p-2 mt-5 hover:bg-red-950 transition'><a href="/service/sub">اشترك الان</a></button>
        </div>
       </div>
       {/*  */}
         {/*  */}
    <div className='flex justify-center gap-8' dir='rtl'>
       <div className=' flex flex-col justify-center items-center  p-5 rounded-xl mt-10'>

        <Image src={imge6} alt='Image' className='w-80 h-96 rounded-2xl transform transition duration-300 hover:scale-110 animate-bounceLight cursor-pointer' />
            <h2 className='text-3xl mt-8'>كابتن رنيم كمال</h2>
            <p className='w-96 text-xl text-center mt-2'>كلية تربيه رياضية جامعة الاسكندريه</p>
            <p className='w-80 md:w-96 lg:w-96 text-base mt-8'>متخصص في تصميم برامج تدريب شخصية تهدف إلى تحقيق أهدافك الرياضية والصحية. بخبرة تمتد لسنوات في مجال اللياقة البدنية، أعمل على تقديم خطط تدريبية مخصصة لكل فرد بناءً على احتياجاته، سواء كنت تسعى لفقدان الوزن، بناء العضلات، أو تحسين مستوى لياقتك العامة.
أؤمن بأن الرياضة ليست فقط وسيلة لتحسين المظهر الجسدي، بل هي أسلوب حياة يساعدك على الشعور بالنشاط والثقة. من خلال دمج أحدث تقنيات التدريب مع نظام غذائي صحي ومتوازن، أضمن لك تحقيق نتائج مستدامة</p>
<button className='border-solid border-2 border-red-400 rounded-full w-36 p-2 mt-5 hover:bg-red-950 transition'><a href="/service/sub">اشترك الان</a></button>
        </div>
       </div>
       {/*  */}
         {/*  */}
    <div className='flex justify-center gap-8' dir='rtl'>
       <div className=' flex flex-col justify-center items-center  p-5 rounded-xl mt-10'>

        <Image src={imge6} alt='Image' className='w-80 h-96 rounded-2xl transform transition duration-300 hover:scale-110 animate-bounceLight cursor-pointer' />
            <h2 className='text-3xl mt-8'>كابتن الأء العبد</h2>
            <p className='w-96 text-xl text-center mt-2'>كلية تربيه رياضية جامعة الاسكندريه</p>
            <p className='w-80 md:w-96 lg:w-96 text-base mt-8'>متخصص في تصميم برامج تدريب شخصية تهدف إلى تحقيق أهدافك الرياضية والصحية. بخبرة تمتد لسنوات في مجال اللياقة البدنية، أعمل على تقديم خطط تدريبية مخصصة لكل فرد بناءً على احتياجاته، سواء كنت تسعى لفقدان الوزن، بناء العضلات، أو تحسين مستوى لياقتك العامة.
أؤمن بأن الرياضة ليست فقط وسيلة لتحسين المظهر الجسدي، بل هي أسلوب حياة يساعدك على الشعور بالنشاط والثقة. من خلال دمج أحدث تقنيات التدريب مع نظام غذائي صحي ومتوازن، أضمن لك تحقيق نتائج مستدامة</p>
<button className='border-solid border-2 border-red-400 rounded-full w-36 p-2 mt-5 hover:bg-red-950 transition'><a href="/service/sub">اشترك الان</a></button>
        </div>
       </div>
       {/*  */}
    </div>
  
    </>
  )
}

export default page;