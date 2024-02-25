import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

type BentoMainProps = {
  title: string;
  description: string;
};
const BentoMain = ({ title, description }: BentoMainProps) => {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    <motion.div className="relative flex-1 p-2">
      <AnimatePresence>
        {!isReadMore ? (
          <motion.div
            key="bento-main"
            layoutId="bento-main"
            transition={{
              duration: 0.1,
              type: false,
            }}
            onClick={() => setIsReadMore((prev) => !prev)}
            className={classNames(
              "flex-1 h-full flex flex-col gap-4 bg-tesla-700/70 rounded-3xl p-8 cursor-pointer",
              "outline outline-1 outline-transparent hover:outline-tesla-600 duration-200 z-10",
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
                "md:h-24 md:line-clamp-4",
              )}
            >
              {description}
            </motion.p>
          </motion.div>
        ) : (
          <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <motion.div
              key="bento-main"
              layoutId="bento-main"
              initial={{ scale: 1.05 }}
              exit={{ scale: 1 }}
              transition={{
                duration: 0.1,
                type: false,
              }}
              onClick={() => setIsReadMore((prev) => !prev)}
              className={classNames(
                "flex-1 w-full h-full flex flex-col gap-4 bg-tesla-700/70 rounded-3xl p-8 cursor-pointer",
                "outline outline-1 outline-transparent hover:outline-tesla-600 duration-200 z-10",
                // isReadMore && "min-h-[204px] relative md:absolute",
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BentoMain;
