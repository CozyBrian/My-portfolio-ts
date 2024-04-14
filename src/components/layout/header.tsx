"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CozyMinecraft } from "@/assets/images";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import classNames from "classnames";
import { useWindowSize } from "usehooks-ts";
import Link from "next/link";

const scrollThreshold = 80;
const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  const screen = useWindowSize();
  const isMobile = screen.width <= 768;

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > scrollThreshold && !isScrolled) {
      setIsScrolled(true);
    } else if (latest < scrollThreshold && isScrolled) {
      setIsScrolled(false);
    }
  });

  return (
    <motion.header
      initial={{ height: isMobile ? 60 : 120 }}
      animate={{
        height: isMobile ? 60 : scrollY.get() > scrollThreshold ? 60 : 120,
      }}
      transition={{ duration: 0.1 }}
      className={classNames(
        "fixed top-0 left-0 flex items-center justify-center h-[120px] z-30",
        "bg-opacity-20 bg-tesla-900 w-full border-b duration-100",
        isScrolled ? "border-tesla-800" : "border-transparent",
      )}
    >
      <div className="w-full px-4 md:px-0 md:w-[880px] h-full flex flex-row items-center justify-between z-50">
        <Link href="/" className="w-fit h-11">
          <Image src={CozyMinecraft} className="h-full w-[72px]" alt="Logo" />
        </Link>
        <div className="w-11 h-11 bg- slate-600"></div>
      </div>
      <div
        style={{
          maskImage: `linear-gradient(to bottom, white 0%, white 100%)`,
          WebkitMaskImage: `linear-gradient(to bottom, white 0%, white 100%)`,
          maskClip: `content-box`,
          WebkitMaskClip: `content-box`,
          backdropFilter: `blur(12px)`,
        }}
        className={classNames(
          "absolute ",
          isMobile ? "inset-[-1px] p-[1px]" : "inset-[-18px] p-[18px]",
        )}
      ></div>
    </motion.header>
  );
};

export default Header;
