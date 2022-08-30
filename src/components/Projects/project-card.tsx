import React from 'react'

const ProjectCard = () => {
  return (
    <div className="max-w-sm m-4 rounded-xl shadow-md dark:bg-gray-900 dark:text-gray-100 mx-3 hover:scale-105 duration-500">
    <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-xl h-72 dark:bg-gray-500" />
    <div className="flex flex-col justify-between p-4 space-y-8">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold tracking-wide">Donec lectus leo</h2>
        <p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
      </div>
      <button type="button" className="flex items-center justify-center p-1 font-semibold rounded-sm w-28 dark:bg-sky-500 dark:text-gray-900">Visit Github</button>
    </div>
  </div>
  )
}

export default ProjectCard;