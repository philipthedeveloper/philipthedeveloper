import React from "react";
import styled from "styled-components";

const SkillCard = ({ data: { type, list } }) => {
  return (
    <SkillComp>
      <SkillHeader>
        <IllustrationCont>
          <Circle />
          <Pointer />
        </IllustrationCont>
        <Heading>{type}</Heading>
      </SkillHeader>
      <SkillBody>
        {list.map((item) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0.5rem 0",
            }}
          >
            <Circle width={10} />
            <p
              style={{
                marginLeft: "10px",
                fontSize: "0.75rem",
                fontWeight: 300,
              }}
            >
              {item}
            </p>
          </div>
        ))}
      </SkillBody>
    </SkillComp>
  );
};

const SkillComp = styled.div`
  padding: 1rem;
  background-color: var(--main-background);
  box-shadow: 0px 0px 10px var(--black);
  border-radius: 0.5rem;
  cursor: pointer;
  flex-basis: 30%;
  flex-grow: 1;
  //   opacity: 0;
  //   transform: scale(0.7);
  //   transition: transform 1s, opacity 1s ease;
`;

const SkillHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0;
`;
const IllustrationCont = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
`;

const Circle = styled.span`
  width: ${(props) => (props.width ? props.width : 25)}px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: var(--base-color);
  display: block;
`;

const Pointer = styled.span`
  width: 15px;
  height: 2px;
  border-radius: 5px;
  background-color: var(--base-color);
  display: block;
  transform: translateX(-5px);
`;
// const DownwardPointer = styled.span`
//   border-radius: 5px;
//   background-color: var(--base-color);
//   width: 2px;
//   height: 100%;
// `;
const Heading = styled.h3`
  font-weight: 500;
  font-size: 1.2rem;
  white-space: nowrap;
  margin-left: 0.4rem;

  @media (max-width: 1200px) {
    font-size: 1rem;
  }
  @media (max-width: 1100px) {
    font-size: 0.9rem;
  }
  @media (max-width: 720px) {
    font-size: 0.85rem;
  }
`;

const SkillBody = styled.div`
  padding: 1rem;
  margin-left: 1.5rem;
  border-left: 2px solid var(--base-color);
`;
export default SkillCard;
