import React from "react";
import { Section } from "../../_libs/types";
import Image from "next/image";
import { time } from "console";
import Link from "next/link";

const GroupJoinEngagement: React.FC<{ engagement: Section }> = ({
  engagement,
}) => {
  return (
    <div id="group_join_engagement">
      {engagement.values.map((engagementSingleItem) => {
        return (
          <div
            key={engagementSingleItem.id}
            className="flex gap-4  mb-8 overflow-hidden p-8 rounded-xl md:mb-12"
            style={{
              backgroundImage: `url(${engagementSingleItem.background?.image})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-full md:w-1/2">
              <Image
                width={190}
                height={40}
                src="https://cdn.10minuteschool.com/images/catalog/product/pointer/467478234_1276985680016189_8175110495169425888_n_1732621183218.png"
                className="mb-4"
                alt=""
              />
              <h2 className="text-xl font-semibold text-white">
                {engagementSingleItem.title}
              </h2>
              <p
                className="mt-2 text-base"
                style={{ color: engagementSingleItem.description_color }}
              >
                {engagementSingleItem.description}
              </p>
              <div className="mt-6 ">
                <Link
                  href={engagementSingleItem.cta?.clicked_url as string}
                  className=" bg-green-600  cursor-pointer rounded-md shadow-lg border-b-4 border-green-700 py-2 font-semibold text-white w-full whitespace-nowrap   text-center px-6 centered-buttons text-[16px] "
                >
                  {engagementSingleItem.cta?.text}
                </Link>
              </div>
            </div>
            <div className="items-center hidden w-1/2 md:flex">
              <Image
                src={engagementSingleItem.thumbnail as string}
                height={200}
                width={320}
                alt=""
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GroupJoinEngagement;
