import React from "react";

const CTA: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`${className} w-full p-4 md:h-auto `}>
      <div className="flex items-center justify-start ">
        <div className="inline-block text-2xl font-semibold">৳1000</div>

        <del className="ml-2 text-base font-normal md:text-xl">৳1250</del>
      </div>

      <button className=" bg-green-600 mt-2 md:mt-4 rounded-md shadow-lg border-b-4 border-green-700 py-2 font-semibold text-white w-full whitespace-nowrap   text-center md:w-full centered-buttons text-[16px] ">
        Enroll
      </button>
    </div>
  );
};

export default CTA;
