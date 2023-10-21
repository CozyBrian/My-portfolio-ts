"use client";
import { IWork } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import cn from "classnames";

const WorkExperience = ({ work }: { work: IWork[] }) => {
  const [selectedTab, setSelectedTab] = useState(work[0].id);
  return (
    <>
      <div className="w-full md:w-[10rem] pl-8 md:pl-0 shrink-0 overflow-scroll md:overflow-clip">
        <div className="h-12 md:w-[10rem] justify-center md:justify-start md:h-full flex flex-row md:flex-col shrink-0">
          {work.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedTab(item.id)}
              className={cn(
                "h-12 w-[9rem] flex-col md:flex-row relative cursor-pointer shrink-0 duration-150",
                "hover:bg-tesla-500/10 group",
                item.id === selectedTab && "bg-tesla-500/10",
              )}
            >
              <motion.div
                className={cn(
                  "absolute md:w-0.5 md:h-12 w-full h-0.5 bottom-0 md:left-0",
                  "bg-[#26568a]/30",
                )}
              ></motion.div>
              <AnimatePresence>
                {item.id === selectedTab && (
                  <motion.div
                    layoutId="tab-highlight"
                    className={cn(
                      "absolute md:w-0.5 md:h-12 w-full h-0.5 bottom-0 md: left-0",
                      "bg-tesla-300",
                    )}
                  ></motion.div>
                )}
              </AnimatePresence>
              <motion.div
                className={cn(
                  "w-full h-full flex items-center justify-center md:justify-start md:pl-6 duration-150",
                  "group-hover:text-tesla-400",
                  item.id === selectedTab ? "text-tesla-300" : "text-[#26568a]",
                )}
              >
                {item.company}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        {work.map(
          (item) =>
            item.id === selectedTab && (
              <motion.div
                key={`content-${selectedTab}`}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.2 }}
                className="py-2 px-2 md:px-0 flex flex-col gap-4"
              >
                <div>
                  <p className="text-[#d6e1ee] text-xl mb-1">
                    {item.position}{" "}
                    <a
                      href={item.url}
                      target="_blank"
                      className="text-[#5989bd] hover:text-tesla-300 duration-200 font-medium"
                      rel="noreferrer"
                    >
                      @ {item.company}
                    </a>
                  </p>
                  <p className="text-xs text-tesla-400 font-mono">
                    {item.startDate} - {item.endDate}
                  </p>
                </div>
                <ul className="flex flex-col gap-2 list-disc">
                  {item.description.map((desc, docI) => (
                    <li
                      key={`${item.id}-desc-${docI}`}
                      className="pl-2 text-base text-tesla-400"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-row gap-2 gap-y-3 flex-wrap items-center text-xs">
                  {item.stack.map((stack) => (
                    <div
                      key={stack}
                      className="bg-tesla-700/70 py-1 px-3 text-tesla-300 outline outline-1 outline-transparent hover:outline-tesla-300 hover:text-tesla-200 hover:bg-tesla-600/70 rounded-full duration-100"
                    >
                      {stack}
                    </div>
                  ))}
                </div>
              </motion.div>
            ),
        )}
      </AnimatePresence>
    </>
  );
};

export default WorkExperience;
