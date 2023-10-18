import React from "react";

const BentoGrids = () => {
  return (
    <div className="bg-tesla-800 w-full flex flex-row justify-center items-center">
      <div className="w-full md:w-[880px] h-full py-24 flex flex-row flex-wrap gap-6">
        <div className="grid auto-rows-[192px] w-full grid-cols-3 gap-4">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`row-span-1 rounded-xl  p-4 bg-tesla-700/70  ${
                i === 3 || i === 6 ? "col-span-2" : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BentoGrids;
