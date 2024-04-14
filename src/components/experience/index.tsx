import React from "react";
import { ArrowRight } from "iconsax-react";
import { getWorkData } from "@/services";
import WorkExperience from "./work";

type WorkSectionProps = {
  resume_url?: string;
};

export const dynamic = "force-dynamic";

const WorkSection = async ({ resume_url = "" }: WorkSectionProps) => {
  const { workData } = await getWorkData();

  return (
    <section className="bg-tesla-800 min-h-[700px] mb-16 w-full flex flex-row justify-center items-center">
      <div className="w-screen md:w-[880px] min-h-[700px] py-14 flex flex-col gap-16">
        <h2 className="pl-4 md:pl-0 text-tesla-text text-3xl font-medium tracking-wide">
          EXPERIENCE
        </h2>

        <div className="flex items-center w-full">
          <div className="w-screen px-4 md:px-0 flex-1 flex flex-col md:flex-row gap-4 duration-150">
            <WorkExperience work={workData} />
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
      </div>
    </section>
  );
};

export default WorkSection;
