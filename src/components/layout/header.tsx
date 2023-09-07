"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CozyMinecraft } from "@/assets/images";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import classNames from "classnames";

const scrollThreshold = 80;
const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > scrollThreshold && !isScrolled) {
      setIsScrolled(true);
    } else if (latest < scrollThreshold && isScrolled) {
      setIsScrolled(false);
    }
  });

  return (
    <motion.header
      initial={{ height: 120 }}
      animate={{ height: scrollY.get() > scrollThreshold ? 60 : 120 }}
      transition={{ duration: 0.1 }}
      className={classNames(
        "fixed top-0 left-0 flex items-center justify-center h-[120px] z-50",
        "backdrop-blur-md bg-opacity-20 bg-tesla-900 w-full border-b duration-100",
        isScrolled ? "border-tesla-800" : "border-transparent",
      )}
    >
      <div className="w-[880px] h-full flex flex-row items-center justify-between">
        <div className="w-fit h-11">
          <Image src={CozyMinecraft} className="h-full w-[72px]" alt="Logo" />
        </div>
        <div className="w-11 h-11 bg- slate-600"></div>
      </div>
    </motion.header>
  );
};

export default Header;
