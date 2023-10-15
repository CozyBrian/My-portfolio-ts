"use client";
import { TestImage } from "@/assets/images";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";
import PortfoliaData from "../../data/my-portfolio-data.json";
import { IProduct } from "@/types";

const MotionImage = motion(Image);

export default function ProjectsSection() {
  const [isFull, setIsFull] = useState(false);
  const [selectedProjectID, setSelectedProjectID] = useState(
    PortfoliaData.Projects["5I7Z8hM9M7JhMKuv"].id,
  );

  const projects: IProduct[] = [];

  Object.entries(PortfoliaData.Projects).forEach(([key, value], index) => {
    projects.push(value as IProduct);
  });

  return (
    <section className="bg-tesla-800 min-h-[680px] mb-32 w-full flex flex-row justify-center items-center">
      <div className="w-full md:w-[880px] flex flex-col gap-10">
        <h2 className="px-1 text-tesla-text text-3xl font-medium tracking-wide">
          PROJECTS
        </h2>
        <AnimatePresence mode="wait">
          {projects.map(
            (project) =>
              project.id === selectedProjectID && (
                <motion.div
                  key={project.id}
                  className="project-bento w-full h-[440px]"
                >
                  <div className="bento-image flex h-[440px] aspect-square rounded-3xl">
                    <div className="flex-1 bg-tesla-700/70 m-2 rounded-3xl">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-full h-full flex items-center justify-center p-8"
                      >
                        <AnimatePresence>
                          {isFull ? (
                            <motion.div
                              transition={{
                                duration: 0.3,
                              }}
                              className="fixed left-0 top-0 w-screen h-screen bg-black/40 flex items-center justify-center p-24 z-40"
                            >
                              <MotionImage
                                layoutId="test-image"
                                transition={{
                                  duration: 0.3,
                                }}
                                whileHover={{
                                  scale: 1,
                                }}
                                onClick={() => setIsFull(!isFull)}
                                src={project.image[0]}
                                width={project.type === "web" ? 1200 : 330}
                                height={760}
                                className={classNames(
                                  "object-contain",
                                  project.type === "web" ? "w-full" : "h-full",
                                )}
                                alt="Test Image"
                              />
                            </motion.div>
                          ) : (
                            <MotionImage
                              layoutId="test-image"
                              onClick={() => setIsFull(!isFull)}
                              whileHover={{
                                scale: 1.05,
                              }}
                              transition={{
                                duration: 0.3,
                              }}
                              src={project.image[0]}
                              width={project.type === "web" ? 360 : 180}
                              height={230}
                              className={classNames(
                                "object-contain",
                                project.type === "web" ? "w-full" : "h-full",
                              )}
                              alt="Test Image"
                            />
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>
                  </div>
                  <div className="flex bento-main">
                    <div className="flex-1 flex flex-col gap-4 bg-tesla-700/70 m-2 rounded-3xl p-8">
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-[#d6e1ee] font-medium text-xl"
                      >
                        {project.title}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-tesla-text"
                      >
                        {project.disc}
                      </motion.p>
                    </div>
                  </div>
                  <div className="flex bento-sub">
                    <div className="flex-1 flex flex-col justify-between bg-tesla-700/70 m-2 rounded-3xl p-8">
                      <div className="flex flex-row gap-2 gap-y-3 flex-wrap items-center text-sm">
                        {project.tags?.map((tag) => (
                          <motion.div
                            key={tag}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-tesla-600 py-1 px-3 text-tesla-text rounded-full"
                          >
                            {tag}
                          </motion.div>
                        ))}
                      </div>
                      <div className="w-full flex flex-row justify-end gap-4">
                        <button className="bg-[#26568a] h-11 w-11 outline outline-1 outline-transparent hover:outline-[#6e97c5] active:outline-[#c1d3e6] text-tesla-text font-medium p-2.5 rounded-lg duration-150">
                          <svg viewBox="0 0 128 128">
                            <g fill="#c1d3e6">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                              ></path>
                              <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                            </g>
                          </svg>
                        </button>
                        <button className="bg-[#26568a] h-11 outline outline-1 outline-transparent hover:outline-[#6e97c5] active:outline-[#c1d3e6] text-tesla-text font-medium px-4 py-2 rounded-lg duration-200">
                          View Live
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ),
          )}
        </AnimatePresence>
        <div className="flex flex-row items-center gap-3 py-1 px-6 w-full md:w-[880px] overflow-x-scroll scrollbar-none fade-x">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProjectID(project.id)}
              className={classNames(
                "flex items-center justify-center h-11 px-6 bg-tesla-500/10 rounded-md outline outline-1 duration-150",
                selectedProjectID === project.id
                  ? "text-tesla-400 outline-tesla-600"
                  : "text-tesla-500 outline-transparent",
              )}
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
