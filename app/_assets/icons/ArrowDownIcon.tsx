import React from "react";
import { IconProps } from "./types";

const ArrowDownIcon: React.FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth={2}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className}`}
      {...props}
      height={20}
      width={20}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
};

export default ArrowDownIcon;
