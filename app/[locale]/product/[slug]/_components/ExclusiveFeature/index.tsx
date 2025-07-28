import { CheckIcon } from "@/app/assets/icons";
import Image from "next/image";
import React from "react";
import { Section } from "../../_libs/types";

const ExclusiveFeature: React.FC<{ exclusiveData: Section }> = ({
  exclusiveData,
}) => {
  return (
    <div id="feature_explanations">
      <div>
        <div className="flex flex-col gap-3 mb-10">
          <h2 className=" text-xl font-semibold leading-[30px] text-black">
            {exclusiveData.name}
          </h2>
          <div className="grid grid-cols-1 px-5 border border-slate-300 divide-y divide-slate-300 rounded-md ">
            {exclusiveData.values.map((eachSection) => (
              <div
                className="flex flex-col items-start justify-between gap-3 py-5 md:flex-row"
                key={eachSection.id}
              >
                <div className="flex flex-col gap-2">
                  <h2 className="text-[14px] font-[500px] leading-[30px] text-[#111827] md:text-[16px]">
                    {eachSection.title}
                  </h2>

                  {eachSection?.checklist?.map((checkItem, index) => (
                    <div
                      className="flex flex-row items-center gap-5"
                      key={index}
                    >
                      <CheckIcon />
                      <p className="text-[14px] font-[400px] leading-[24px] text-[#4B5563] md:text-[16px]">
                        {checkItem}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mb-4 mx-auto max-w-[350px] ">
                  <Image
                    alt="Reading ও Listening Mock Tests"
                    width={250}
                    height={200}
                    src={eachSection.file_url as string}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveFeature;
