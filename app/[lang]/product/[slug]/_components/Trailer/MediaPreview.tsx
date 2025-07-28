"use client";
import React, { useState } from "react";
import { Medum } from "../../_libs/types";
import Image from "next/image";
import { MediaArrowIcon, MediaPlayIcon } from "@/app/_assets/icons";

const MediaPreview: React.FC<{
  singleMedia: Medum;
  onNext: () => void;
  onPrev: () => void;
}> = ({ singleMedia, onNext, onPrev }) => {
  const { name, resource_type, resource_value, thumbnail_url } = singleMedia;
  const [playVideo, setPlayVideo] = useState(false);

  const renderContent = () => {
    if (resource_type === "image") {
      return (
        <Image
          src={resource_value}
          alt={name}
          className="w-full aspect-video object-cover rounded-xl md:rounded-none"
          width={768}
          height={360}
        />
      );
    }

    if (playVideo) {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${resource_value}?rel=0&autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full object-cover rounded-xl md:rounded-none z-50"
          title="Embedded YouTube"
        />
      );
    }

    return (
      <Image
        src={thumbnail_url as string}
        alt={name}
        className="w-full aspect-video object-cover rounded-xl md:rounded-none"
        width={768}
        height={360}
      />
    );
  };

  return (
    <section className="w-full aspect-video rounded-xl md:rounded-none relative">
      {renderContent()}

      {/* Right Arrow */}
      <button
        onClick={onNext}
        className="absolute top-1/2 -translate-y-1/2 right-2 z-10 p-1  rounded-full"
        type="button"
      >
        <MediaArrowIcon />
      </button>

      {/* Left Arrow */}
      <button
        onClick={onPrev}
        className="absolute top-1/2 -translate-y-1/2 left-2 z-10 p-1  rounded-full"
        type="button"
      >
        <MediaArrowIcon className="rotate-180" />
      </button>

      {/* Play Button */}
      {!playVideo && resource_type === "video" && (
        <button
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          type="button"
          onClick={() => setPlayVideo(true)}
        >
          <MediaPlayIcon className="#1CAB55" />
        </button>
      )}
    </section>
  );
};

export default MediaPreview;
