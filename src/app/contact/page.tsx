import React from "react";

const Schedule = () => {
  const schedule = [
    { 
      day: "السبت", 
      men: "6:00 PM    -     1:00 AM", 
      women: "1:00 PM  -      6:00 PM" 
    },
    { 
      day: "الأحد", 
      men: "2:00 PM   -    1:00 AM", 
      women: "8:00 AM  -     2:00 PM" 
    },
    { 
      day: "الإثنين", 
      men: "6:00 PM -  1:00 AM", 
      women: "1:00 PM - 6:00 PM" 
    },
    { 
      day: "الثلاثاء", 
      men: "2:00 PM -  1:00 AM", 
      women: "8:00 AM - 2:00 PM" 
    },
    { 
      day: "الأربعاء", 
      men: "6:00 PM - 1:00 AM", 
      women: "1:00 PM - 6:00 PM" 
    },
    { 
      day: "الخميس", 
      men: "2:00 PM -  2:00 AM", 
      women: "8:00 AM - 2:00 PM" 
    },
    { 
      day: "الجمعة", 
      men: "مغلق", 
      women: "2:00 PM - 6:00 PM" 
    },
  ];

  const schedul = [
    {
      type: "Push (الدفع)",
      exercises: [
        "Bench Press (الصدر)",
        "Overhead Press (الأكتاف)",
        "Tricep Dips (الترايسبس)",
      ],
      days: "السبت، الثلاثاء، الخميس",
    },
    {
      type: "Pull (السحب)",
      exercises: [
        "Pull-ups (العقلة)",
        "Barbell Row (التجديف بالبار)",
        "Bicep Curls (البايسبس)",
      ],
      days: "الأحد، الأربعاء،",
    },
    {
      type: "Legs (الأرجل)",
      exercises: [
        "Squats (القرفصاء)",
        "Leg Press (ضغط الأرجل)",
        "Calf Raises (السمانة)",
      ],
      days: "الاثنين، الخميس",
    },
  ];

  const rehabSchedule = [
    {
      type: "تأهيل إصابة الكتف",
      exercises: [
        "Shoulder Rotations (تدوير الكتف)",
        "Band Pull Aparts (تمارين باستخدام الشريط)",
        "Overhead Stretch (تمديد الكتف فوق الرأس)",
      ],
      days: "الأحد، الثلاثاء، الخميس",
    },
    {
      type: "تأهيل إصابة الركبة",
      exercises: [
        "Step-ups (صعود السلم)",
        "Hamstring Curls (تمارين أوتار الركبة)",
        "Leg Extensions (تمديد الأرجل)",
      ],
      days: "الإثنين، الأربعاء",
    },
    {
      type: "تأهيل إصابة الظهر",
      exercises: [
        "Cat-Cow Stretch (تمدد القط-البقرة)",
        "Superman Exercise (تمرين السوبرمان)",
        "Bridges (الجسور)",
      ],
      days: "السبت، الثلاثاء، الخميس",
    },
  ];

  const fitnessPlan = [
    {
      type: "تمارين الكارديو",
      exercises: ["المشي السريع", "ركوب الدراجة", "الجري الخفيف"],
      goals: "تحسين صحة القلب وزيادة اللياقة العامة",
      days: "الأحد، الثلاثاء، الخميس",
    },
    {
      type: "تمارين القوة",
      exercises: ["تمارين الأوزان الحرة", "تمرين السكوات", "تمارين البطن"],
      goals: "بناء العضلات وزيادة القوة",
      days: "الإثنين، الأربعاء",
    },
    {
      type: "تمارين المرونة",
      exercises: ["تمارين التمدد", "اليوغا", "تمارين التوازن"],
      goals: "تحسين المرونة وتخفيف التوتر",
      days: "السبت",
    },
  ];



  const kungFuSchedule = [
    {
      type: "تمارين اللياقة",
      exercises: [
        "قفز الحبل (Jump Rope)",
        "تمارين التمدد الديناميكية (Dynamic Stretching)",
        "تمارين الجري السريع (Sprint Intervals)",
      ],
      goals: "تحسين اللياقة البدنية والمرونة",
      days: "السبت، الإثنين، الأربعاء",
    },
    {
      type: "تقنيات القتال",
      exercises: [
        "تمرين اللكمات (Punching Drills)",
        "تمارين الركلات العالية (High Kicks)",
        "تمارين الدفاع (Blocking Techniques)",
      ],
      goals: "تطوير مهارات القتال وتقنيات الدفاع",
      days: "الأحد، الثلاثاء",
    },
    {
      type: "تأمل وتوازن",
      exercises: [
        "تمرين التأمل (Meditation)",
        "تمارين التنفس العميق (Deep Breathing)",
        "تمارين التوازن (Balance Training)",
      ],
      goals: "زيادة التركيز وتحسين التوازن",
      days: "الخميس",
    },
  ];


  return (
    <>
      {/* جدول مواعيد الجيم */}
      <div className=" py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-600">جدول مواعيد الجيم</h1>
          <div className="overflow-x-auto">
            <table className="w-full table-auto shadow-md rounded-lg">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">اليوم</th>
                  <th className="px-4 py-2 text-left">مواعيد الرجال</th>
                  <th className="px-4 py-2 text-left">مواعيد السيدات</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((entry, index) => (
                  <tr key={index} className="border-b ">
                    <td className="px-4 py-2">{entry.day}</td>
                    <td className="px-4 py-2">{entry.men}</td>
                    <td className="px-4 py-2">{entry.women}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* جدول Push Pull Legs */}
      <div className=" py-10 ">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-600">Push Pull Legs Schedule</h1>
          <div className="overflow-x-auto">
            <table className="w-full table-auto shadow-md  rounded-lg">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">نوع التمرين</th>
                  <th className="px-4 py-2 text-left">التمارين</th>
                  <th className="px-4 py-2 text-left">الأيام</th>
                </tr>
              </thead>
              <tbody>
                {schedul.map((entry, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-2">{entry.type}</td>
                    <td className="px-4 py-2">
                      <ul className="list-disc list-inside">
                        {entry.exercises.map((exercise, i) => (
                          <li key={i}>{exercise}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-4 py-2">{entry.days}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="py-10 ">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-600">جدول تمارين اللياقة البدنية</h1>
        <div className="overflow-x-auto">
          <table className="w-full table-auto  shadow-md rounded-lg">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-2 text-left">نوع التمرين</th>
                <th className="px-4 py-2 text-left">التمارين</th>
                <th className="px-4 py-2 text-left">الأهداف</th>
                <th className="px-4 py-2 text-left">الأيام</th>
              </tr>
            </thead>
            <tbody>
              {fitnessPlan.map((entry, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{entry.type}</td>
                  <td className="px-4 py-2">
                    <ul className="list-disc list-inside">
                      {entry.exercises.map((exercise, i) => (
                        <li key={i}>{exercise}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-4 py-2">{entry.goals}</td>
                  <td className="px-4 py-2">{entry.days}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
      {/*  */}
              
      <div className="py-10 ">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-600">جدول تأهيل الإصابات</h1>
        <div className="overflow-x-auto">
          <table className="w-full table-auto  rounded-lg">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-2 text-left">نوع التأهيل</th>
                <th className="px-4 py-2 text-left">التمارين</th>
                <th className="px-4 py-2 text-left">الأيام</th>
              </tr>
            </thead>
            <tbody>
              {rehabSchedule.map((entry, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{entry.type}</td>
                  <td className="px-4 py-2">
                    <ul className="list-disc list-inside">
                      {entry.exercises.map((exercise, i) => (
                        <li key={i}>{exercise}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-4 py-2">{entry.days}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {/*  */}

    {/*  */}
    <div className=" py-10 ">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-600">جدول تمارين الكونغ فو</h1>
        <div className="overflow-x-auto">
          <table className="w-full table-auto rounded-lg">
            <thead className="bg-gray-800 text-white ">
              <tr>
                <th className="px-4 py-2 text-left">نوع التمرين</th>
                <th className="px-4 py-2 text-left">التمارين</th>
                <th className="px-4 py-2 text-left">الأهداف</th>
                <th className="px-4 py-2 text-left">الأيام</th>
              </tr>
            </thead>
            <tbody>
              {kungFuSchedule.map((entry, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{entry.type}</td>
                  <td className="px-4 py-2">
                    <ul className="list-disc list-inside">
                      {entry.exercises.map((exercise, i) => (
                        <li key={i}>{exercise}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-4 py-2">{entry.goals}</td>
                  <td className="px-4 py-2">{entry.days}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default Schedule;

