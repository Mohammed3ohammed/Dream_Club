import Image from 'next/image';
import React from 'react'
import imge1 from"../../../public/Captins/Image1.jpg";
import imge2 from"../../../public/Captins/Image2.jpg";
import imge3 from"../../../public/Captins/Image3.jpg";
import imge4 from"../../../public/Captins/Image4.jpg";
import imge5 from"../../../public/Captins/Image5.jpg";
import imge6 from"../../../public/Captins/Image6.png";

const page = () => {

  const Images = [
    {
    name:"كابتن عبدالرحمن عرقوب", 
    study: 'معيد لدي كلية تربيه رياضيه جامعة الاسكندرية',
    discription: `
     متخصص في تأهيل الإصابات الرياضية وتدريب الكونغ فو. بخبرة تمتد لسنوات في هذا المجال، أقدم برامج تدريب وتأهيل مخصصة لكل فرد، تهدف إلى استعادة القوة والمرونة بعد الإصابات، مع تحسين الأداء البدني. أعمل أيضًا على تدريب المهارات القتالية وتعزيز الأداء الرياضي في الكونغ فو بمستوى احترافي. أضمن تقديم خطة تدريب متكاملة تعتمد على أحدث الأساليب لضمان تطور ملحوظ ومستدام `,
    img: imge1, 
  },

    {
     
      name: "كابتن عاصم القصبي",
      study: 'كلية تربيه رياضية جامعة القاهرة',
      img: imge2,
      discription:`
      متخصص في تأهيل الإصابات الرياضية وتدريب الكونغ فو، مع خبرة واسعة في المجال. أقدم برامج تأهيل مخصصة تساعد على استعادة اللياقة والمرونة بعد الإصابات، مع تحسين الأداء البدني بشكل آمن وفعال.
كما أركز على تطوير المهارات القتالية في الكونغ فو بمستوى احترافي، من خلال خطط تدريب حديثة تهدف إلى تحقيق أفضل النتائج وضمان تقدم مستمر.
      `,
    },
    {
      name:"كابتن على القصبي",
      study:'كلية تربية رياضية جامعة القاهرة',
      img: imge3,
      discription:`
      متخصص في تصميم برامج تدريب شخصية تهدف إلى تحقيق أهدافك الرياضية والصحية. بخبرة تمتد لسنوات في مجال اللياقة البدنية، أعمل على تقديم خطط تدريبية مخصصة لكل فرد بناءً على احتياجاته، سواء كنت تسعى لفقدان الوزن، بناء العضلات، أو تحسين مستوى لياقتك العامة. أؤمن بأن الرياضة ليست فقط وسيلة لتحسين المظهر الجسدي، بل هي أسلوب حياة يساعدك على الشعور بالنشاط والثقة. من خلال دمج أحدث تقنيات التدريب مع نظام غذائي صحي ومتوازن، أضمن لك تحقيق نتائج مستدامة
      `,
    },
    {
      name:"كابتن محمد القصبي",
      study:'كلية تربية رياضية جامعة الاسكندرية',
      img: imge4,
      discription:`
      متخصص في إعداد خطط تدريبية مخصصة تلبي احتياجاتك الرياضية والصحية. مع خبرة تمتد لسنوات في مجال اللياقة البدنية، أضع لك برنامجًا تدريبيًا متكاملًا، سواء كان هدفك فقدان الوزن، زيادة الكتلة العضلية، أو تحسين أدائك البدني بشكل عام. أحرص على أن تكون الرياضة جزءًا من نمط حياتك، مما يمنحك طاقة أكبر وثقة أعلى، من خلال أساليب تدريب حديثة وبرنامج غذائي متوازن لتحقيق نتائج فعالة ومستدامة.
      `,
    },
    {
      name:"كابتن فارس المناخلى",
      study:'كلية التربية الرياضية جامعة بني سويف',
      img: imge5,
      discription:`
      أساعدك على تحقيق أهدافك الرياضية من خلال برامج تدريب شخصية مصممة خصيصًا لك. سواء كنت ترغب في تحسين أدائك البدني، خسارة الوزن، أو اكتساب قوة وتحمل أكبر، سأضع لك خطة تدريبية تناسب قدراتك وتدعم تقدمك بطريقة متوازنة. أؤمن بأن اللياقة ليست مجرد تمارين، بل أسلوب حياة يعزز صحتك وثقتك بنفسك، لذا أحرص على تقديم تدريب متكامل يجمع بين أحدث الأساليب الرياضية والتوجيه الغذائي السليم لضمان نتائج تدوم.
      `,
      
    },
    {
      name:"كابتن بسملة رضا",
      study:'كلية تربية رياضيه جامعة المنصورة',
      img: imge6,
      discription:`
      مدربة محترفة في الكونغ فو، أساعدكِ على تطوير مهاراتكِ القتالية وتعزيز قوتكِ ولياقتكِ البدنية من خلال أساليب تدريب حديثة ومكثفة. سواء كنتِ مبتدئة أو تبحثين عن الاحتراف، سأضع لكِ برنامجًا تدريبيًا متكاملًا يشمل تحسين القوة، السرعة، والتحمل، بالإضافة إلى تعلم تقنيات الدفاع عن النفس. أؤمن بأن الكونغ فو ليس مجرد رياضة، بل أسلوب حياة يمنحكِ الثقة والانضباط والقوة الذهنية والبدنية.
      `,
    },
    {
      name:"كابتن الأء العبد",
      study:'كلية تربيه رياضية جامعة الاسكندرية',
      img: imge6,
      discription:`
      متخصصة في اللياقة البدنية والتدريب الشخصي، أساعدكِ على تحقيق التوازن بين الرياضة والصحة بأسلوب ممتع وفعال. سواء كان هدفكِ خسارة الوزن، نحت الجسم، أو تحسين مستوى لياقتكِ، سأقدم لكِ خطة تدريبية تناسب نمط حياتكِ وتدعم تقدمكِ. أحرص على أن تكون التمارين ممتعة ومحفزة، مع دمج التغذية السليمة لضمان أفضل النتائج بطريقة صحية ومستدامة.
      `,
    },
    {
      name:"كابتن رنيم كمال",
      study:'كلية تربية رياضية جامعة حلوان',
      img: imge6,
      discription:`
      متخصصة في تصميم برامج تدريب شخصية تساعدك على تحقيق أهدافك الرياضية بثقة وقوة. سواء كنتِ ترغبين في تحسين لياقتك، شد الجسم، أو اكتساب قوة وتحمل أكبر، سأضع لكِ خطة تدريبية مصممة خصيصًا لكِ بناءً على احتياجاتك. أؤمن بأن الرياضة تمنحكِ الطاقة والثقة، لذلك أحرص على تقديم تمارين متنوعة وأساليب تدريب حديثة لضمان تطور مستمر ونتائج تدوم.
      `,
    }

];

  return (
       <div className='container mx-auto px-4 mt-10'>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-32' dir='rtl'>
      {
        Images.map((item, id) => (
          <div className=' flex flex-col justify-center items-center  p-5 rounded-xl mt-10shadow-lg' key={id}>
          <Image src={item.img} alt="" className='w-80 h-96 rounded-2xl transform transition duration-300 hover:scale-105 animate-bounceLight cursor-pointer' />
          <h2 className='text-3xl mt-8'>{item.name}</h2>
          <p className='w-96  text-lg text-center mt-2'>{item.study}</p>
          <p className='w-80 md:w-96 lg:w-96 text-base mt-8'>{item.discription}</p>
  <button className='border-solid border-2 border-orange-500 rounded-full w-36 p-2 mt-5 hover:bg-orange-500 transition'><a href="/service/sub">اشترك الان</a></button>
          </div>
        ))
      }
       </div>
    </div>
  )
}

