import { useTranslations } from "next-intl";
import React from "react";

interface ScheduleEntry {
  day: string;
  men: string;
  women: string;
}

const Schedule = () => {
    const t = useTranslations("Workout");
    const schedule = t.raw("gymSchedule.schedule");



    const schedul = [
      {
        type: "Push",
        exercises: [
          "Bench Press (Chest)",
          "Overhead Press (Shoulders)",
          "Tricep Dips (Triceps)",
        ],
        days: "Saturday, Tuesday, Thursday",
      },
      {
        type: "Pull",
        exercises: [
          "Pull-ups (Chin-up)",
          "Barbell Row (Barbell Rowing)",
          "Bicep Curls (Biceps)",
        ],
        days: "Sunday, Wednesday",
      },
      {
        type: "Legs",
        exercises: [
          "Squats (Squat)",
          "Leg Press (Leg Press)",
          "Calf Raises (Calves)",
        ],
        days: "Monday, Thursday",
      },
    ];

  const rehabSchedule = [
    {
      type: "Shoulder Injury Rehabilitation",
      exercises: [
        "Shoulder Rotations",
        "Band Pull Aparts",
        "Overhead Stretch",
      ],
      days: "Sunday, Tuesday, Thursday",
    },
    {
      type: "Knee Injury Rehabilitation",
      exercises: [
        "Step-ups",
        "Hamstring Curls",
        "Leg Extensions",
      ],
      days: "Monday, Wednesday",
    },
    {
      type: "Back Injury Rehabilitation",
      exercises: [
        "Cat-Cow Stretch",
        "Superman Exercise",
        "Bridges",
      ],
      days: "Saturday, Tuesday, Thursday",
    },
  ];

  const fitnessPlan = [
    {
      type: "Cardio Exercises",
      exercises: ["Fast Walking", "Cycling", "Light Jogging"],
      goals: "Improve heart health and increase overall fitness",
      days: "Sunday, Tuesday, Thursday",
    },
    {
      type: "Strength Training",
      exercises: ["Free Weights", "Squats", "Ab Workouts"],
      goals: "Build muscle and increase strength",
      days: "Monday, Wednesday",
    },
    {
      type: "Flexibility Exercises",
      exercises: ["Stretching", "Yoga", "Balance Exercises"],
      goals: "Improve flexibility and reduce stress",
      days: "Saturday",
    },
  ];



  const kungFuSchedule = [
{
  type: "Fitness Training",
  exercises: [
    "Jump Rope",
    "Dynamic Stretching",
    "Sprint Intervals",
  ],
  goals: "Improve physical fitness and flexibility",
  days: "Saturday, Monday, Wednesday",
},
{
  type: "Combat Techniques",
  exercises: [
    "Punching Drills",
    "High Kicks",
    "Blocking Techniques",
  ],
  goals: "Develop fighting skills and defensive techniques",
  days: "Sunday, Tuesday",
},
{
  type: "Meditation & Balance",
  exercises: [
    "Meditation",
    "Deep Breathing",
    "Balance Training",
  ],
  goals: "Increase focus and improve balance",
  days: "Thursday",
},
  ];


  return (
    <>
      <div className=" py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-600">{t("gymSchedule.title")}</h1>
          <div className="overflow-x-auto">
            <table className="w-full table-auto shadow-md rounded-lg">
              <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-2 text-left">{t("gymSchedule.thead")}</th>
                <th className="px-4 py-2 text-left">{t("gymSchedule.thead1")}</th>
                <th className="px-4 py-2 text-left">{t("gymSchedule.thead2")}</th>
              </tr>
              </thead>
              <tbody>
                {schedule.map((entry: ScheduleEntry, index: number) => (
                  <tr key={index} className="border-b ">
                                        <td className="px-4 py-2">{entry.women}</td>
                                        <td className="px-4 py-2">{entry.men}</td>
                                        <td className="px-4 py-2">{entry.day}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className=" py-10 ">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-600">{t("gymSchedule.table1")}</h1>
          <div className="overflow-x-auto">
          <table className="w-full table-auto shadow-md  rounded-lg">
              <thead className="bg-gray-800 text-white">
              <tr>
                  <th className="px-4 py-2 text-left">Exercise Type</th>
                  <th className="px-4 py-2 text-left">Exercises</th>
                  <th className="px-4 py-2 text-left">Days</th>
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
      <div className="py-10 ">
      <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-600">{t("gymSchedule.table2")} </h1>
        <div className="overflow-x-auto">
          <table className="w-full table-auto  shadow-md rounded-lg">
            <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Workout Type</th>
              <th className="px-4 py-2 text-left">Exercises</th>
              <th className="px-4 py-2 text-left">Goals</th>
              <th className="px-4 py-2 text-left">Days</th>
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
      <div className="py-10 ">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-600">{t("gymSchedule.table3")}</h1>
        <div className="overflow-x-auto">
          <table className="w-full table-auto  rounded-lg">
            <thead className="bg-gray-800 text-white">
              <tr>
              <th className="px-4 py-2 text-left">Rehabilitation Type</th>
              <th className="px-4 py-2 text-left">Exercises</th>
              <th className="px-4 py-2 text-left">Days</th>
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
    <div className=" py-10 mb-8 ">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-600">{t("gymSchedule.table4")}</h1>
        <div className="overflow-x-auto">
          <table className="w-full table-auto rounded-lg">
            <thead className="bg-gray-800 text-white ">
              <tr>
              <th className="px-4 py-2 text-left">Training Type</th>
                <th className="px-4 py-2 text-left">Exercises</th>
                <th className="px-4 py-2 text-left">Goals</th>
                <th className="px-4 py-2 text-left">Days</th>
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