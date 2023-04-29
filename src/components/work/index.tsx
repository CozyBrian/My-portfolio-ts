import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";
import { useApiContext } from "../../services/api.context";

const WorkSection = () => {
  const { works, isLoaded } = useApiContext();
  const [selectedTab, setSelectedTab] = useState("");

  useEffect(() => {
    if (works[0]) {
      setSelectedTab(works[0].id);
    }
  }, [isLoaded, works]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <section className="py-20 text-gray-100 ">
          <div className="container px-4 mx-auto ">
            <div className="max-w-2xl mx-auto mb-16 text-center">
              <span className="font-bold tracking-wider uppercase text-sky-500">
                Where
              </span>
              <h2 className="text-4xl font-bold lg:text-4xl uppercase">
                I've worked
              </h2>
            </div>
            <div className="container flex justify-center items-center lg:px-20 ">
              {isLoaded ? (
                <div className="w-screen px-8 md:px-0 md:max-w-[44rem] flex-1 flex flex-col md:flex-row gap-4 duration-150">
                  <div className="w-full md:w-[10rem] pl-8 md:pl-0 shrink-0 overflow-scroll md:overflow-clip">
                    <div className="pl-16 md:pl-0 h-12 md:w-[10rem] justify-center md:justify-start md:h-full flex flex-row md:flex-col shrink-0">
                      {works.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => setSelectedTab(item.id)}
                          className={cn(
                            "h-12 w-[9rem] flex-col md:flex-row relative cursor-pointer shrink-0 duration-150",
                            "hover:bg-sky-600/10 hover:[&>*:nth-child(2)]:text-sky-500",
                            item.id === selectedTab && "bg-sky-600/10"
                          )}
                        >
                          <motion.div
                            className={cn(
                              "absolute md:w-0.5 md:h-12 w-full h-0.5 bottom-0 md:left-0",
                              "bg-slate-800"
                            )}
                          ></motion.div>
                          <AnimatePresence>
                            {item.id === selectedTab && (
                              <motion.div
                                layoutId="tab-highlight"
                                className={cn(
                                  "absolute md:w-0.5 md:h-12 w-full h-0.5 bottom-0 md: left-0",
                                  "bg-sky-500"
                                )}
                              ></motion.div>
                            )}
                          </AnimatePresence>
                          <motion.div
                            className={cn(
                              "w-full h-full flex items-center justify-center md:justify-start md:pl-6  font-['Nunito_Sans'] duration-150",
                              item.id === selectedTab
                                ? "text-sky-500"
                                : "text-slate-600"
                            )}
                          >
                            {item.company}
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <AnimatePresence mode="wait">
                    {works.map(
                      (item) =>
                        item.id === selectedTab && (
                          <motion.div
                            key={`content-${selectedTab}`}
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -25 }}
                            transition={{ duration: 0.2 }}
                            className="py-2 flex flex-col gap-4"
                          >
                            <div>
                              <p className="text-slate-200 text-xl font-['Nunito_Sans'] mb-1">
                                {item.position}{" "}
                                <span className="text-sky-400 font-['Lato']">
                                  @ {item.company}
                                </span>
                              </p>
                              <p className="text-xs text-slate-400 font-mono">
                                {item.startDate} - {item.endDate}
                              </p>
                            </div>
                            <ul className="flex flex-col gap-2 list-disc">
                              {item.description.map((desc, docI) => (
                                <li
                                  key={`${item.id}-desc-${docI}`}
                                  className="pl-2 text-base text-slate-400 font-['Nunito_Sans']"
                                >
                                  {desc}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default WorkSection;
