import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./project-card";

import { useApiContext } from "../../services/api.context";

const ProjectSection = () => {
  const { projects, isLoaded, setItem } = useApiContext();

  return (
    <>
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
            <div className="container lg:px-20">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 duration-150">
                {isLoaded ? (
                  projects.map((item) => (
                    <div className="flex justify-center" key={item.id}>
                      <ProjectCard item={item} onClick={setItem} />
                    </div>
                  ))
                ) : (
                  <h3>Looks Like we had a problem. Try Refreshing the page</h3>
                )}
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default ProjectSection;