export default page;



       {/* <div className='flex justify-center gap-8 '>
       <div className=' flex flex-col justify-center items-center  p-5 rounded-xl mt-10'>

        <Image src={imge1} alt='Image' className='w-80 h-96 rounded-2xl transform transition duration-300 hover:scale-110 animate-bounceLight cursor-pointer' />
            <h2 className='text-3xl mt-8'>كابتن عبد الرحمن عرقوب</h2>
            <p className='w-96  text-lg text-center mt-2'>معيد لدي كلية تربيه رياضيه جامعة الاسكندرية</p>
            <p className='w-80 md:w-96 lg:w-96 text-base mt-8' >
            متخصص في تأهيل الإصابات الرياضية وتدريب الكونغ فو. بخبرة تمتد لسنوات في هذا المجال، أقدم برامج تدريب وتأهيل مخصصة لكل فرد، تهدف إلى استعادة القوة والمرونة بعد الإصابات، مع تحسين الأداء البدني.
            أعمل أيضًا على تدريب المهارات القتالية وتعزيز الأداء الرياضي في الكونغ فو بمستوى احترافي. أضمن تقديم خطة تدريب متكاملة تعتمد على أحدث الأساليب لضمان تطور ملحوظ ومستدام
            </p>
            <button className='border-solid border-2 border-orange-500 rounded-full w-36 p-2 mt-5 hover:bg-orange-500 transition cursor-pointer'><a href="/service/sub">اشترك الان</a></button>
        </div>
       </div> */}

