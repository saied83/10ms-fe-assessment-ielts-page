"use client";

import { BanglaIcon } from "@/app/_assets/icons";
import { usePathname, useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = pathname?.split("/")[1];
  const nextLang = currentLang === "bn" ? "en" : "bn";

  const toggleLang = () => {
    if (!pathname) return;
    const segments = pathname.split("/");
    segments[1] = nextLang; // Switch language
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
