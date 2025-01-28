import React from "react";

const page = () => {

  const subscriberData = {
    id: 1,
    name: "محمد أحمد",
    coach: "كابتن عبد الرحمن عرقوب",
    startDate: "2025-01-01",
    endDate: "2025-02-01",
    status: "نشط",
    sessions: [
      { date: "2025-01-05", time: "10:00 صباحًا", status: "حضر" },
      { date: "2025-01-10", time: "12:00 ظهرًا", status: "لم يحضر" },
      { date: "2025-01-15", time: "11:00 صباحًا", status: "مؤكد" },
    ],
  };

  return (
    <div className="p-8  text-black min-h-screen" dir="rtl">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">لوحة تحكم المشترك</h1>

      {/* معلومات المشترك */}
      <div className="bg-black text-white p-6 rounded-lg shadow-lg mb-8" >
        <h2 className="text-2xl font-bold mb-4">معلومات المشترك</h2>
        <p className="mb-2">
          <strong>اسم المشترك:</strong> {subscriberData.name}
        </p>
        <p className="mb-2">
          <strong>الكابتن:</strong> {subscriberData.coach}
        </p>
        <p className="mb-2">
          <strong>تاريخ البدء:</strong> {subscriberData.startDate}
        </p>
        <p className="mb-2">
          <strong>تاريخ الانتهاء:</strong> {subscriberData.endDate}
        </p>
        <p>
          <strong>حالة الاشتراك:</strong>{" "}
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              subscriberData.status === "نشط"
                ? "bg-green-200 text-green-800"
                : "bg-red-200 text-red-800"
            }`}
          >
            {subscriberData.status}
          </span>
        </p>
      </div>

      {/* الجلسات المحجوزة */}
      <div className="bg-black text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">الجلسات المحجوزة</h2>
        {subscriberData.sessions.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full bg-black rounded-lg shadow-lg">
              <thead className="bg-white text-black">
                <tr>
                  <th className="">التاريخ</th>
                  <th className="px-4 py-2">الوقت</th>
                  <th className="px-4 py-2">الحالة</th>
                </tr>
              </thead>
              <tbody>
                {subscriberData.sessions.map((session, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-2 text-center">{session.date}</td>
                    <td className="px-4 py-2 text-center">{session.time}</td>
                    <td className="px-4 py-2 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          session.status === "حضر"
                            ? "bg-green-200 text-green-800"
                            : session.status === "لم يحضر"
                            ? "bg-red-200 text-red-800"
                            : "bg-yellow-200 text-yellow-800"
                        }`}
                      >
                        {session.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-lg">لا توجد جلسات محجوزة.</p>
        )}
      </div>
    </div>
  );
};

export default page;
