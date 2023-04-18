import React from "react";
import styled from "styled-components";
import all from "../constants/allLanguageImg";
import LangCard from "./LangCard";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div id="skills">
      <div className="header">
        <p id="service">SKILLS</p>
        <p id="what_i_do">Area Of Expertise</p>
      </div>
      {/* <LanguageContainer>
        {all.map((item) => (
          <LangCard data={item} key={item.name} />
        ))}
      </LanguageContainer> */}
      <SkillContainer>
        {[
          {
            type: "Frontend Development",
            list: [
              "Html5",
              "CSS3",
              "Sass",
              "JavaScript",
              "TypeScript",
              "Bootstrap",
              "React JS",
            ],
          },
          { type: "Mobile App Development", list: ["React Native"] },
          {
            type: "Backend Development",
            list: ["Node JS", "Express JS", "MongoDB", "Firebase"],
          },
        ].map((item, index) => (
          <SkillCard data={item} key={index} />
        ))}
      </SkillContainer>
    </div>
  );
};

const LanguageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1rem;
  // margin-horizontal: 19;
  // margin-top: 10;
  // max-width: 300;
  align-self: center;
`;

const SkillContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2.5rem;
  width: 100%;
  justify-content: space-between;
`;

export default Skills;
