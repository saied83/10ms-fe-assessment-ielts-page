import { PhoneIcon, SearchIcon } from "@/app/assets/icons";
import LanguageSwitcher from "./LanguageSwitcher";

const RightControls = () => {
  return (
    <div className="flex items-center space-x-4 md:space-x-6">
      <button type="button">
        <SearchIcon className="w-7 h-7 text-black md:hidden" />
      </button>
      <LanguageSwitcher />
      <button
        type="button"
        className="w-max flex justify-center items-center gap-1"
      >
        <PhoneIcon className="w-5 h-5 text-black md:text-green-600 md:fill-green-600" />
        <span className="text-green-600 hidden md:block leading-[18px] w-max text-[12px] font-semibold md:leading-[24px] md:text-[16px] md:font-medium">
          169100
        </span>
      </button>
      <button
        type="button"
        className="py-1 px-3 leading-[18px] w-max text-[12px] font-semibold md:leading-[24px] md:text-[16px] md:font-medium text-white rounded-sm bg-green-600"
      >
        লগ-ইন
      </button>
    </div>
  );
};

export default RightControls;
