import Image from "next/image";
import React from "react";
import { Checklist } from "../../_libs/types";

const CheckList: React.FC<{ className: string; checkLists: Checklist[] }> = ({
  className,
  checkLists,
}) => {
  return (
    <section className={`${className} w-full p-4`}>
      <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>

      <div className="grid grid-cols-1">
        {checkLists.map((listItem) => (
          <div className="flex items-center mb-3 leading-5" key={listItem.id}>
            <Image
              alt="icon"
              width={20}
              height={20}
              src={listItem.icon}
              style={{ color: listItem.color }}
              className="inline-block h-[20px] w-[20px]"
            />

            <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
              {listItem.text}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CheckList;
