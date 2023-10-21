import React from "react";
import WorkExperienceLoading from "./work/loading";

const WorkSectionLoading = () => {
  return (
    <section className="bg-tesla-800 min-h-[700px] mb-32 w-full flex flex-row justify-center items-center">
      <div className="w-screen md:w-[880px] min-h-[700px] py-14 flex flex-col gap-16">
        <h2 className="pl-4 md:pl-0 text-tesla-text text-3xl font-medium tracking-wide">
          EXPERIENCE
        </h2>

        <div className="flex items-center w-full">
          <div className="w-screen px-4 md:px-0 flex-1 flex flex-col md:flex-row gap-4 duration-150">
            <WorkExperienceLoading />
          </div>
        </div>

        <div className="pl-4 md:pl-0 flex flex-1 items-end">
          <div className="flex flex-row items-center gap-2 bg-tesla-700/70 h-11 w-[200px] outline outline-1 outline-transparent  shadow-tesla-800 text-tesla-300 font-medium px-4 py-2 rounded-lg duration-200"></div>
        </div>
      </div>
    </section>
  );
};

export default WorkSectionLoading;
