"use client";

import React, { useState, useEffect } from "react";
import { Section } from "../../_libs/types";
import { ArrowDownIcon } from "@/app/_assets/icons";

const About: React.FC<{ aboutData: Section }> = ({ aboutData }) => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  // Open the first item by default
  useEffect(() => {
    if (aboutData.values.length > 0) {
      setOpenIds([aboutData.values[0].id as string]);
    }
  }, [aboutData.values]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div id="about">
      <div className="mb-6 mt-4 max-w-[900px] md:mb-10 md:mt-[42px]">
        <div className="mt-10 md:mt-0">
          <h2 className="text-xl font-semibold md:mb-4 md:text-2xl">
            Course details
          </h2>

          <div className="rounded-lg py-2 md:border border-slate-300 md:px-5">
            {aboutData.values.map((data) => {
              const isOpen = openIds.includes(data.id as string);
              return (
                <div
                  key={data.id}
                  className="border-b border-dashed border-slate-200 last:border-none"
                >
                  <button
                    onClick={() => toggleItem(data.id as string)}
                    className="flex w-full items-center justify-between gap-2 py-4 text-left cursor-pointer"
                  >
                    <div className="max-w-[90%] font-medium text-sm">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.title as string,
                        }}
                      />
                    </div>
                    <ArrowDownIcon
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-0 pb-4 text-gray-500">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.description as string,
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
