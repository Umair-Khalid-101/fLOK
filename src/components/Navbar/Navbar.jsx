import React from "react";
import { Link } from "react-router-dom";
import { US } from "country-flag-icons/react/3x2";
import { RxCaretDown } from "react-icons/rx";

// Components
import { SearchInput } from "../../components";

// Constants
import { links } from "../../constants";

// SVGS
import { logo } from "../../assets";

const Navbar = () => {
  return (
    <div
      className="bg-navColor h-[60px] w-full text-white
    flex justify-evenly items-center py-8
    "
    >
      <div className="pr-12">
        <img src={logo} alt="logo" className="w-20 h-auto" />
      </div>
      <div className="w-[25%]">
        <SearchInput />
      </div>
      <div className="flex gap-12">
        {links.map((link) => (
          <Link key={Math.random()} to={link.path} className="font-Poppins">
            {link.name}
          </Link>
        ))}
      </div>
      <div
        className="flex justify-center items-center
      gap-4
      "
      >
        <div>Language</div>
        <div className="flex justify-center items-center gap-1">
          <US title="United States" className="h-8 w-8" />
          <RxCaretDown className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