{/*  */}

{/* <div className='flex justify-center gap-8 '>
       <div className=' flex flex-col justify-center items-center  p-5 rounded-xl mt-10'>
        <Image src={imge2} alt='Image' className='w-80 h-96 rounded-2xl transform transition duration-300 hover:scale-110 animate-bounceLight cursor-pointer' />
            <h2 className='text-3xl mt-8'>كابتن عاصم القصبي</h2>
            <p className='w-96 text-xl text-center mt-2'>كلية تربيه رياضية جامعة القاهره</p>
            <p className='w-80 md:w-96 lg:w-96 text-base mt-8'>
            متخصص في تأهيل الإصابات الرياضية وتدريب الكونغ فو، بخبرة طويلة في المجال. أقدم برامج تأهيل رياضي مخصصة لاستعادة القوة والمرونة بعد الإصابات، مع تحسين الأداء البدني بشكل فعال.
كما أعمل على تدريب المهارات القتالية في الكونغ فو بمستوى احترافي، من خلال خطط تدريب متكاملة تعتمد على أحدث الأساليب لضمان تقدم مستمر وأداء متميز.

           </p>
        <button className='border-solid border-2 border-orange-500 rounded-full w-36 p-2 mt-5 hover:bg-orange-500 transition'><a href="/service/sub">اشترك الان</a></button>
        </div>
       </div> */}
       {/*  */}

       {/* <div className='flex justify-center gap-8 '>
       <div className=' flex flex-col justify-center items-center  p-5 rounded-xl mt-10'>

        <Image src={imge3} alt='Image' className='w-80 h-96 rounded-2xl transform transition duration-300 hover:scale-110 animate-bounceLight cursor-pointer' />
            <h2 className='text-3xl mt-8'>كابتن على القصبي</h2>
            <p className='w-96 text-xl text-center mt-2'>كلية تربيه رياضية جامعة القاهرة</p>
            <p className='w-80 md:w-96 lg:w-96 text-base mt-8'>متخصص في تصميم برامج تدريب شخصية تهدف إلى تحقيق أهدافك الرياضية والصحية. بخبرة تمتد لسنوات في مجال اللياقة البدنية، أعمل على تقديم خطط تدريبية مخصصة لكل فرد بناءً على احتياجاته، سواء كنت تسعى لفقدان الوزن، بناء العضلات، أو تحسين مستوى لياقتك العامة.
أؤمن بأن الرياضة ليست فقط وسيلة لتحسين المظهر الجسدي، بل هي أسلوب حياة يساعدك على الشعور بالنشاط والثقة. من خلال دمج أحدث تقنيات التدريب مع نظام غذائي صحي ومتوازن، أضمن لك تحقيق نتائج مستدامة
</p>
<button className='border-solid border-2 border-orange-500 rounded-full w-36 p-2 mt-5 hover:bg-orange-500 transition'><a href="/service/sub">اشترك الان</a></button>
        </div>
       </div> */}
       {/*  */}

       {/* <div className='flex justify-center gap-8 '>
       <div className=' flex flex-col justify-center items-center  p-5 rounded-xl mt-10'>

        <Image src={imge4} alt='Image' className='w-80 h-96 rounded-2xl transform transition duration-300 hover:scale-110 animate-bounceLight cursor-pointer' />
            <h2 className='text-3xl mt-8'>كابتن  محمد القصبى</h2>
            <p className='w-96 text-xl text-center mt-2'>كلية تربيه رياضية جامعة الاسكندرية</p>
            <p className='w-80 md:w-96 lg:w-96 text-base mt-8'>
            مدرب متخصص في تصميم برامج رياضية تناسب مختلف الأهداف، سواء كنت تسعى إلى تحسين لياقتك، بناء العضلات، أو التخلص من الوزن الزائد. بخبرة واسعة في المجال، أقدم لك خططًا تدريبية عملية ومبنية على أسس علمية، لضمان تطور مستمر ونتائج ملموسة. أؤمن بأن النجاح في الرياضة لا يعتمد فقط على التمارين، بل يشمل أيضًا التغذية السليمة ونمط الحياة الصحي، وهذا ما أعمل على تحقيقه معك خطوة بخطوة.
            </p>
<button className='border-solid border-2 border-orange-500 rounded-full w-36 p-2 mt-5 hover:bg-orange-500 transition'><a href="/service/sub">اشترك الان</a></button>
        </div>
       </div> */}
         {/*  */}
    {/* <div className='flex justify-center gap-8' dir='rtl'>
       <div className=' flex flex-col justify-center items-center  p-5 rounded-xl mt-10'>

        <Image src={imge5} alt='Image' className='w-80 h-96 rounded-2xl transform transition duration-300 hover:scale-110 animate-bounceLight cursor-pointer' />
            <h2 className='text-3xl mt-8'>كابتن فارس المناخلي</h2>
            <p className='w-96 text-xl text-center mt-2'>كلية تربيه رياضية جامعة بني سويف</p>
            <p className='w-80 md:w-96 lg:w-96 text-base mt-8'>
            أساعدك على تحقيق أهدافك الرياضية من خلال برامج تدريب شخصية مصممة خصيصًا لك. سواء كنت ترغب في تحسين أدائك البدني، خسارة الوزن، أو اكتساب قوة وتحمل أكبر، سأضع لك خطة تدريبية تناسب قدراتك وتدعم تقدمك بطريقة متوازنة. أؤمن بأن اللياقة ليست مجرد تمارين، بل أسلوب حياة يعزز صحتك وثقتك بنفسك، لذا أحرص على تقديم تدريب متكامل يجمع بين أحدث الأساليب الرياضية والتوجيه الغذائي السليم لضمان نتائج تدوم.
            </p>
<button className='border-solid border-2 border-orange-500 rounded-full w-36 p-2 mt-5 hover:bg-orange-500 transition'><a href="/service/sub">اشترك الان</a></button>
        </div>
       </div> */}
       {/*  */}
         {/*  */}
    {/* <div className='flex justify-center gap-8' dir='rtl'>
       <div className=' flex flex-col justify-center items-center  p-5 rounded-xl mt-10'>

        <Image src={imge6} alt='Image' className='w-80 h-96 rounded-2xl transform transition duration-300 hover:scale-110 animate-bounceLight cursor-pointer' />
            <h2 className='text-3xl mt-8'>كابتن بسملة رضا</h2>
            <p className='w-96 text-xl text-center mt-2'>كلية تربيه رياضية جامعة بني سويف</p>
            <p className='w-80 md:w-96 lg:w-96 text-base mt-8'>
            مدربة محترفة في الكونغ فو، أساعدكِ على تطوير مهاراتكِ القتالية وتعزيز قوتكِ ولياقتكِ البدنية من خلال أساليب تدريب حديثة ومكثفة. سواء كنتِ مبتدئة أو تبحثين عن الاحتراف، سأضع لكِ برنامجًا تدريبيًا متكاملًا يشمل تحسين القوة، السرعة، والتحمل، بالإضافة إلى تعلم تقنيات الدفاع عن النفس. أؤمن بأن الكونغ فو ليس مجرد رياضة، بل أسلوب حياة يمنحكِ الثقة والانضباط والقوة الذهنية والبدنية
            </p>
<button className='border-solid border-2 border-orange-500 rounded-full w-36 p-2 mt-5 hover:bg-orange-500transition'><a href="/service/sub">اشترك الان</a></button>
        </div>
       </div> */}
       {/*  */}
         {/*  */}
    {/* <div className='flex justify-center gap-8' dir='rtl'>
       <div className=' flex flex-col justify-center items-center  p-5 rounded-xl mt-10'>

        <Image src={imge6} alt='Image' className='w-80 h-96 rounded-2xl transform transition duration-300 hover:scale-110 animate-bounceLight cursor-pointer' />
            <h2 className='text-3xl mt-8'>كابتن رنيم كمال</h2>
            <p className='w-96 text-xl text-center mt-2'>كلية تربيه رياضية جامعة حلوان</p>
            <p className='w-80 md:w-96 lg:w-96 text-base mt-8'>
            مدربة متخصصة في تصميم برامج تدريب شخصية تساعدك على تحقيق أهدافك الرياضية بثقة وقوة. سواء كنتِ ترغبين في تحسين لياقتك، شد الجسم، أو اكتساب قوة وتحمل أكبر، سأضع لكِ خطة تدريبية مصممة خصيصًا لكِ بناءً على احتياجاتك. أؤمن بأن الرياضة تمنحكِ الطاقة والثقة، لذلك أحرص على تقديم تمارين متنوعة وأساليب تدريب حديثة لضمان تطور مستمر ونتائج تدوم.
            </p>
<button className='border-solid border-2 border-orange-500 rounded-full w-36 p-2 mt-5 hover:bg-orange-500 transition'><a href="/service/sub">اشترك الان</a></button>
        </div>
       </div> */}
       {/*  */}
         {/*  */}
    {/* <div className='flex justify-center gap-8' dir='rtl'>
       <div className=' flex flex-col justify-center items-center  p-5 rounded-xl mt-10'>

        <Image src={imge6} alt='Image' className='w-80 h-96 rounded-2xl transform transition duration-300 hover:scale-110 animate-bounceLight cursor-pointer' />
            <h2 className='text-3xl mt-8'>كابتن الأء العبد</h2>
            <p className='w-96 text-xl text-center mt-2'>كلية تربيه رياضية جامعة الاسكندريه</p>
            <p className='w-80 md:w-96 lg:w-96 text-base mt-8'>
            متخصصة في اللياقة البدنية والتدريب الشخصي، أساعدكِ على تحقيق التوازن بين الرياضة والصحة بأسلوب ممتع وفعال. سواء كان هدفكِ خسارة الوزن، نحت الجسم، أو تحسين مستوى لياقتكِ، سأقدم لكِ خطة تدريبية تناسب نمط حياتكِ وتدعم تقدمكِ. أحرص على أن تكون التمارين ممتعة ومحفزة، مع دمج التغذية السليمة لضمان أفضل النتائج بطريقة صحية ومستدامة.
            </p>
<button className='border-solid border-2 border-orange-500 rounded-full w-36 p-2 mt-5 hover:bg-orange-500 transition'><a href="/service/sub">اشترك الان</a></button>
        </div>
       </div> */}
       {/*  */}