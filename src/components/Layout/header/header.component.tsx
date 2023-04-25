import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import useOnScreen from "../../../helpers";
import { useApiContext } from "../../../services/api.context";

type Props = {
  pagerefs: React.MutableRefObject<null>[];
};

const Header = ({ pagerefs }: Props) => {
  const { profile } = useApiContext();

  const [isOpen, setOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");

  const homeVisible = useOnScreen(pagerefs[0]);
  const skillVisible = useOnScreen(pagerefs[1]);
  const workVisible = useOnScreen(pagerefs[2]);
  const projectsVisible = useOnScreen(pagerefs[3]);
  const contactVisible = useOnScreen(pagerefs[4]);

  useEffect(() => {
    homeVisible && setActivePage("Home");
    skillVisible && setActivePage("Skills");
    workVisible && setActivePage("Work");
    projectsVisible && setActivePage("Projects");
    contactVisible && setActivePage("Contact");
  }, [contactVisible, homeVisible, projectsVisible, skillVisible, workVisible]);

  const sections = [
    {
      title: "Home",
      href: "#home",
    },
    {
      title: "Skills",
      href: "#skills",
    },
    {
      title: "Work",
      href: "#work",
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

  console.log("rerendering");

  return (
    <div
      className={`h-14 ${
        !isOpen ? "bg-[#000000a6]" : "bg-black"
      } flex w-full z-50 items-center justify-center fixed top-0 font-['Nunito_Sans']`}
    >
      <div className="container relative flex flex-row justify-between items-center h-full px-2 sm:px-24 text-gray-400">
        <h4 className="text-white opacity-100 text-xl font-['Nunito_Sans']">
          Brian Newton
        </h4>
        <div className="md:hidden">
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
        <div className="md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-row justify-center items-center hidden">
          {sections.map((item, i) => (
            <motion.div className="relative overflow-visible">
              <a
                key={item.title}
                href={item.href}
                className={`px-2 hover:text-gray-200 transition-all duration-100 ${
                  item.title === activePage ? "text-sky-500" : "text-gray-400"
                }`}
              >
                {item.title}
              </a>
              {item.title === activePage && (
                <motion.span
                  layoutId="navbar"
                  className="absolute left-0 -bottom-4 w-full h-0.5 bg-sky-500 z-50"
                ></motion.span>
              )}
            </motion.div>
          ))}
        </div>
        <div className="md:flex flex-row justify-center items-center hidden overflow-hidden">
          <a href={profile.resume} rel="noopener noreferrer" target="_blank">
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
                href={profile.resume}
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
