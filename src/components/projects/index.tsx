"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";

import { IProduct } from "@/types";
import BentoMain from "./bento/bentoMain";
import BentoImage from "./bento/bentoImage";
import BentoSub from "./bento/bentoSub";

type ProjectSectionProps = {
  projects: IProduct[];
};
export default function ProjectsSection({ projects }: ProjectSectionProps) {
  const [selectedProjectID, setSelectedProjectID] = useState(
    projects[0].id as string,
  );

  return (
    <section className="bg-tesla-800 min-h-[680px] mb-32 w-full flex flex-row justify-center items-center">
      <div className="w-screen md:w-[880px] flex flex-col gap-10 my-12 md:my-0">
        <h2 className="pl-4 md:px-1 text-tesla-text text-3xl font-medium tracking-wide">
          PROJECTS
        </h2>
        <div className="md:hidden flex flex-row items-center gap-3 py-1 px-6 w-full md:w-[880px] overflow-x-scroll scrollbar-none fade-x">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProjectID(project.id)}
              className={classNames(
                "flex items-center justify-center h-11 px-6 bg-tesla-500/10 rounded-md outline outline-1 duration-150",
                selectedProjectID === project.id
                  ? "text-tesla-400 outline-tesla-600"
                  : "text-tesla-500 outline-transparent",
              )}
            >
              {project.title}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          {projects.map(
            (project) =>
              project.id === selectedProjectID && (
                <motion.div
                  key={project.id}
                  className="project-bento w-full md:h-[440px] px-3 md:px-0"
                >
                  <div className="bento-image flex md:h-[440px] md:aspect-square rounded-3xl">
                    <BentoImage images={project.image} type={project.type} />
                  </div>
                  <div className="relative flex bento-main">
                    <BentoMain
                      title={project.title}
                      description={project.disc}
                    />
                  </div>
                  <div className="flex bento-sub">
                    <BentoSub
                      tags={project.tags}
                      link={project.link}
                      live={project.live}
                      type={project.type}
                    />
                  </div>
                </motion.div>
              ),
          )}
        </AnimatePresence>
        <div className="hidden md:flex flex-row items-center gap-3 py-1 px-6 w-full md:w-[880px] overflow-x-scroll scrollbar-none fade-x">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProjectID(project.id)}
              className={classNames(
                "flex items-center justify-center h-11 px-6 bg-tesla-500/10 rounded-md outline outline-1 duration-150",
                selectedProjectID === project.id
                  ? "text-tesla-400 outline-tesla-600"
                  : "text-tesla-500 outline-transparent",
              )}
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
