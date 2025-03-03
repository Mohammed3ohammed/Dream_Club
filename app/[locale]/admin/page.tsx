import Image from "next/image";
import React from "react";
import logo from "../../../Image/Mange.jpg"

const Page = () => {
  const subscribers = [
    {
      id: 1,
      name: "Mohamed Ahmed",
      coach: "Captain Abdulrahman Arqoub",
      startDate: "2025-01-01",
      endDate: "2025-02-01",
      status: "Active"
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      coach: "Captain Assem Al-Qasabi",
      startDate: "2025-01-05",
      endDate: "2025-02-05",
      status: "Expired"
    },
    {
      id: 3,
      name: "Ali Youssef",
      coach: "Captain Ali Al-Qasabi",
      startDate: "2025-01-10",
      endDate: "2025-02-10",
      status: "Active"
    },
  ];

  return (
    <div className="p-8  min-h-screen">
      <h1 className="text-4xl font-bold  text-center">Admin Dashboard</h1>
        <Image src={logo} alt="" className="w-32 h-32 mx-auto rounded-full transform translate-y-1/2" />
      <div className="overflow-x-auto mt-20">
        <table className="table-auto min-w-full border-collapse shadow-lg">
          <thead className="bg-white text-black">
            <tr className="text-sm sm:text-base">
            <th className="px-4 py-2 text-left">Subscription Status</th>
            <th className="px-4 py-2 text-left">End Date</th>
            <th className="px-4 py-2 text-left">Start Date</th>
            <th className="px-4 py-2 text-left">Assigned Coach</th>
            <th className="px-4 py-2 text-left">Subscriber Name</th>
            <th className="px-4 py-2 text-center">Subscriber ID</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((subscriber) => (
              <tr key={subscriber.id} className="border-b">
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 w-24 rounded-full text-sm ${
                      subscriber.status === "نشط" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                    }`}
                  >
                    {subscriber.status}
                  </span>
                </td>
                
                
                
                <td className="px-4 py-2">{subscriber.endDate}</td>
                <td className="px-4 py-2">{subscriber.startDate}</td>
                <td className="px-4 py-2">{subscriber.coach}</td>
                <td className="px-4 py-2">{subscriber.name}</td>
                <td className="px-4 py-2 text-center">{subscriber.id}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;


