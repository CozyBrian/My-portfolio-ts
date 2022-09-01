import React, { useEffect } from "react";
import useOnScreen from "../../../helpers";

type Props = {
  pagerefs: React.MutableRefObject<null>[];
};

const Header = ({ pagerefs }: Props) => {
  const isVisible = useOnScreen(pagerefs[0]);
  const isVisible1 = useOnScreen(pagerefs[1]);
  const isVisible2 = useOnScreen(pagerefs[2]);

  const navlink = document.getElementsByClassName("hLink");

  useEffect(() => {
    isVisible
      ? navlink[0].classList.add("text-sky-500")
      : navlink[0].classList.remove("text-sky-500");
    isVisible1
      ? navlink[1].classList.add("text-sky-500")
      : navlink[1].classList.remove("text-sky-500");
    isVisible2
      ? navlink[2].classList.add("text-sky-500")
      : navlink[2].classList.remove("text-sky-500");
  });

  return (
    <div className="h-14 bg-[#000000a6] flex w-full z-50 items-center justify-center fixed top-0">
      <div className="container flex flex-row justify-between items-center h-full px-2 sm:px-24 text-gray-400">
        <h4 className="text-white opacity-100 text-xl">Brian Newton</h4>
        <div className="flex flex-row justify-center items-center">
          <a
            href="#home"
            className="px-2 hover:text-gray-200 transition-all duration-100 hLink"
          >
            Home
          </a>
          <a
            href="#skills"
            className="px-2 hover:text-gray-200 transition-all duration-100 hLink"
          >
            My Skills
          </a>
          <a
            href="#projects"
            className="px-2 hover:text-gray-200 transition-all duration-100 hLink"
          >
            Projects
          </a>
          <a href="#contact" rel="noopener noreferrer">
            <div className="flex items-center font-['Nunito_Sans'] justify-center p-1 mx-2 duration-200 border border-sky-500 text-lg font-semibold rounded-sm w-24 hover:bg-sky-500 text-sky-500 hover:text-gray-900">
              Hire Me
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
