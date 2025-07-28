import React from "react";
import { Section } from "../../_libs/types";
import { CheckIcon } from "@/app/assets/icons";

const WhatWillLearn: React.FC<{ whatLearnData: Section }> = ({
  whatLearnData,
}) => {
  return (
    <div id="pointers">
      <div className="mb-6 md:mb-10 relative bg-[#E5E7EB] py-2 md:bg-white md:py-0">
        <div className="pt-6 pb-6 bg-white md:pb-0 md:pt-0">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            {whatLearnData.name}
          </h2>
          <div className="rounded-md md:border  md:border-slate-300">
            <ul className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1fr] md:gap-4 pt-2 md:p-6">
              {whatLearnData.values.map((item) => (
                <li className="flex items-start gap-2 mb-2" key={item.id}>
                  <CheckIcon className="mr-1 mt-[2px]" />
                  <div className="flex-1" style={{ color: item.color }}>
                    {item.text}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWillLearn;
