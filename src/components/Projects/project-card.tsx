import React, { useState } from "react";
import { motion } from "framer-motion";
import useDeviceDetect from "../../hooks/useMobileDetect";
import { Product } from "../../@types";
import Img from "../utils/Img";

type Props = {
  item: Product;
  onClick: (item: Product) => void;
};

const ProjectCard = ({ item, onClick }: Props) => {
  const [isHover, setIsHover] = useState(false);
  const { isMobile } = useDeviceDetect();

  const handleMobileTap = () => {
    if (isMobile) {
      setIsHover(!isHover);
    }
  };

  return (
    <motion.div
      layoutId={`${item?.title}-card`}
      onClick={() => handleMobileTap()}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      className="relative h-56 w-[22rem] sm:w-full overflow-hidden shadow-sm bg-gray-900 border-solid border border-sky-600 hover:shadow-sky-400 text-gray-100 duration-500"
    >
      <motion.div
        initial={false}
        animate={{ y: isHover ? "0%" : "100%" }}
        transition={{ stiffness: 300, duration: 0.1 }}
        className="absolute flex justify-center items-center flex-col w-full h-56 bg-sky-700/50"
      >
        <p className="text-xl my-2">{item.title}</p>
        <button
          type="button"
          onClick={() => onClick(item)}
          className="flex items-center justify-center px-3 py-2 font-semibold rounded-sm hover:bg-sky-600 bg-sky-500 duration-150"
        >
          View More
        </button>
      </motion.div>
      <Img
        src={item.image}
        alt={item.title}
        className="h-full object-cover object-center w-full bg-gray-500"
      />
    </motion.div>
  );
};

export default ProjectCard;
