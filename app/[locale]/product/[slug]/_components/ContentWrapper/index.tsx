import React, { ReactNode } from "react";

const ContentWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className="w-full  flex justify-center  relative">
      <div className="max-w-[1200px] w-full">
        <div className="w-full md:max-w-[calc(100%-378px)] lg:max-w-[calc(100%-448px)] px-4">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ContentWrapper;
