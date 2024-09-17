import React from "react";
import noiseBg from "../../assets/imgs/noise-bg.png";

const ExperienceCard = ({
  startDate,
  endDate,
  position,
  companyName,
  workDone,
  techStack,
  index,
}) => {
  return (
    <div
      className={`w-full max-w-5xl ${
        // index === 0 ? "bg-[var(--black)]" : "bg-[hsl(205,87%,30%)]"
        index === 0 ? "bg-[#0d0d0d]" : "bg-[hsl(205,87%,30%)]"
      }  p-5 sm:p-8 rounded-lg mx-auto story-card delay-200 translate-x-2 translate-y-20 relative overflow-hidden`}
      style={{
        transition: "transform 0.5s, opacity 0.7s ease",
      }}
    >
      <div
        className="w-full h-full absolute z-0 opacity-[0.018] top-0 left-0"
        style={{ background: `url(${noiseBg})` }}
      ></div>
      <div
        className="grid gap-4 sm:gap-8 lg:gap-12 employment-details-container"
        style={{ gridTemplateColumns: "minmax(max-content, 220px) 1fr" }}
      >
        <div className="flex flex-col sm:flex-row lg:block gap-4 md:gap-6 lg:gap-8">
          <h3 className="font-medium opacity-70  text-sm md:text-[1.1rem] flex items-center gap-3">
            <i>{startDate}</i>{" "}
            <span className="w-8 h-[2px] rounded-lg bg-white block"></span>{" "}
            <i>{endDate}</i>
          </h3>
          <h2 className="text-2xl -mt-1 font-medium block lg:hidden">
            {position}
          </h2>
        </div>

        <div className="flex flex-col gap-2 md:gap-3">
          <h2 className="text-2xl -mt-1 font-medium hidden lg:block">
            {position}
          </h2>
          <p className="text-sm">
            <i>{companyName}</i>
          </p>
          <ul className="flex flex-col gap-4 list-disc mt-2 ml-3">
            {workDone.map((work) => (
              <li className="text-xs max-w-xl leading-6 sm:leading-5 pr-0 pl-4">
                {work}
              </li>
            ))}
          </ul>
          <p className="mt-2 sm:mt-1">
            <span className="italic font-semibold text-sm">Tech Stack: </span>
            {techStack.map((stack, i) => (
              <span className="italic text-xs font-medium">
                {i !== 0 && ", "}
                {stack}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
