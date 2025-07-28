import React from "react";
import { IconProps } from "./types";

const PhoneIcon: React.FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      className={`${className}`}
      {...props}
      viewBox="0 0 20 20"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.61 10.394c3.325 3.323 4.079-.522 6.195 1.594 2.04 2.04 3.214 2.448.628 5.033-.323.26-2.381 3.391-9.612-3.838C-.41 5.953 2.72 3.893 2.98 3.57c2.592-2.592 2.993-1.412 5.034.628 2.116 2.116-1.727 2.873 1.597 6.196z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default PhoneIcon;
