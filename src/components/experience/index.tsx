"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";

const WorkSection = () => {
  const [selectedTab, setSelectedTab] = useState("a");

  const work = [
    {
      id: "a",
      title: "Slightly Techie",
      position: "Full Stack Developer",
      startDate: "Dec 2022",
      endDate: "Present",
      description: [
        "Led a team of young engineers to build a CRM web application using FastAPI with Python and React with TypeScript. The CRM makes getting information easy and has decreased the turnaround time for most activities by over 70%.",
        "Developed a Discord bot to streamline team communication by automating certain repetitive tasks. This has reduced time spent on issue resolution by over 50%. Technologies used were TypeScript, ExpressJS and MongoDB",
        "Adapted swiftly to emerging technologies and implemented them effectively in projects while sharing the knowledge with other teammates. This has saved the team the cost of finding over 5 developers in different areas of expertise and has fostered a culture of continuous learning.",
      ],
    },
    {
      id: "b",
      title: "Ceruba",
      position: "Frontend Developer",
      startDate: "March 2023",
      endDate: "Present",
      description: [
        "Developed administrative panels for our clients to view reports, track sales, and gain insight on their business’ performance on our platform using TypeScript, React and NextJS.",
        "Troubleshooting and debugging code issues to ensure smooth functioning of the platform.",
        "collaborating with teams across departments to align front-end development with back-end and design efforts, ensuring seamless product integration.",
      ],
    },
    {
      id: "c",
      title: "Xenon Limited",
      url: "https://www.xenonlimited.com/",
      position: "Junior Software Developer Intern",
      startDate: "May",
      endDate: "July 2023",
      description: [
        "Cooperated with UI designer to rebuild company website with newer technologies such as (TypeScript, React and NextJS) and exceptional User Interface and User Experience.",
        "Implemented SEO best practices to improve the website's search engine ranking and visibility by 14%.",
        "Enhanced user engagement by optimizing page load times and improving overall website performance by as much as 20%, resulting in longer user stay durations.",
      ],
    },
  ];
  return (
    <motion.div
      // initial={{ opacity: 0, y: 50 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="bg-tesla-800 h-[600px] mb-24 w-full flex flex-row justify-center items-center"
    >
      <section className="w-[880px] h-full py-14 flex flex-col gap-16">
        <h2 className="text-tesla-text text-3xl font-medium tracking-wide">
          EXPERIENCE
        </h2>

        <div className="flex items-center">
          <div className="w-screen px-8 md:px-0 md:ma x-w-[44rem] flex-1 flex flex-col md:flex-row gap-4 duration-150">
            <div className="w-full md:w-[10rem] pl-8 md:pl-0 shrink-0 overflow-scroll md:overflow-clip">
              <div className="pl-16 md:pl-0 h-12 md:w-[10rem] justify-center md:justify-start md:h-full flex flex-row md:flex-col shrink-0">
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
                        item.id === selectedTab
                          ? "text-tesla-300"
                          : "text-[#26568a]",
                      )}
                    >
                      {item.title}
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
                      className="py-2 flex flex-col gap-4"
                    >
                      <div>
                        <p className="text-[#d6e1ee] text-xl mb-1">
                          {item.position}{" "}
                          <span className="text-[#5989bd]">@ {item.title}</span>
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
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default WorkSection;
