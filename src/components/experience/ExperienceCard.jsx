import React from "react";

const ExperienceCard = ({
  startDate,
  endDate,
  position,
  companyName,
  workDone,
  index,
}) => {
  return (
    <div
      className={`w-full max-w-5xl ${
        index === 0 ? "bg-[var(--black)]" : "bg-[#a0001c]"
        // "bg-[var(--base-color-dimmed)]"
      } p-8 rounded-3xl mx-auto story-card delay-200 translate-x-2 translate-y-20`}
      style={{
        transition: "transform 0.5s, opacity 0.7s ease",
      }}
    >
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
              <li className="text-xs max-w-xl leading-5 pr-0 pl-4">{work}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
