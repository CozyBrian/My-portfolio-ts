import classNames from "classnames";
import { motion } from "framer-motion";
import React, { useState } from "react";

type BentoMainProps = {
  title: string;
  description: string;
};
const BentoMain = ({ title, description }: BentoMainProps) => {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: isReadMore ? 1.05 : 1 }}
      exit={{ scale: 1 }}
      transition={{
        duration: 0.1,
      }}
      onClick={() => setIsReadMore((prev) => !prev)}
      className={classNames(
        "flex-1 flex flex-col gap-4 bg-tesla-700/70 m-2 rounded-3xl p-8 cursor-pointer",
        "outline outline-1 outline-transparent hover:outline-tesla-600 duration-200 z-10",
        isReadMore && "min-h-[204px] relative md:absolute",
      )}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="text-[#d6e1ee] font-medium text-xl"
      >
        {title}
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={classNames(
          "text-tesla-text md:w-[360px]",
          isReadMore ? "" : "md:h-24 line-clamp-4",
        )}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default BentoMain;
