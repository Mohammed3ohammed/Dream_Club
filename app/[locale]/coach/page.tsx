"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "../../../i18n/routing";

interface Subscriber {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  status: "Active" | "Inactive";
}

const Page = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [newPlayer, setNewPlayer] = useState({ playerName: "", trainingType: "" });
  const router = useRouter();
  
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!response.ok) {
        throw new Error("Logout failed");
      }
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("extra_data");
      router.push("/log");
    }
  };


  useEffect(() => {
    const token = localStorage.getItem("token"); 

    if (!token) {
      console.error("User not authenticated. Redirecting to login...");
      return;
    }

    axios
      .get("http://localhost:8000/api/coach/subscribers", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setSubscribers(response.data))
      .catch((error) => console.error("Error fetching subscribers", error));
  }, []);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNewPlayer({ ...newPlayer, [e.target.name]: e.target.value });
  };

  const addPlayer = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("User not authenticated. Redirecting to login...");
        return;
      }

      const requestData = {
        type: newPlayer.trainingType,
        player: newPlayer.playerName,
        spa: true, 
        kong_fo: false, 
        price: 150.5, 
        sessions: 10, 
        status: "active",
      };

      await axios.post("http://localhost:8000/api/coach/programs", requestData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Player added successfully!");
    } catch (error) {
      console.error("Error adding player", error);
    }
  };

  

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Coach Dashboard</h1>
      <div className="mb-8">
        <input
          type="text"
          name="playerName"
          placeholder="Player Name"
          value={newPlayer.playerName}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="trainingType"
          placeholder="Training Type"
          value={newPlayer.trainingType}
          onChange={handleChange}
          className="p-2 border rounded ml-2"
        />
        <button onClick={addPlayer} className="p-2 bg-blue-500 text-white ml-2 rounded">
          Add Player
        </button>
      </div>

      {/* Subscribers Table */}
      <table className="table-auto w-full rounded-lg shadow-lg">
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
          {subscribers.map((subscriber) => (
            <tr key={subscriber.id} className="border-b">
              <td className="px-4 py-2 text-center">{subscriber.id}</td>
              <td className="px-4 py-2 text-center">{subscriber.name}</td>
              <td className="px-4 py-2 text-center">{subscriber.startDate}</td>
              <td className="px-4 py-2 text-center">{subscriber.endDate}</td>
              <td className="px-4 py-2 text-center">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    subscriber.status === "Active" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                  }`}
                >
                  {subscriber.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleLogout}
        className="px-4 py-2 mt-14 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Page;
