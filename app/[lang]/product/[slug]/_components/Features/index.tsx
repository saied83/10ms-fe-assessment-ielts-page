import Image from "next/image";
import React from "react";
import { Section } from "../../_libs/types";

const Features: React.FC<{ features: Section }> = ({ features }) => {
  return (
    <div className="flex flex-col gap-3" id="features">
      <h2 className=" text-xl font-semibold leading-[30px] text-black">
        {features.name}
      </h2>
      <div className="mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
        {features.values.map((feature) => {
          return (
            <div
              className="flex flex-row items-start gap-3 m-1 "
              key={feature.id}
            >
              <Image
                alt={feature.title as string}
                width={36}
                height={36}
                src={feature.icon as string}
              />

              <div className="flex flex-col flex-1 gap-2">
                <h2 className="text-[18px] font-[500px] leading-[26px] text-white ">
                  {feature.title}
                </h2>
                <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                  {feature.subtitle}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
