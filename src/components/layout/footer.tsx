import { CozyMinecraftFooter } from "@/assets/images";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center py-4">
      <div className="w-full md:w-[880px] px-4 md:px-0 h-12 flex flex-row items-center justify-between">
        <p className="text-tesla-text text-sm font-normal">
          © {new Date().getFullYear()} Brian Newton
        </p>
        <div className="w-fit h-10">
          <Image
            src={CozyMinecraftFooter}
            className="h-full w-[72px]"
            alt="Logo"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
