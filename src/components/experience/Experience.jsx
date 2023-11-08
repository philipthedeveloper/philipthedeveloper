import React from "react";
import employmentHistory from "../../constants/employment-data";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="w-full" id="work-experience">
      <div>
        <p className="text-[var(--base-color)] text-center">WORK EXPERIENCE</p>
        <p className="font-bold md:text-[3rem] mb-8 text-center text-[2.3rem]">
          Employment History
        </p>
        <div>
          <div className="flex flex-col gap-16">
            {employmentHistory.map((employment, i) => (
              <ExperienceCard {...employment} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
