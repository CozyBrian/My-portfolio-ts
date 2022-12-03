import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMouseOverCallback from "../../hooks/useMouseOverCallback";
import { useApiContext } from "../../services/api.context";
import Img from "../utils/Img";
import { Product } from "../../@types";

const ProjectOverlay = () => {
  const { isSelected: item, closeOverlay } = useApiContext();
  const CardRef = useRef(null);
  const [click, setClick] = useState(1);

  const close = require("../../assets/close.png");

  useMouseOverCallback(CardRef, () => {
    setClick(click + 1);
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
        className="relative w-full md:w-[1000px] m-4 h-[79%] sm:h-4/5 flex overflow-clip flex-col bg-slate-800 rounded-xl"
      >
        <div
          onClick={() => closeOverlay()}
          className="absolute flex right-2 top-2 w-8 h-8 p-2 z-50"
        >
          <img className="w-full h-full" src={close} alt="close" />
        </div>
        <ImageSection item={item} />
        <motion.div className="h-3/5 w-full flex overflow-y-scroll flex-col p-8 text-slate-100 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-sky-400/80">
          <p className="text-3xl">{item?.title}</p>
          <p className="text-lg my-2">{item?.disc}</p>
          {item?.tags && (
            <>
              <p className="text-md my-2 italic">Built with:</p>
              <div className="flex flex-row gap-2 flex-wrap">
                {item?.tags.map((tag, k) => (
                  <div key={k} className="bg-slate-600 p-1 px-3 rounded-full">
                    {tag}
                  </div>
                ))}
              </div>
            </>
          )}
          <div className="flex flex-row flex-wrap gap-4 my-8">
            {item?.type === "web" && (
              <a href={item?.live} target="_blank" rel="noreferrer">
                <button
                  type="button"
                  onClick={() => {}}
                  className="flex items-center justify-center min-w-[95px] px-2 py-2 font-semibold rounded-md hover:bg-slate-600 bg-slate-500 duration-150"
                >
                  View Live
                </button>
              </a>
            )}
            <a href={item?.link} target="_blank" rel="noreferrer">
              <button
                type="button"
                onClick={() => {}}
                className="flex items-center justify-center min-w-[95px] px-2 py-2 font-semibold rounded-md hover:bg-slate-600 bg-slate-500 duration-150"
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

const ImageSection = ({ item }: { item: Product | null }) => {
  const [fullImage, setFullImage] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const handleMove = (direction: "left" | "right") => {
    if (direction === "left") {
      if (activeImage === 0) {
        setActiveImage(item?.image.length! - 1);
      } else {
        setActiveImage(activeImage - 1);
      }
    } else {
      if (activeImage === item?.image.length! - 1) {
        setActiveImage(0);
      } else {
        setActiveImage(activeImage + 1);
      }
    }
  };

  useEffect(() => {
    if (item?.image.length! > 1) {
      const interval = setInterval(() => {
        handleMove("right");
      }, 10000);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeImage]);

  return (
    <motion.div
      initial={{ height: "40%" }}
      animate={{ height: fullImage ? "200%" : "40%" }}
      transition={{ stiffness: 30 }}
      className="relative w-full max-h-[75%] bg-slate-600 overflow-clip flex flex-col justify-center items-center rounded-t-xl"
    >
      {item?.image.length! > 1 && (
        <div>
          <div
            onClick={() => handleMove("left")}
            className="absolute flex items-center justify-center left-0 top-0 h-full w-1/5 opacity-20 hover:opacity-100 hover:bg-slate-800/50 duration-150"
          >
            <div className="w-16 h-16">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z" />
              </svg>
            </div>
          </div>
          <div
            onClick={() => handleMove("right")}
            className="absolute flex items-center justify-center right-0 top-0 h-full w-1/5 opacity-20 hover:opacity-100 hover:bg-slate-800/50 duration-150"
          >
            <div className="w-16 h-16">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z" />
              </svg>
            </div>
          </div>
        </div>
      )}
      <div className="w-full h-full" onClick={() => setFullImage(!fullImage)}>
        <AnimatePresence mode="wait">
          {item?.image.map((image, k) => (
            <Img
              key={`image-${k}`}
              className={`w-full h-full object-contain duration-150 ${
                k === activeImage ? "" : "hidden"
              } rounded-t-xl duration-150`}
              src={image}
              alt={item?.title}
            />
          ))}
        </AnimatePresence>
      </div>
      {item?.image.length! > 1 && (
        <div className="absolute flex gap-2 bottom-2">
          {item?.image.map((_, k) => (
            <span
              key={`dot-${k}`}
              onClick={() => setActiveImage(k)}
              className={`h-3 w-3 rounded-full ${
                k === activeImage ? "bg-sky-500" : "bg-sky-500/30"
              } duration-150`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ProjectOverlay;
