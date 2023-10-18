import classNames from "classnames";
import React from "react";

const BentoLoading = () => {
  const projects = Array(9).fill("");
  return (
    <>
      <div className="md:hidden flex flex-row items-center gap-3 py-1 px-6 w-full md:w-[880px] overflow-x-scroll scrollbar-none fade-x">
        {projects.map((project, i) => (
          <button
            key={i}
            className={classNames(
              "flex items-center justify-center shrink-0 h-11 w-[115px] px-6 bg-tesla-500/10 rounded-md outline outline-1 duration-150",
              "text-tesla-500 outline-transparent",
            )}
          >
            {project.title}
          </button>
        ))}
      </div>

      <div className="project-bento w-full md:h-[440px] px-3 md:px-0">
        <div className="bento-image flex md:h-[440px] md:aspect-square rounded-3xl">
          <div className="flex-1 bg-tesla-700/70 m-2 rounded-3xl" />
        </div>
        <div className="relative flex bento-main">
          <div className="flex-1 bg-tesla-700/70 m-2 rounded-3xl" />
        </div>
        <div className="flex bento-sub">
          <div className="flex-1 bg-tesla-700/70 m-2 rounded-3xl" />
        </div>
      </div>

      <div className="hidden md:flex flex-row items-center gap-3 py-1 px-6 w-full md:w-[880px] overflow-x-scroll scrollbar-none fade-x">
        {projects.map((project, i) => (
          <button
            key={i}
            className={classNames(
              "flex items-center justify-center shrink-0 h-11 w-[115px] px-6 bg-tesla-500/10 rounded-md outline outline-1 duration-150",
              "text-tesla-500 outline-transparent",
            )}
          >
            {project.title}
          </button>
        ))}
      </div>
    </>
  );
};

export default BentoLoading;
