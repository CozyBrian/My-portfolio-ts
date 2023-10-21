import React from "react";
import cn from "classnames";

const WorkExperienceLoading = () => {
  const selectedTab = 1;
  return (
    <>
      <div className="w-full md:w-[10rem] pl-8 md:pl-0 shrink-0 overflow-scroll md:overflow-clip">
        <div className="h-12 md:w-[10rem] justify-center md:justify-start md:h-full flex flex-row md:flex-col shrink-0">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className={cn(
                "h-12 w-[9rem] flex-col md:flex-row relative cursor-pointer shrink-0 duration-150",
                "hover:bg-tesla-500/10 group",
                item === selectedTab && "bg-tesla-500/10",
              )}
            >
              <div
                className={cn(
                  "absolute md:w-0.5 md:h-12 w-full h-0.5 bottom-0 md:left-0",
                  "bg-[#26568a]/30",
                )}
              ></div>

              {item === selectedTab && (
                <div
                  className={cn(
                    "absolute md:w-0.5 md:h-12 w-full h-0.5 bottom-0 md: left-0",
                    "bg-tesla-300",
                  )}
                ></div>
              )}

              <div
                className={cn(
                  "w-full h-full flex items-center justify-center md:justify-start md:pl-6 duration-150",
                )}
              >
                <div
                  className={cn(
                    "w-3/4 h-4 animate-pulse",
                    "group-hover:bg-tesla-400",
                    item === selectedTab ? "bg-tesla-300" : "bg-[#26568a]",
                  )}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        key={`content-${selectedTab}`}
        className="py-2 px-2 md:px-0 flex flex-col gap-4 w-full"
      >
        <div className="max-w-[300px]">
          <div className="w-full flex flex-row items-center gap-2 text-xl mb-1">
            <div
              className={cn("w-3/5 h-5  animate-pulse", "bg-[#d6e1ee]")}
            ></div>
            <div className={cn("w-2/5 h-5 bg-[#5989bd] animate-pulse")}></div>
          </div>
          <div className="w-full flex flex-row items-center text-xs pt-1 font-mono">
            <div
              className={cn("w-[140px] h-3 bg-tesla-400 animate-pulse")}
            ></div>
          </div>
        </div>
        <ul className="flex flex-col gap-4 list-disc">
          {[1, 2, 3].map((desc, docI) => (
            <li
              key={`loading-desc-${docI}`}
              className="w-full flex flex-col gap-1.5 pl-2 text-base text-tesla-400"
            >
              <div
                className={cn("w-full h-4 bg-[#3a5d83] animate-pulse")}
              ></div>
              <div
                className={cn("w-full h-4 bg-[#3a5d83] animate-pulse")}
              ></div>
              <div
                className={cn("w-full h-4 bg-[#3a5d83] animate-pulse")}
              ></div>
            </li>
          ))}
        </ul>
        <div className="flex flex-row gap-2 gap-y-3 flex-wrap items-center text-xs">
          {[1, 2, 3, 4].map((stack) => (
            <div
              key={stack}
              className="bg-tesla-700/70 py-1 px-3 min-w-[70px] min-h-[22px] text-tesla-300 outline outline-1 outline-transparent hover:outline-tesla-300 hover:text-tesla-200 hover:bg-tesla-600/70 rounded-full duration-100"
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkExperienceLoading;
