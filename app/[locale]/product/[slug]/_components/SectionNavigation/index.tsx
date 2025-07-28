"use client";

import React, { useRef, useState } from "react";

const NAV_SECTIONS = [
  { id: "instructor", label: "Course Instructor" },
  { id: "features", label: "How the Course is Laid Out" },
  { id: "pointers", label: "What You Will Learn by Doing the Course" },
  { id: "about", label: "Course Details" },
  { id: "feature_explanations", label: "Course Exclusive Features" },
  { id: "testimonials", label: "Students' Opinions" },
];

const SectionNavigation: React.FC = () => {
  const navRef = useRef<HTMLUListElement>(null);
  const [activeId, setActiveId] = useState<string>("");

  const handleScrollTo = (targetId: string) => {
    setActiveId(targetId);
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -140;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-[65px] z-20 hidden bg-white md:block">
      <div className="relative w-full py-4">
        <ul
          ref={navRef}
          className="hide-scroll-menu relative flex gap-2 overflow-x-auto scroll-smooth border-b border-slate-300 px-4"
        >
          {NAV_SECTIONS.map(({ id, label }) => (
            <li key={id} className="min-w-max whitespace-nowrap">
              <button
                onClick={() => handleScrollTo(id)}
                className={`p-2 text-base transition-colors duration-200 cursor-pointer ${
                  activeId === id
                    ? "border-b-4 border-green-600 font-medium text-green-600"
                    : "border-b-4 border-white text-gray-600"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SectionNavigation;
