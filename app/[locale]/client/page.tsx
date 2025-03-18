"use client";
import { useState, useEffect } from "react";
import { useRouter } from "../../../i18n/routing";

interface PlayerData {
  id: number;
  name: string;
  email: string;
  phone: string;
  weight: number;
  height: number;
  age: number;
  gender: string;
  role: string;
}

interface Program {
  subscription_id: number;
  program_id: number;
  program_type: string;
  program_price: string;
  program_sessions: number;
  coach_name: string;
  status: string;
  start_date: string;
  end_date: string;
}

const Page = () => {
  const [player, setPlayer] = useState<PlayerData | null>(null);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedExtraData = localStorage.getItem("extra_data");

    if (storedUser && storedExtraData) {
      try {
        const user = JSON.parse(storedUser);
        const extraData = JSON.parse(storedExtraData);
        const combinedData: PlayerData = {
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
          weight: extraData.weight,
          height: extraData.height,
          age: extraData.age,
          gender: extraData.gender,
        };
        setPlayer(combinedData);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/client/myPrograms", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch programs");
        }
        const data = await response.json();
        setPrograms(data.programs || []);
      } catch (error) {
        console.error("Error fetching programs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPrograms();
  }, []);

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

  if (loading) {
    return <p className="text-center mt-10 text-lg text-white">Loading...</p>;
  }

  return (
    <div className="p-8 min-h-screen bg-zinc-900 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center text-orange-500">
        Player Profile
      </h1>
      <div className="bg-zinc-800 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Player Information</h2>
        <p><strong>Name:</strong> {player?.name}</p>
        <p><strong>Email:</strong> {player?.email}</p>
        <p><strong>Phone:</strong> {player?.phone}</p>
        <p><strong>Weight:</strong> {player?.weight} kg</p>
        <p><strong>Height:</strong> {player?.height} cm</p>
        <p><strong>Age:</strong> {player?.age}</p>
        <p><strong>Gender:</strong> {player?.gender}</p>
      </div>

      {programs.length > 0 && (
        <div className="bg-zinc-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Subscribed Programs</h2>
          {programs.map((program) => (
            <div key={program.subscription_id} className="mb-4 border-b pb-4">
              <p><strong>Program Type:</strong> {program.program_type}</p>
              <p><strong>Coach:</strong> {program.coach_name}</p>
              <p><strong>Sessions:</strong> {program.program_sessions}</p>
              <p><strong>Price:</strong> {program.program_price} EGP</p>
              <p><strong>Status:</strong> {program.status}</p>
              <p><strong>Start Date:</strong> {program.start_date}</p>
              <p><strong>End Date:</strong> {program.end_date}</p>
            </div>
          ))}
        </div>
      )}

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