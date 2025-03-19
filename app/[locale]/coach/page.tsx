"use client";
import { useState, useEffect } from "react";
import { useRouter } from "../../../i18n/routing"; 
import axios from "axios";

interface Client {
  program_type: string;
  client_name: string;
  client_email: string;
  subscription_status: string;
  start_date: string;
  end_date: string;
}

const Dashboard = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter(); 


  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    } else {
      router.push("/log"); 
    }
  }, [router]);

  useEffect(() => {
    if (!token) return;

    axios
      .get("http://localhost:8000/api/coach/clients", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setClients(res.data.clients))
      .catch((err) => console.error("Error fetching clients:", err));
  }, [token]);

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
    router.push("/log"); 
  };

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Coach Dashboard</h1>

      <table className="table-auto w-full rounded-lg shadow-lg">
        <thead className="bg-white text-black">
          <tr>
            <th className="px-4 py-2">Program</th>
            <th className="px-4 py-2">Client Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Start Date</th>
            <th className="px-4 py-2">End Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index} className="border-b h-32 text-xl text-center">
              <td className="px-4 py-2">{client.program_type}</td>
              <td className="px-4 py-2">{client.client_name}</td>
              <td className="px-4 py-2">{client.client_email}</td>
              <td className="px-4 py-2">{client.start_date}</td>
              <td className="px-4 py-2">{client.end_date}</td>
              <td className="px-4 py-2 bg-green-600 h-10">{client.subscription_status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleLogout} className="mt-10 p-2 bg-red-500 text-white w-32  rounded-xl">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;