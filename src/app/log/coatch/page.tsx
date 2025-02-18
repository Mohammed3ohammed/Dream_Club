import React from "react";
const page = () => {
  const coachName = "Captain Ali Al-Qasabi"; 

  const subscribers = [
    {
      id: 1,
      name: "Mohamed Ahmed",
      coach: "Captain Ali Al-Qasabi",
      startDate: "2025-01-01",
      endDate: "2025-02-01",
      status: "Active",
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      coach: "Captain Assem Al-Qasabi",
      startDate: "2025-01-05",
      endDate: "2025-02-05",
      status: "Expired",
    },
    {
      id: 3,
      name: "Ali Youssef",
      coach: "Captain Ali Arqoub",
      startDate: "2025-01-10",
      endDate: "2025-02-10",
      status: "Active",
    },
  ];

  const filteredSubscribers = subscribers.filter(
    (subscriber) => subscriber.coach === coachName
  );

  return (
    <div className="p-8  min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">
      Dashboard {coachName}
      </h1>
      {filteredSubscribers.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full  rounded-lg shadow-lg">
            <thead className="bg-white text-black">
            <tr>
              <th className="px-4 py-2">Member ID</th>
              <th className="px-4 py-2">Member Name</th>
              <th className="px-4 py-2">Start Date</th>
              <th className="px-4 py-2">End Date</th>
              <th className="px-4 py-2">Subscription Status</th>
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
                        subscriber.status === "Active"
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
        <p className="text-center text-lg">No member data available.</p>
      )}
    </div>
  );
};

export default page;
