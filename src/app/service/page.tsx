import Image from 'next/image';
import React from 'react'
import imge2 from"../../../public/Captins/Image2.jpg";
import imge3 from"../../../public/Captins/Image3.jpg";
import imge4 from"../../../public/Captins/Image4.jpg";
import imge5 from"../../../public/Captins/Image5.jpg";
import imge6 from"../../../public/Captins/Image6.png";


const page = () => {

  const Coatch = [
    {
      name: "Captain Assem El-Kasaby",
      study: "Faculty of Physical Education, Cairo University",
      img: imge2,
      description: `
        Specialist in sports injury rehabilitation and Kung Fu training, with extensive experience in the field. I provide customized rehabilitation programs that help restore fitness and flexibility after injuries while improving physical performance in a safe and effective manner.
        I also focus on developing combat skills in Kung Fu at a professional level through modern training plans designed to achieve the best results and ensure continuous progress.`,
        link: "../service/sub/coatch1",
    },
    {
      name: "Captain Ali El-Kasaby",
      study: "Faculty of Physical Education, Cairo University",
      img: imge3,
      description: `
        Specialist in designing personalized training programs aimed at achieving your fitness and health goals. With years of experience in the fitness industry, I create customized workout plans tailored to each individual’s needs, whether you're looking to lose weight, build muscle, or improve overall fitness.
        I believe that fitness is not just about physical appearance but a lifestyle that enhances energy and confidence. By combining the latest training techniques with a healthy and balanced diet, I ensure sustainable results.`,
        link: "../service/sub/coatch2",
    },
    {
      name: "Captain Mohamed El-Kasaby",
      study: "Faculty of Physical Education, Alexandria University",
      img: imge4,
      description: `
        Specialist in creating customized training plans tailored to your fitness and health needs. With years of experience in the fitness industry, I design comprehensive workout programs, whether your goal is weight loss, muscle gain, or overall physical improvement.
        I strive to make fitness a part of your lifestyle, providing you with more energy and greater confidence through modern training methods and a balanced nutrition plan to achieve effective and sustainable results.`,
        link: "../service/sub/coatch3",
    },
    {
      name: "Captain Fares El-Monakhly",
      study: "Faculty of Physical Education, Beni Suef University",
      img: imge5,
      description: `
        I help you achieve your fitness goals through personalized training programs tailored specifically for you. Whether you aim to improve your physical performance, lose weight, or build strength and endurance, I will create a workout plan that matches your abilities and supports your progress in a balanced way.
        I believe that fitness is not just about exercise but a lifestyle that enhances your health and confidence. That's why I focus on providing a comprehensive training approach that combines the latest fitness techniques with proper nutritional guidance to ensure lasting results.`,
        link: "../service/sub/coatch4",
    },
    {
      name: "Captain Raneem Kamal",
      study: "Faculty of Physical Education, Helwan University",
      img: imge6,
      description: `
        A specialist in designing personalized training programs to help you achieve your fitness goals with confidence and strength. Whether you want to improve your fitness, tone your body, or build strength and endurance, I will create a tailored training plan based on your needs.
        I believe that exercise provides energy and confidence, so I focus on offering diverse workouts and modern training techniques to ensure continuous progress and lasting results.
      `,
      link: "../service/sub/coatch5",
    },
    {
      name: "Captain Alaa El-Abd",
      study: "Faculty of Physical Education, Alexandria University",
      img: imge6,
      description: `
        A specialist in fitness and personal training, I help you achieve a balance between exercise and health in a fun and effective way. Whether your goal is weight loss, body sculpting, or improving your overall fitness, I will provide a tailored training plan that fits your lifestyle and supports your progress.
        I focus on making workouts enjoyable and motivating while incorporating proper nutrition to ensure the best results in a healthy and sustainable way.`,
      link: "../service/sub/coatch6",
    },
   
];

  return (
      <div className='container mx-auto px-4 mt-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-32'>
      {
        Coatch.map((item, id) => (
          <div className=' flex flex-col justify-center items-center  p-5 rounded-xl mt-10shadow-lg' key={id}>
          <Image src={item.img} alt="" className='w-80 h-96 rounded-2xl transform transition duration-300 hover:scale-105 animate-bounceLight cursor-pointer' />
          <h2 className='text-3xl mt-8'>{item.name}</h2>
          <p className='w-96  text-lg text-center mt-2'>{item.study}</p>
          <p className='w-80 md:w-96 lg:w-96 text-base mt-8'>{item.description}</p>
          <a href={item.link}>
                <button className='border-solid border-2 border-orange-500 rounded-full w-36 p-2 mt-5 hover:bg-orange-500 transition'>
                  Subscribe Now
                </button>
              </a>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default page;