"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";

import { IProduct } from "@/types";
import BentoMain from "./bentoMain";
import BentoImage from "./bentoImage";
import BentoSub from "./bentoSub";

const Bento = ({ projects }: { projects: IProduct[] }) => {
  const [selectedProjectID, setSelectedProjectID] = useState(
    projects[0].id as string,
  );

  return (
    <>
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
                  <BentoMain title={project.title} description={project.disc} />
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
    </>
  );
};

export default Bento;
