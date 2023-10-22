"use client";
import { IProduct } from "@/types";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useLayoutEffect, useState } from "react";
const MotionImage = motion(Image);

type BentoImageProps = {
  images: string[];
  type: IProduct["type"];
};
const BentoImage = ({ images, type }: BentoImageProps) => {
  const [isFull, setIsFull] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showImageSelector, setShowImageSelector] = useState(false);

  const [selectedImage, setSelectedImage] = useState(0);

  useLayoutEffect(() => {
    setShowImage(false);
    setShowImageSelector(false);
  }, [images]);

  return (
    <div className="relative flex-1 bg-tesla-700/70 m-2 rounded-3xl">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showImage ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="w-full h-full flex flex-col items-center justify-center p-8"
      >
        <AnimatePresence>
          {isFull ? (
            <motion.div
              transition={{
                duration: 0.3,
              }}
              className="fixed left-0 top-0 w-screen h-screen bg-black/40 flex items-center justify-center p-4 md:p-24 z-40"
            >
              <MotionImage
                layoutId="test-image"
                transition={{
                  duration: 0.3,
                }}
                priority
                whileHover={{
                  scale: 1,
                }}
                onClick={() => setIsFull(!isFull)}
                src={images[selectedImage]}
                width={type === "web" ? 1784 : 330}
                height={1121}
                className={classNames(
                  "object-contain z-20",
                  type === "web" ? "w-full" : "h-full",
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
              priority
              onLoad={async () => {
                await new Promise((resolve) => setTimeout(resolve, 300));
                setShowImage(true);
                setShowImageSelector(true);
              }}
              src={images[selectedImage]}
              width={type === "web" ? 360 : 180}
              height={230}
              className={classNames(
                "object-contain z-20",
                type === "web" ? "w-full" : "h-full",
              )}
              alt="Test Image"
            />
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showImageSelector ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-0 flex flex-row items-center justify-center gap-2 h-10 w-full"
      >
        {images.map((image, index) => (
          <button
            key={image}
            onClick={async () => {
              setShowImage(false);
              await new Promise((resolve) => setTimeout(resolve, 300));
              setSelectedImage(index);
              await new Promise((resolve) => setTimeout(resolve, 300));
              setShowImage(true);
            }}
            className={classNames(
              "h-full w-10 flex items-center justify-center group",
            )}
          >
            <span
              className={classNames(
                "w-full h-2 rounded-full duration-150",
                index === selectedImage
                  ? "bg-sky-600/40"
                  : "bg-sky-600/20 group-hover:bg-sky-600/40",
              )}
            ></span>
          </button>
        ))}
      </motion.div>
      <Image
        onClick={() => setIsFull(!isFull)}
        src={images[0]}
        width={type === "web" ? 1200 : 330}
        height={760}
        priority
        className={classNames(
          "fixed -left-[calc(100vw)] -top-[calc(100vh)] -z-50 opacity-0",
        )}
        alt="Test Image"
      />
    </div>
  );
};

export default BentoImage;
