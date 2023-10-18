import React from "react";
import { getPortfolioData } from "@/services";
import Bento from "./bento";

export const dynamic = "force-dynamic";

export default async function ProjectsSection() {
  const { projectsData: projects } = await getPortfolioData();

  return (
    <section className="bg-tesla-800 min-h-[680px] mb-32 w-full flex flex-row justify-center items-center">
      <div className="w-screen md:w-[880px] flex flex-col gap-10 my-12 md:my-0">
        <h2 className="pl-4 md:px-1 text-tesla-text text-3xl font-medium tracking-wide">
          PROJECTS
        </h2>
        <Bento projects={projects} />
      </div>
    </section>
  );
}
