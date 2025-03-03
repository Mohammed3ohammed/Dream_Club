"use client";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { Globe } from "lucide-react";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();


  const toggleLocale = () => {
    const newLocale = locale === "ar" ? "en" : "ar";
    router.push(`/${newLocale}`);
  };

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-2  0 transition"
    >
      <Globe className="w-7 h-7 text-orange-500 transform transition duration-300 hover:scale-150 animate-bounceLight " />
      <span className="w-7 h-7 text-orange-500">{locale === "ar" ? "En" : "AR"}</span>
    </button>
  );
}

