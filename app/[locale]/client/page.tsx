import React from "react";

const Page = () => {

  const subscriberData = {
    id: 1,
    name: "Ali",
    coach: "Captain Abdelrahman Arqoub",
    startDate: "2025-01-01",
    endDate: "2025-02-01",
    status: "Active",
    sessions: [
      { date: "2025-01-05", time: "10:00 AM", status: "Attended" },
      { date: "2025-01-10", time: "12:00 PM", status: "Absent" },
      { date: "2025-01-15", time: "11:00 AM", status: "Confirmed" },
    ],
  };

  return (
    <div className="p-8  text-black min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Subscriber Dashboard</h1>
      <div className="bg-black text-white p-6 rounded-lg shadow-lg mb-8" >
        <h2 className="text-2xl font-bold mb-4">Subscriber Information</h2>
        <p className="mb-2">
        <strong>Subscriber Name:</strong> {subscriberData.name}
        </p>
        <p className="mb-2">
        <strong>Coach:</strong> {subscriberData.coach}
        </p>
        <p className="mb-2">
          <strong>Start Date:</strong> {subscriberData.startDate}
        </p>
        <p className="mb-2">
        <strong>End Date:</strong>{subscriberData.endDate}
        </p>
        <p>
        <strong>Subscription Status:</strong> {" "}
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              subscriberData.status === "Active"
                ? "bg-green-200 text-green-800"
                : "bg-red-200 text-red-800"
            }`}
          >
            {subscriberData.status}
          </span>
        </p>
      </div>

      <div className="bg-black text-white p-6 rounded-lg shadow-lg">
       <h2 className="text-2xl font-bold mb-4">Booked Sessions</h2>
        {subscriberData.sessions.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full bg-black rounded-lg shadow-lg">
              <thead className="bg-white text-black">
                <tr>
                <th className="">Date</th>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Status</th>
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
                          session.status === "Attended"
                            ? "bg-green-200 text-green-800"
                            : session.status === "Absent"
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
          <p className="text-center text-lg">No booked sessions.</p>
        )};
      </div>
    </div>
  )
};

export default Page;
