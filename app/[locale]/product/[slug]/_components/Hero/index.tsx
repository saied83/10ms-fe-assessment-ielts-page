import React from "react";
import Trailer from "../Trailer";
import Title from "../Title";
import Description from "../Description";
import CTA from "../CTA";
import CheckList from "../CheckList";
import { PhoneIcon } from "@/app/assets/icons";
import { ProductData } from "../../_libs/types";

const Hero: React.FC<{ data: ProductData }> = ({ data }) => {
  return (
    <section
      className="w-full  flex justify-center h-max"
      style={{
        backgroundImage: `url("https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg")`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
      }}
    >
      <section className="xl:max-w-[1200px] w-full relative flex flex-col gap-4 p-4 md:flex-row  md:py-10 md:pl-6 md:pr-0 md:gap-12 lg:py-28 lg:pt-20">
        {/* mobile  */}
        <Trailer media={data.media} className="md:hidden" />
        <section className="w-full    flex-1 md:self-center">
          <Title title={data.title} />
          <Description preHTML={data.description} />
        </section>
        {/* tablet & desktop  */}
        <section className="w-full md:w-[330px] lg:w-[400px] relative hidden md:block ">
          <section className="absolute top-0 bg-white left-0 right-0 border border-slate-200">
            <div className="   p-1 lg:p-2  ">
              <Trailer media={data.media} className="" />
            </div>

            <CTA className="hidden md:block" />
            <CheckList
              checkLists={data.checklist}
              className="hidden md:block"
            />
            <p className="justify-between absolute -bottom-10 left-0 right-0 hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row">
              <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
              <span className="flex items-center justify-center ml-2 underline cursor-pointer text-green-600">
                <PhoneIcon className="fill-green-600" />
                <span className="ml-1">ফোন করুন (16910)</span>
              </span>
            </p>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Hero;
