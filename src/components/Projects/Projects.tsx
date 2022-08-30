import React, { useContext, useEffect } from "react";
import { ApiContext } from "../../services/api.context";
import ProjectCard from "./project-card";

type Product = {
  image: string;
  title: string;
  disc: string;
  link: string;
  type: string;
};

const ProjectSection = () => {
  const { projects, isLoaded } = useContext(ApiContext);

  const mobileProj = projects.filter((proj: Product) => {
    return proj.type.includes("mobile");
  });

  return (
    <section className="py-20 dark:bg-gray-800 dark:text-gray-100 ">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="font-bold tracking-wider uppercase dark:text-sky-500">
            some
          </span>
          <h2 className="text-4xl font-bold lg:text-5xl">PROJECTS</h2>
        </div>
        <div className="flex flex-wrap items-stretch justify-center -mx-4">
          {isLoaded ? (
            mobileProj.map((item: Product, i: React.Key | null | undefined) => (
              <ProjectCard
                key={i}
                image={item.image}
                title={item.title}
                disc={item.disc}
                link={item.link}
                type={item.type}
              />
            ))
          ) : (
            <h3>Looks Like we had a problem. Try Refreshing the page</h3>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
