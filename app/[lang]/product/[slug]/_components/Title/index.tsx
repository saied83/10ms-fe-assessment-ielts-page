import React from "react";

const Title: React.FC<{ title: string }> = ({ title }) => {
  return (
    <h1 className="text-white mb-2 text-[21px] font-semibold  md:text-4xl">
      {title}
    </h1>
  );
};

export default Title;
