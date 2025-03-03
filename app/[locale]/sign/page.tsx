"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useTranslations } from 'next-intl';
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  weight: string;
  height: string;
  age: string;
  gender: string;
}
const SignUp = () => {
  const t = useTranslations("Signup");
    const [formData, setFormData] = useState<FormData>({
      name: "",
      email: "",
      phone: "",
      password: "",
      weight: "",
      height: "",
      age: "",
      gender: "",
    });
  
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:8000/api/register", formData, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("Success:", response.data);
    alert("Registration successful!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      weight: "",
      height: "",
      age: "",
      gender: "",
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error:", error.response?.data || error.message);
      
      if (error.response?.data?.errors) {
        console.log("Validation Errors:", error.response.data.errors);
        alert(`Input errors: ${JSON.stringify(error.response.data.errors)}`);
      } else {
        alert(error.response?.data?.message || "An error occurred during registration!");
      }
    } else {
      console.error("Unknown error:", error);
      alert("An unknown error occurred!");
    }
  }

};

return (
    <div className="flex justify-center items-center h-auto mt-10 mb-10">
       <div className="flex flex-col justify-evenly items-center  w-11/12 h-auto bg-zinc-900 rounded-3xl sm:w-9/12 md:w-6/12 lg:w-4/12 sm-h-4/5">
       <h1 className='text-2xl mt-3 italic text-orange-500 p-4'>{t("title")}</h1>
       <p className='italic text-orange-500'>{t("paragraph")}</p>
       <form className="flex flex-col text-xl mb-7" onSubmit={handleSubmit}> 
        <label className="text-base mb-2 mt-8">{t("name")}</label>
        <input
        type="text"
         required 
         name="name"
         value={formData.name}
         onChange={handleChange}
        className="w-80 h-8 p-2 bg-zinc-700 rounded-md focus:outline-orange-500"
        />
        <label
        
        className="text-base mb-2 mt-8">{t("email")}</label>
        <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
        className="w-80 h-8 p-2 bg-zinc-700 rounded-md  focus:outline-orange-500"  
          />
        <label className="text-base mb-2 mt-8">{t("phone")}</label>
        <input 
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          className="w-80 h-8 p-2 bg-zinc-700 rounded-md focus:outline-orange-500" 
          pattern="^[0-9]{11}$" 
          title="Phone number must be 11 digits" 
        />

        <label className="text-base mb-2 mt-4">{t("password")}</label>
        <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required 
         className="w-80 mb-4 h-8 p-2 bg-zinc-700 rounded-md focus:outline-orange-500"  pattern="^\d{8,12}$"
        />
        <label className="text-base mb-2 mt-4">{t("weight")}</label>
        <input 
        name="weight"
        value={formData.weight}
        onChange={handleChange}
        required
        className="w-80 mb-4 h-8 p-2 bg-zinc-700 rounded-md focus:outline-orange-500"  type="text" pattern="^[0-9]{2,3}$"    />
        <label className="text-base mb-2 mt-4">{t("height")}</label>
        <input
          name="height"
          value={formData.height}
          onChange={handleChange}
          required
        className="w-80 mb-4 h-8 p-2 bg-zinc-700 rounded-md focus:outline-orange-500"  type="text" pattern="^[0-9]{2,3}$"   />
        <label className="text-base mb-2 mt-4">{t("age")}</label>
        <input
        name="age"
        value={formData.age}
        onChange={handleChange}
        required
        className="w-80 mb-4 h-8 p-2 bg-zinc-700 rounded-md focus:outline-orange-500"  type="text" pattern="^[0-9]{2,3}$"   />

<select 
  className="w-80 mb-4 mt-4 text-base h-auto bg-zinc-700 rounded-md focus:outline-orange-500" 
  name="gender" 
  value={formData.gender} 
  onChange={handleChange} 
  required
>
  <option value="">{t("gender")}</option>  
  <option value="male">{t("male")}</option>
  <option value="female">{t("female")}</option>
</select>
        <button type="submit" className="w-full mt-3  text-lg    border-2 border-solid border-orange-500 p-1 rounded-full text-white font-semibold h-auto transition hover:bg-orange-500"> 
          {t("button")}
          </button>
    </form>
       </div>
    </div>
);
};

export default SignUp;