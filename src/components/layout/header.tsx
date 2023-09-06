import React from "react";
import Image from "next/image";
import { CozyMinecraft } from "@/assets/images";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 flex items-center justify-center h-[60px] h- [120px] w-full border-b border-[#2B303B]">
      <div className="w-[880px] h-full flex flex-row items-center justify-between bg- slate-800">
        <div className="w-fit h-11">
          <Image src={CozyMinecraft} className="h-full w-[102px]" alt="Logo" />
        </div>
        <div className="w-11 h-11 bg- slate-600"></div>
      </div>
    </header>
  );
};

export default Header;
