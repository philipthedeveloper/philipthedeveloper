import React from "react";
import styled from "styled-components";
import all from "../constants/allLanguageImg";
import LangCard from "./LangCard";

const Skills = () => {
  return (
    <div>
      <div className="header">
        <p id="service">SKILLS</p>
        <p id="what_i_do">Area Of Expertise</p>
      </div>
      <LanguageContainer>
        {all.map((item) => (
          <LangCard data={item} key={item.name} />
        ))}
      </LanguageContainer>
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

export default Skills;
