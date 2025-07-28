import React from "react";

const Description: React.FC<{ preHTML: string }> = ({ preHTML }) => {
  return (
    <div
      className="text-gray-400 overflow-hidden h-auto text-[16px] leading-[24px] "
      dangerouslySetInnerHTML={{ __html: preHTML }}
    />
  );
};

export default Description;
