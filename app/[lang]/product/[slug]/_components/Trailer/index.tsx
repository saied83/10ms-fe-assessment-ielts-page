"use client";
import React, { useState } from "react";
import { Medum } from "../../_libs/types";
import MediaPlaceholder from "./MediaPlaceholder";
import MediaPreview from "./MediaPreview";

const Trailer: React.FC<{ media: Medum[]; className: string }> = ({
  media,
  className,
}) => {
  const [mediaIndex, setMediaIndex] = useState<number>(0);

  const handleNext = () => {
    setMediaIndex((prev) => (prev + 1) % media.length);
  };

  const handlePrev = () => {
    setMediaIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const handleSelect = (index: number) => {
    setMediaIndex(index);
  };

  return (
    <section className={`${className}`}>
      <MediaPreview
        singleMedia={media[mediaIndex]}
        onNext={handleNext}
        onPrev={handlePrev}
      />
      <MediaPlaceholder
        media={media}
        selectedIndex={mediaIndex}
        onSelect={handleSelect}
      />
    </section>
  );
};

export default Trailer;
