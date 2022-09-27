import React, { useContext } from "react";
import { motion } from "framer-motion";
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

  // const mobileProj = projects.filter((proj: Product) => {
  //   return proj.type.includes("mobile");
  // });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      <section className="py-20 text-gray-100 ">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <span className="font-bold tracking-wider uppercase text-sky-500">
              some
            </span>
            <h2 className="text-4xl font-bold lg:text-5xl">PROJECTS</h2>
          </div>
          <div className="relative w-full py-6 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 flex scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-sky-400/80">
            <div className="min-w-[48rem]"></div>
            {isLoaded ? (
              projects.map((item: Product, i: React.Key | null | undefined) => (
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
            <div className="min-w-[48rem]"></div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectSection;
