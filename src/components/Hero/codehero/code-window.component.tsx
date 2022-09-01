import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import WindowNav from "./window-nav";

const CodeWindow = () => {
  const profile =
    "https://firebasestorage.googleapis.com/v0/b/my-portfolio-35b84.appspot.com/o/Profile.jpg?alt=media&token=3c8c8853-722a-4d4c-9d59-f048b6f7e3ee";

  return (
    <section className="rounded-xl min-h-[80vh] border-solid border-2 border-sky-400 shadow-sky-400 shadow-md text-gray-100 p-3">
      <WindowNav />
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 xl:py-32 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-4xl lg:text-left">
          <Typewriter
            options={{
              wrapperClassName: "text-7xl",
              cursorClassName: "text-6xl Typewriter__cursor",
              autoStart: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .changeDelay(75)
                .typeString("Hello, I'm Brian Newton")
                .start();
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.75 }}
          >
            <p className="text-gray-300 pt-2 pb-4 text-xl font-['Nunito_Sans']">
              I’m a Full-stack software developer based in Ghana. I love to
              build mobile and web applications that improve the lives of people
              all around the world and I’m very passionate about connecting the
              dots between ideas and reality with code.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.9 }}
          >
            <a href="#contact" rel="noopener noreferrer">
              <button
                type="button"
                className="flex items-center font-['Nunito_Sans'] justify-center p-2 duration-200 border border-sky-500 text-2xl font-semibold rounded-sm w-40 hover:bg-sky-500 text-sky-500 hover:text-gray-900"
              >
                Hire Me
              </button>
            </a>
          </motion.div>
        </div>
        <div className="flex items-center justify-center h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img
              src={profile}
              alt=""
              className="object-cover h-72 sm:h-80 lg:h-96 lg:w-96 xl:h-112 2xl:h-128 rounded-full p-5"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CodeWindow;
