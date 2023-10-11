import { TestImage } from "@/assets/images";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-[680px] w-[880px] flex flex-col justify-center">
        <div className="flex flex-col gap-10">
          <p className="text-4xl font-semibold text-tesla-100 leading-relaxed font-nunitoSans">
            Hello, I&apos;m{" "}
            <span className="text-cozy-celestialBlue">Brian Newton</span>,
            <br /> an earth based Full Stack Engineer pushing the boundaries of
            web and mobile experiences
          </p>
          <div>
            <button className="bg-tesla-800 h-11 hover:shadow-tesla-sm hover:-translate-y-0.5 hover:outline outline-1 active:translate-y-0.5 shadow-tesla-800 text-tesla-500 hover:text-tesla-400 font-medium px-4 py-2 rounded-lg duration-200">
              Hire Me
            </button>
          </div>
        </div>
      </div>
      <div className="bg-tesla-800 h-[680px] w-full flex flex-row justify-center items-center">
        <div className="w-[880px] h-full py-24 flex flex-row flex-wrap gap-6 ">
          <h2 className="text-tesla-100 text-3xl font-medium">Projects</h2>
          <div className="project-bento">
            <div className="bento-image flex h-[440px] aspect-square rounded-3xl">
              <div className="flex-1 bg-tesla-700/70 m-2 rounded-3xl">
                <div className="w-full h-full flex items-center justify-center p-8">
                  <Image
                    src={TestImage}
                    className="object-contain hover:scale-105 duration-300"
                    alt="Test Image"
                  />
                </div>
              </div>
            </div>
            <div className="flex bento-main">
              <div className="flex-1 flex flex-col gap-4 bg-tesla-700/70 m-2 rounded-3xl p-8">
                <p className="text-[#d6e1ee] font-medium text-xl">
                  Test Product Title
                </p>
                <p className="text-[#c1d3e6]">
                  Laborum in velit sint anim culpa. Dolor in irure minim duis
                  nulla non ipsum irure velit velit magna ipsum. Sint
                  reprehenderit aliquip excepteur Lorem consequat.
                </p>
              </div>
            </div>
            <div className="flex bento-sub">
              <div className="flex-1 flex flex-col justify-between bg-tesla-700/70 m-2 rounded-3xl p-8">
                <div className="flex flex-row gap-2 gap-y-3 flex-wrap items-center">
                  <div className="bg-tesla-600 py-1 px-3 text-[#c1d3e6] rounded-full">
                    React
                  </div>
                  <div className="bg-tesla-600 py-1 px-3 text-[#c1d3e6] rounded-full">
                    NextJS
                  </div>
                  <div className="bg-tesla-600 py-1 px-3 text-[#c1d3e6] rounded-full">
                    Tailwind
                  </div>
                  <div className="bg-tesla-600 py-1 px-3 text-[#c1d3e6] rounded-full">
                    Axios
                  </div>
                  <div className="bg-tesla-600 py-1 px-3 text-[#c1d3e6] rounded-full">
                    React-redux
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <button className="bg-[#26568a] h-11 hover:outline outline-1 outline-[#6e97c5] active:outline-[#c1d3e6] text-[#c1d3e6] font-medium px-4 py-2 rounded-lg duration-200">
                    View Live
                  </button>
                  <button className="bg-[#26568a] h-11 hover:outline outline-1 outline-[#6e97c5] active:outline-[#c1d3e6] text-[#c1d3e6] font-medium px-4 py-2 rounded-lg duration-200">
                    Visit Github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
