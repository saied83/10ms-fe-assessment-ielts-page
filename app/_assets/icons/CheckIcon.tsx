import React from "react";
import { IconProps } from "./types";

const CheckIcon: React.FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={`${className}`}
      {...props}
      height={20}
      width={20}
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: "rgb(98, 148, 248)" }}
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default CheckIcon;
