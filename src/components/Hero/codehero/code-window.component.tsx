import React, { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import WindowNav from "./window-nav";

const CodeWindow = () => {
  const [profileLoaded, setProfileLoaded] = useState(false);
  const profile =
    "https://firebasestorage.googleapis.com/v0/b/my-portfolio-35b84.appspot.com/o/Profile.jpg?alt=media&token=3c8c8853-722a-4d4c-9d59-f048b6f7e3ee";

  const ChangeNameColor = (timeOut: number) => {
    const NameElement = document.getElementsByClassName("typewriter");
    setTimeout(() => {
      NameElement[0].classList.add("typewriter-hover");
      NameElement[1].classList.add("typewriter-2-hover");
    }, timeOut);
  };

  const delayFactor = 0.5;
  const BaseTime = 2.1;
  return (
    <section className="rounded-xl min-h-[60vh] border-solid border-2 border-sky-400 shadow-sky-400 shadow-md text-gray-100 p-2 md:p-3">
      <WindowNav />
      <div className="container flex flex-col justify-center p-1 sm:p-6 mx-auto sm:py-10 lg:py-20 xl:py-32 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 items-center lg:items-start text-center rounded-sm lg:max-w-md xl:max-w-4xl lg:text-left">
          <Typewriter
            options={{
              wrapperClassName: "text-4xl md:text-7xl",
              cursorClassName: "text-4xl md:text-6xl Typewriter__cursor",
              autoStart: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .changeDelay(75)
                .typeString("Hello, I'm ")
                .typeString(`<span class="typewriter">Brian Newton</span>`)
                .start()
                .callFunction(() => {
                  ChangeNameColor(delayFactor * 4 * 1000);
                });
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: BaseTime + delayFactor * 2 }}
          >
            <p className="text-gray-300 pt-2 pb-4 text-xl font-['Nunito_Sans']">
              I am a <span className="typewriter">full-stack developer</span>{" "}
              with a love for creating mobile and web applications that enhance
              the human experience. My passion lies in bridging the gap between
              ideas and implementation with code.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: BaseTime + delayFactor * 3 }}
          >
            <a href="#contact" rel="noopener noreferrer">
              <button
                type="button"
                className="flex items-center font-['Nunito_Sans'] sm:self-center justify-center p-2 duration-200 border border-sky-500 text-2xl font-semibold rounded-sm w-40 hover:bg-sky-500 text-sky-500 hover:text-gray-900"
              >
                Hire Me
              </button>
            </a>
          </motion.div>
        </div>
        <div className="flex items-center justify-center h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: profileLoaded ? 1 : 0 }}
            transition={{ duration: 1, delay: BaseTime + delayFactor }}
          >
            <img
              onLoad={() => setProfileLoaded(true)}
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
