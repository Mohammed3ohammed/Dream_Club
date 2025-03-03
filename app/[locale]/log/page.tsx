"use client";
import { useState } from "react";
import axios from "axios"; 
import { useTranslations } from "next-intl";
import { Link, useRouter } from "../../../i18n/routing";

const LogIn = () => {
  const t = useTranslations("Login");
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/api/login", formData);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        router.push("/client"); 
      } else {
        setError("Login failed!");
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Login failed!");
      } else {
        setError("Network error, please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-evenly items-center w-11/12 h-3/5 bg-zinc-900 rounded-3xl sm:w-9/12 md:w-6/12 lg:w-4/12 sm-h-4/5">
        <h1 className="text-xl mt-2 italic text-orange-500">{t("title")}</h1>
        <form onSubmit={handleSubmit} className="flex flex-col text-lg mb-8 sm:text-xl">
          <label className="text-base mb-2 mt-5">{t("email")}</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-80 h-8 bg-zinc-700 rounded-md focus:outline-orange-500"
          />
          <label className="text-base mb-2 mt-4">{t("password")}</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-80 mb-4 h-8 bg-zinc-700 rounded-md focus:outline-orange-500"
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-3 text-lg border-2 border-solid border-orange-500 p-1 rounded-full text-white font-semibold h-auto transition hover:bg-orange-500"
          >
            {loading ? "Logging in..." : t("button")}
          </button>
        </form>
        <Link href="/sign" className=" text-lg text-orange-500 sm:text-lg">
          {t("create")}
        </Link>
      </div>
    </div>
  );
};

export default LogIn;