"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";
import { ArrowRight } from "iconsax-react";
import { IWork } from "@/types";

type WorkSectionProps = {
  work?: IWork[];
  resume_url: string;
};
const WorkSection = ({ resume_url }: WorkSectionProps) => {
  const [selectedTab, setSelectedTab] = useState("a");

  const work = [
    {
      id: "a",
      title: "Slightly Techie",
      url: "https://slightlytechie.com/",
      position: "Full Stack Developer",
      startDate: "Dec 2022",
      endDate: "Present",
      description: [
        "Led a team of young engineers to build a CRM web application using FastAPI with Python and React with TypeScript. The CRM makes getting information easy and has decreased the turnaround time for most activities by over 70%.",
        "Developed a Discord bot to streamline team communication by automating certain repetitive tasks. This has reduced time spent on issue resolution by over 50%. Technologies used were TypeScript, ExpressJS and MongoDB",
        "Adapted swiftly to emerging technologies and implemented them effectively in projects while sharing the knowledge with other teammates. This has saved the team the cost of finding over 5 developers in different areas of expertise and has fostered a culture of continuous learning.",
      ],
      stack: ["Typescript", "NextJS", "Tailwind", "ExpressJS", "MongoDB"],
    },
    {
      id: "b",
      title: "Ceruba",
      url: "https://www.ceruba.com/",
      position: "Frontend Developer",
      startDate: "March 2023",
      endDate: "Present",
      description: [
        "Developed administrative panels for our clients to view reports, track sales, and gain insight on their business’ performance on our platform using TypeScript, React and NextJS.",
        "Troubleshooting and debugging code issues to ensure smooth functioning of the platform.",
        "collaborating with teams across departments to align front-end development with back-end and design efforts, ensuring seamless product integration.",
      ],
      stack: ["Typescript", "NextJS", "Tailwind"],
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
      stack: ["Typescript", "NextJS", "Tailwind"],
    },
  ];

  return (
    <section className="bg-tesla-800 min-h-[700px] mb-32 w-full flex flex-row justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="w-screen md:w-[880px] min-h-[700px] py-14 flex flex-col gap-16"
      >
        <h2 className="pl-4 md:pl-0 text-tesla-text text-3xl font-medium tracking-wide">
          EXPERIENCE
        </h2>

        <div className="flex items-center w-full">
          <div className="w-screen px-4 md:px-0 flex-1 flex flex-col md:flex-row gap-4 duration-150">
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
                            @ {item.title}
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
          </div>
        </div>

        <div className="pl-4 md:pl-0 flex flex-1 items-end">
          <a
            href={resume_url}
            target="_blank"
            rel="noreferrer"
            className="flex flex-row items-center gap-2 bg-tesla-700/70 h-11 outline outline-1 outline-transparent hover:outline-[#6e97c5] active:outline-[#c1d3e6] hover:shadow-tesla-sm hover:-translate-y-0.5 active:translate-y-0.5 shadow-tesla-800 text-tesla-300 active:text-[#c1d3e6] font-medium px-4 py-2 rounded-lg duration-200"
          >
            <p>View Full Résumé</p>
            <ArrowRight />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default WorkSection;
