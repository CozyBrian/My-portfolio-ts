import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import useMouseOverCallback from "../../hooks/useMouseOverCallback";
import { useApiContext } from "../../services/api.context";
import Img from "../utils/Img";

const ProjectOverlay = () => {
  const { isSelected: item, closeOverlay } = useApiContext();
  const [fullImage, setFullImage] = useState(false);
  const CardRef = useRef(null);
  const [click, setClick] = useState(1);

  useMouseOverCallback(CardRef, () => {
    setClick(click + 1);
    console.log("clicked");
    if (click > 1) {
      closeOverlay();
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed w-screen h-screen flex justify-center items-center bg-black/30 z-40"
    >
      <motion.div
        ref={CardRef}
        id="detail-project-card"
        className="w-full md:w-[1000px] m-4 h-[79%] sm:h-4/5 flex overflow-clip flex-col bg-slate-800 rounded-xl"
      >
        <motion.div
          initial={{ height: "40%" }}
          animate={{ height: fullImage ? "200%" : "40%" }}
          transition={{ stiffness: 30 }}
          className="w-full bg-slate-600 overflow-clip flex justify-center items-center"
          onClick={() => setFullImage(!fullImage)}
        >
          <Img
            className="w-full h-full object-contain"
            src={item?.image}
            alt={item?.title}
          />
        </motion.div>
        <motion.div className="h-3/5 w-full flex overflow-y-scroll flex-col p-8 text-slate-100 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-sky-400/80">
          <p className="text-3xl">{item?.title}</p>
          <p className="text-lg my-2">{item?.disc}</p>
          {item?.tags && (
            <>
              <p className="text-md my-2 italic">Built with:</p>
              <div className="flex flex-row gap-2 flex-wrap">
                {item?.tags.map((tag) => (
                  <div className="bg-slate-600 p-1 px-3 rounded-full">
                    {tag}
                  </div>
                ))}
              </div>
            </>
          )}
          <div className="flex flex-row flex-wrap gap-4 my-8">
            <a href={item?.link} target="_blank" rel="noreferrer">
              <button
                type="button"
                onClick={() => {}}
                className="flex items-center justify-center min-w-[95px] px-2 py-2 font-semibold rounded-md hover:bg-slate-600 bg-slate-500 "
              >
                View Live
              </button>
            </a>
            <a href={item?.link} target="_blank" rel="noreferrer">
              <button
                type="button"
                onClick={() => {}}
                className="flex items-center justify-center min-w-[95px] px-2 py-2 font-semibold rounded-md hover:bg-slate-600 bg-slate-500 "
              >
                GitHub
              </button>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectOverlay;
