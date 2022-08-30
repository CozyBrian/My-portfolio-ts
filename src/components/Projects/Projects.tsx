import React from 'react'
import ProjectCard from './project-card';

const ProjectSection = () => {
  return (
    <section className="py-20 dark:bg-gray-800 dark:text-gray-100 ">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="font-bold tracking-wider uppercase dark:text-sky-500">some</span>
          <h2 className="text-4xl font-bold lg:text-5xl">PROJECTS</h2>
        </div>
        <div className="flex flex-wrap items-stretch justify-center -mx-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />

        </div>
      </div>
    </section>
  )
}

export default ProjectSection;