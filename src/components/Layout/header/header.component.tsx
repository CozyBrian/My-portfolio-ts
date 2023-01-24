import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import useOnScreen from "../../../helpers";

type Props = {
  pagerefs: React.MutableRefObject<null>[];
};

const Header = ({ pagerefs }: Props) => {
  const [isOpen, setOpen] = useState(false);

  const isVisible = useOnScreen(pagerefs[0]);
  const isVisible1 = useOnScreen(pagerefs[1]);
  const isVisible2 = useOnScreen(pagerefs[2]);
  const isVisible3 = useOnScreen(pagerefs[3]);

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
    isVisible3
      ? navlink[3].classList.add("text-sky-500")
      : navlink[3].classList.remove("text-sky-500");
  });

  const sections = [
    {
      title: "Home",
      href: "#home",
    },
    {
      title: "My Skills",
      href: "#skills",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  return (
    <div
      className={`h-14 ${
        !isOpen ? "bg-[#000000a6]" : "bg-black"
      } flex w-full z-50 items-center justify-center fixed top-0`}
    >
      <div className="container flex flex-row justify-between items-center h-full px-2 sm:px-24 text-gray-400">
        <h4 className="text-white opacity-100 text-xl font-['Nunito_Sans']">
          Brian Newton
        </h4>
        <div className="sm:hidden">
          <button
            onClick={() => setOpen(!isOpen)}
            type="button"
            className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-all text-sm  hover:bg-slate-800 border-gray-700 text-gray-400 hover:text-white focus:ring-offset-gray-800"
          >
            {!isOpen ? (
              <svg
                className=" w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            ) : (
              <svg
                className=" w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            )}
          </button>
        </div>
        <div className="sm:flex flex-row justify-center items-center hidden overflow-hidden">
          {sections.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="px-2 hover:text-gray-200 transition-all duration-100 hLink"
            >
              {item.title}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1ii3nFmTpGCKaLiCkacCIkpgv90rHcX5g/view?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="flex items-center font-['Nunito_Sans'] justify-center p-1 mx-2 duration-200 border border-sky-500 text-lg font-semibold rounded-sm w-24 hover:bg-sky-500 text-sky-500 hover:text-gray-900">
              Resume
            </div>
          </a>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            className=" bg-[#000000] flex flex-col justify-start items-center w-full h-full z-10 fixed top-14 p-2 pb-4"
            // initial={{ y: -200 }}
            // animate={{ y: 0 }}
            // exit={{ y: -300 }}
            initial={{ x: "200%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ bounce: 1 }}
          >
            <div className="flex flex-col items-center h-full gap-6 justify-center">
              {sections.map((item, i) => (
                <motion.a
                  initial={{ x: 500, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1 * i,
                    ease: "easeOut",
                  }}
                  key={item.title}
                  href={item.href}
                  className="p-2 text-gray-200 hover:text-slate-400 font-['Nunito_Sans'] tracking-wider uppercase text-4xl transition-all duration-100"
                  onClick={() => setOpen(!isOpen)}
                >
                  {item.title}
                </motion.a>
              ))}
              <a
                href="https://drive.google.com/file/d/1ii3nFmTpGCKaLiCkacCIkpgv90rHcX5g/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
                onClick={() => setOpen(!isOpen)}
              >
                <div className="flex items-center font-['Nunito_Sans'] justify-center uppercase px-4 py-2 m-2 duration-200 border border-sky-500 text-2xl font-semibold rounded-md hover:bg-sky-500 text-sky-500 hover:text-gray-900">
                  Resume
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
