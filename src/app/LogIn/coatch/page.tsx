import React from "react";



const page = () => {
  // بيانات تجريبية
  const coachName = "كابتن علي عرقوب"; // اسم الكابتن الحالي

  const subscribers = [
    {
      id: 1,
      name: "محمد أحمد",
      coach: "كابتن علي عرقوب",
      startDate: "2025-01-01",
      endDate: "2025-02-01",
      status: "نشط",
    },
    {
      id: 2,
      name: "أحمد حسن",
      coach: "كابتن عاصم القصبي",
      startDate: "2025-01-05",
      endDate: "2025-02-05",
      status: "منتهي",
    },
    {
      id: 3,
      name: "علي يوسف",
      coach: "كابتن علي عرقوب",
      startDate: "2025-01-10",
      endDate: "2025-02-10",
      status: "نشط",
    },
  ];


  const filteredSubscribers = subscribers.filter(
    (subscriber) => subscriber.coach === coachName
  );

  return (
    <div className="p-8  min-h-screen" dir="rtl">
      <h1 className="text-4xl font-bold mb-8 text-center">
        لوحة تحكم {coachName}
      </h1>
      {filteredSubscribers.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full  rounded-lg shadow-lg">
            <thead className="bg-white text-black">
              <tr>
                <th className="px-4 py-2">رقم المشترك</th>
                <th className="px-4 py-2">اسم المشترك</th>
                <th className="px-4 py-2">تاريخ البدء</th>
                <th className="px-4 py-2">تاريخ الانتهاء</th>
                <th className="px-4 py-2">حالة الاشتراك</th>
              </tr>
            </thead>
            <tbody>
              {filteredSubscribers.map((subscriber) => (
                <tr key={subscriber.id} className="border-b">
                  <td className="px-4 py-2 text-center">{subscriber.id}</td>
                  <td className="px-4 py-2 text-center">{subscriber.name}</td>
                  <td className="px-4 py-2 text-center">{subscriber.startDate}</td>
                  <td className="px-4 py-2 text-center">{subscriber.endDate}</td>
                  <td className="px-4 py-2 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        subscriber.status === "نشط"
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {subscriber.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-lg">لا توجد بيانات للمشتركين.</p>
      )}
    </div>
  );
};

export default page;
