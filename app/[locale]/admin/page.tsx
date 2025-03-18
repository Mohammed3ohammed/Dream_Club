"use client";

import Image from "next/image";
import { useState } from "react";
import { UserPlus } from "lucide-react";
import axios from "axios";
import logo from "../../../Image/Mange.jpg";
import { useRouter } from "../../../i18n/routing";

// Define types for coaches and clients
type Coach = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

type Client = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

const Page = () => {
  const [coaches, setCoaches] = useState<Coach[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [newCoach, setNewCoach] = useState<Partial<Coach>>({
    name: "",
    email: "",
    phone: "",
  });
  const [newClient, setNewClient] = useState<Partial<Client>>({
    name: "",
    email: "",
    phone: "",
  });

  // Fetch Coaches & Clients Data
  const addCoach = () => {
    axios
      .post("http://127.0.0.1:8000/api/admin/coaches/add", newCoach)
      .then((res) => {
        setCoaches([...coaches, res.data]);
        setIsModalOpen(false);
      })
      .catch((err) => console.error(err));
  };

  const addClient = () => {
    axios
      .post("http://127.0.0.1:8000/api/admin/clients/add", newClient)
      .then((res) => {
        setClients([...clients, res.data]);
        setIsClientModalOpen(false);
      })
      .catch((err) => console.error(err));
  };

   const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token"); // مسح التوكن أو أي بيانات مخزنة
    router.push("/log");  // توجيه المستخدم لصفحة تسجيل الدخول
  };

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-4xl font-bold text-center">Admin Dashboard</h1>
      <Image
        src={logo}
        alt="logo"
        className="w-32 h-32 mx-auto rounded-full transform translate-y-1/2"
      />

      {/* Coaches Section */}
      <div className="flex justify-between items-center mt-20 mb-4">
        <h2 className="text-xl font-semibold">Coaches List</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <UserPlus size={20} />
          Add Coach
        </button>
      </div>
      <table className="table-auto min-w-full border-collapse shadow-lg">
        <thead className="bg-white text-black">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Phone</th>
          </tr>
        </thead>
        <tbody>
          {coaches.map((coach) => (
            <tr key={coach.id} className="border-b">
              <td className="px-4 py-2">{coach.id}</td>
              <td className="px-4 py-2">{coach.name}</td>
              <td className="px-4 py-2">{coach.email}</td>
              <td className="px-4 py-2">{coach.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Clients Section */}
      <div className="flex justify-between items-center mt-20 mb-4">
        <h2 className="text-xl font-semibold">Clients List</h2>
        <button
          onClick={() => setIsClientModalOpen(true)}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          <UserPlus size={20} />
          Add Client
        </button>
      </div>
      <table className="table-auto min-w-full border-collapse shadow-lg">
        <thead className="bg-white text-black">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Phone</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id} className="border-b">
              <td className="px-4 py-2">{client.id}</td>
              <td className="px-4 py-2">{client.name}</td>
              <td className="px-4 py-2">{client.email}</td>
              <td className="px-4 py-2">{client.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Coach Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white text-black p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add Coach</h2>
            <input
              type="text"
              placeholder="Name"
              className="border w-full p-2 mb-2 rounded"
              onChange={(e) =>
                setNewCoach({ ...newCoach, name: e.target.value })
              }
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={addCoach}
            >
              Add
            </button>
          </div>
        </div>
      )}

      {/* Add Client Modal */}
      {isClientModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white text-black p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add Client</h2>
            <input
              type="text"
              placeholder="Name"
              className="border w-full p-2 mb-2 rounded"
              onChange={(e) =>
                setNewClient({ ...newClient, name: e.target.value })
              }
            />
            <button
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              onClick={addClient}
            >
              Add
            </button>
          </div>
        </div>
      )}
          <button onClick={handleLogout} className="px-4 py-2 mt-14 bg-red-500 text-white rounded-md">
      Logout
    </button>
    </div>
  );
};

export default Page;