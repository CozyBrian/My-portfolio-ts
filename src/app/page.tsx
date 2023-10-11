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
        </div>
      </div>
    </>
  );
}
