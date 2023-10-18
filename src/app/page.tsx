import WorkSection from "@/components/experience";
import ProjectsSection from "@/components/projects";
import ContactSection from "@/components/contact";
import { getPortfolioData } from "@/services";
import { Suspense } from "react";
import ProjectsLoading from "@/components/projects/loading";

export default async function Home() {
  const { profileData } = await getPortfolioData();

  return (
    <>
      <section className="h-[680px] w-full md:w-[880px] flex flex-col justify-center">
        <div className="flex flex-col gap-10 px-4">
          <h1 className="text-4xl font-semibold text-tesla-100 leading-normal md:leading-relaxed font-nunitoSans">
            Hello, I&apos;m <br className="md:hidden" />
            <span className="text-cozy-celestialBlue">Brian Newton</span>,
            <br /> an earth based Full Stack Engineer pushing the boundaries of
            web and mobile experiences
          </h1>
          <div>
            <a
              href="#contact"
              className="bg-tesla-800 inline-flex items-center justify-center h-11 hover:shadow-tesla-sm hover:-translate-y-0.5 outline outline-1 outline-transparent hover:outline-tesla-400 active:translate-y-0.5 shadow-tesla-800 text-tesla-500 hover:text-tesla-400 font-medium px-4 py-2 rounded-lg duration-200"
            >
              Hire Me
            </a>
          </div>
        </div>
      </section>

      <WorkSection resume_url={profileData.resume} />
      <Suspense fallback={<ProjectsLoading />}>
        <ProjectsSection />
      </Suspense>

      <ContactSection />
    </>
  );
}
