"use client";
import { MediaPlayIcon, QuoteIcon } from "@/app/assets/icons";
import Image from "next/image";
import React, { useState } from "react";
import { Value } from "../../_libs/types";

const SingleTestimonial: React.FC<{ data: Value }> = ({ data }) => {
  const [playVideo, setPlayVideo] = useState<boolean>(false);
  return (
    <div className=" p-4  mt-4 w-[372px] min-w-[372px] relative border border-slate-300 rounded-lg ">
      <div
        className="absolute -top-4 left-5 flex h-[38px] w-[38px] flex-row items-center justify-center rounded-full bg-[#FCE0D6] p-2 z-50"
        id="quote"
      >
        <QuoteIcon />
        <QuoteIcon />
      </div>

      <section className="w-full  pt-4  ">
        {data.thumb &&
          (playVideo ? (
            <iframe
              src={`https://www.youtube.com/embed/${data.video_url}?rel=0&autoplay=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full aspect-video object-cover  rounded-md"
              title="Embedded YouTube"
            />
          ) : (
            <div className="w-full relative">
              <button
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                type="button"
                onClick={() => setPlayVideo(true)}
              >
                <MediaPlayIcon className="text-red-500" />
              </button>
              <Image
                width={320}
                height={180}
                src={data.thumb}
                alt={data.description as string}
                className="w-full object-cover rounded-md"
              />
            </div>
          ))}
      </section>
      <section className="flex justify-start items-center gap-2 pt-4">
        <Image
          alt="image"
          width={50}
          height={50}
          src="https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_12_1746957311937.png"
          className="rounded-full"
        />
        <div>
          <h3>{data.name}</h3>
          <p className="text-sm text-gray-400">{data.description}</p>
        </div>
      </section>
    </div>
  );
};

export default SingleTestimonial;
