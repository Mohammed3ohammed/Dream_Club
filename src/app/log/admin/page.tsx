import React from "react";

const page = () => {
  const subscribers = [
    { 
      id: 1, 
      name: "محمد أحمد", 
      coach: "كابتن عبد الرحمن عرقوب", 
      startDate: "2025-01-01", 
      endDate: "2025-02-01", 
      status: "نشط" 
    },
    { 
      id: 2, 
      name: "أحمد حسن", 
      coach: "كابتن عاصم القصبي", 
      startDate: "2025-01-05", 
      endDate: "2025-02-05", 
      status: "منتهي" 
    },
    { 
      id: 3, 
      name: "علي يوسف", 
      coach: "كابتن على القصبي", 
      startDate: "2025-01-10", 
      endDate: "2025-02-10", 
      status: "نشط" 
    },
  ];

  return (
    <div className="p-8  min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">لوحة تحكم المدير</h1>

      <div className="overflow-x-auto">
        <table className="table-auto min-w-full border-collapse shadow-lg">
          <thead className="bg-white text-black">
            <tr className="text-sm sm:text-base">
            <th className="px-4 py-2 text-left">حالة الاشتراك</th>
              <th className="px-4 py-2 text-left">تاريخ الانتهاء</th>
              <th className="px-4 py-2 text-left">تاريخ البدء</th>
              <th className="px-4 py-2 text-left">الكابتن المسؤول</th>
              <th className="px-4 py-2 text-left">اسم المشترك</th>
              <th className="px-4 py-2 text-center">رقم المشترك</th>
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

export default page;


