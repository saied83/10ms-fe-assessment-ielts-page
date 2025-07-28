import {
  ArrowDownIcon,
  BanglaIcon,
  MenuIcon,
  PhoneIcon,
  SearchIcon,
} from "@/app/_assets/icons";
import Image from "next/image";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 left-0 right-0 bg-white md:h-[65px] w-full">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 md:gap-6 px-4 py-3 md:px-7 w-full border-b border-slate-300">
        {/* Logo and Menu */}
        <div className="flex justify-start items-center gap-2 md:gap-3">
          <button type="button">
            <MenuIcon className="w-5 h-5 text-black xl:hidden" />
          </button>
          <Image
            src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
            width={100}
            height={27}
            alt="10ms"
            style={{ width: "100px", height: "27px" }}
          />
        </div>

        {/* Search Bar */}
        <div className="relative hidden w-full flex-1 xl:max-w-[360px] flex-col items-center bg-white z-50 md:flex">
          <div className="shadow-0 rounded-b-[23px] flex w-full items-center gap-2 rounded-t-[23px] border-0 px-[12px] py-2 md:border md:border-slate-300">
            <SearchIcon />
            <input
              type="search"
              placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
              className="w-full flex-1 placeholder:text-sm placeholder:font-normal placeholder:leading-5 placeholder:text-[#7C818A] focus:outline-none"
              name="Search"
              defaultValue=""
            />
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden mr-4 xl:block">
          <ul className="flex items-center gap-2 lg:gap-4">
            {[
              "Class 6-12",
              "Skills",
              "Admission",
              "Online Batch",
              "English Centre",
              "More",
            ].map((label, index) => (
              <li key={index} className="relative">
                <button
                  type="button"
                  className="flex cursor-pointer items-center justify-center gap-0.5 text-sm font-medium text-[#4B5563] hover:text-green"
                >
                  <p className="relative mb-0">
                    {label}
                    {(label === "English Centre" || label === "More") && (
                      <span className="absolute top-0 -right-1 h-1.5 w-1.5 bg-[#E63C3C] rounded-full" />
                    )}
                  </p>
                  {label !== "Admission" && <ArrowDownIcon />}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <button type="button">
            <SearchIcon className="w-7 h-7 text-black md:hidden" />
          </button>
          <button
            type="button"
            className="hidden cursor-pointer items-center gap-1 rounded border border-slate-300 px-2 py-[2px] hover:bg-slate-50 md:flex"
          >
            <BanglaIcon className="md:block hidden" />
            <span>বাং</span>
          </button>
          <button
            type="button"
            className="w-max flex justify-center items-center gap-1"
          >
            <PhoneIcon className="w-5 h-5 text-black md:text-green-600 md:fill-green-600" />
            <span className="text-green-600 hidden md:block leading-[18px] w-max text-[12px] font-semibold md:leading-[24px] md:text-[16px] md:font-medium">
              169100
            </span>
          </button>
          <button
            type="button"
            className="py-1 px-3 leading-[18px] w-max text-[12px] font-semibold md:leading-[24px] md:text-[16px] md:font-medium text-white rounded-sm bg-green-600"
          >
            লগ-ইন
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
