import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import WindowNav from "./window-nav";

const CodeWindow = () => {
  const profile =
    "https://firebasestorage.googleapis.com/v0/b/my-portfolio-35b84.appspot.com/o/Profile.jpg?alt=media&token=3c8c8853-722a-4d4c-9d59-f048b6f7e3ee";

  return (
    <section className="rounded-xl min-h-[80vh]  bg-gray-800  text-gray-100 p-3">
      <WindowNav />
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 xl:py-32 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-4xl lg:text-left">
          <TypeWriterEffect
            textStyle={{ fontSize: "70px" }}
            startDelay={100}
            cursorColor="white"
            text="Hello, I'm Brian Newton"
            typeSpeed={100}
          />
          <p className="text-gray-300 text-xl">
            I’m a Full-stack software developer based in Ghana. I love to build
            mobile and web applications that improve the lives of people all
            around the world and I’m very passionate about connecting the dots
            between ideas and reality with code.
          </p>
        </div>
        <div className="flex items-center justify-center h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={profile}
            alt=""
            className="object-cover h-72 sm:h-80 lg:h-96 lg:w-96 xl:h-112 2xl:h-128 rounded-full p-5"
          />
        </div>
      </div>
    </section>
  );
};

export default CodeWindow;
