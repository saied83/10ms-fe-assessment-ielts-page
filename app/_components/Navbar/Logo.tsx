import { MenuIcon } from "@/app/_assets/icons";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex justify-start items-center gap-2 md:gap-3">
      <button type="button">
        <MenuIcon className="w-5 h-5 text-black xl:hidden" />
      </button>
      <Image
        src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
        width={100}
        height={27}
        alt="10ms"
        style={{ width: "100px", height: "27px" }}
      />
    </div>
  );
};

export default Logo;
