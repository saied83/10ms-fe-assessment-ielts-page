import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import RightControls from "./RightControls";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 left-0 right-0 bg-white md:h-[65px] w-full z-50">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 md:gap-6 px-4 py-3 md:px-7 w-full border-b border-slate-300">
        <Logo />
        <SearchBar />
        <NavLinks />
        <RightControls />
      </div>
    </nav>
  );
};

export default Navbar;
