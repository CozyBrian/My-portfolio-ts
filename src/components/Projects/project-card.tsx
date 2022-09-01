import React from "react";

type Product = {
  image: string;
  title: string;
  disc: string;
  link: string;
  type: string;
};

const ProjectCard = ({ title, disc, image, link, type }: Product) => {
  return (
    <div className="max-w-sm m-4 rounded-xl shadow-md bg-gray-900 border-solid border border-sky-600 hover:shadow-sky-400 text-gray-100 mx-3 hover:scale-105 duration-500">
      <img
        src={image}
        alt=""
        className="object-cover hover:object-contain duration-300 object-center w-full rounded-t-xl h-72  bg-gray-500"
      />
      <div className="flex flex-col justify-between p-4 space-y-8">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
          <p className=" text-gray-100">{disc}</p>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <button
            type="button"
            className="flex items-center justify-center p-1 font-semibold rounded-sm w-28 hover:bg-sky-600 bg-sky-500  text-gray-900"
          >
            Visit Github
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
