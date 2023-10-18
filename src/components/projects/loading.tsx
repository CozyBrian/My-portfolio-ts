import React from "react";
import BentoLoading from "./bento/loading";

const ProjectsLoading = () => {
  return (
    <section className="bg-tesla-800 min-h-[680px] mb-32 w-full flex flex-row justify-center items-center">
      <div className="w-screen md:w-[880px] flex flex-col gap-10 my-12 md:my-0">
        <h2 className="pl-4 md:px-1 text-tesla-text text-3xl font-medium tracking-wide">
          PROJECTS
        </h2>
        <BentoLoading />
      </div>
    </section>
  );
};

export default ProjectsLoading;
