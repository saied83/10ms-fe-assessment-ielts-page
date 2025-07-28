import Image from "next/image";
import React from "react";
import { Medum } from "../../_libs/types";

const MediaPlaceholder: React.FC<{
  media: Medum[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}> = ({ media, selectedIndex, onSelect }) => {
  return (
    <section className="w-full pl-0.5 p-4 gap-4 overflow-x-auto flex items-center hide-scroll-menu">
      {media.map((item, index) => {
        const isActive = index === selectedIndex;
        const isVideo = item.resource_type === "video";

        return (
          <div
            key={item.resource_value}
            onClick={() => onSelect(index)}
            className={`relative min-w-[55px] w-[55px] aspect-11/6 rounded overflow-hidden border cursor-pointer ${
              isActive ? " outline-[2px] outline-[#1CAB55]" : ""
            }`}
          >
            <Image
              alt={item.name}
              src={
                isVideo
                  ? (item.thumbnail_url as string)
                  : (item.resource_value as string)
              }
              width={55}
              height={20}
              className="w-full h-full object-cover"
            />
            {isVideo && (
              <Image
                alt="Play"
                width={20}
                height={20}
                src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                className="w-5 h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default MediaPlaceholder;
