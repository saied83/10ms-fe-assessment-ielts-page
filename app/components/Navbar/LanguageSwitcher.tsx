"use client";

import { BanglaIcon } from "@/app/assets/icons";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<string>("en");

  useEffect(() => {
    if (!pathname) return;
    const langFromPath = pathname.split("/")[1];
    setCurrentLang(langFromPath);
  }, [pathname]);

  const nextLang = currentLang === "bn" ? "en" : "bn";

  const toggleLang = () => {
    if (!pathname) return;

    // Set locale cookie
    document.cookie = `NEXT_LOCALE=${nextLang}; path=/; max-age=31536000`;

    const segments = pathname.split("/");
    segments[1] = nextLang;
    const newPath = segments.join("/");

    router.push(newPath);
  };

  return (
    <button
      type="button"
      onClick={toggleLang}
      className="hidden md:flex items-center gap-1 rounded border border-slate-300 px-2 py-[2px] hover:bg-slate-50 cursor-pointer"
    >
      <BanglaIcon className="hidden md:block" />
      <span className="font-medium text-sm uppercase">
        {nextLang === "bn" ? "বাং" : "EN"}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
