import React from "react";
import downArrow from "../../assets/imgs/down-arrow.svg";
import styled from "styled-components";

const NewIntroSection = () => {
  return (
    <div
      className="mx-auto border-b-[2px] border-[var(--black)] w-[85%] max-w-[1100px]"
      style={{ height: "calc(100dvh - 101px)" }}
    >
      <GridBox className="w-full h-full">
        <div className="flex flex-col items-center gap-2 md:gap-5">
          <p
            id="intro_jobrole"
            className="self-start flex flex-col gap-3 text-3xl md:text-5xl lg:text-6xl font-bold uppercase"
          >
            <span className="font-bold text-[var(--base-color)]">Philip</span>
            <span className="ml-16 font-bold">Owolabi</span>
          </p>
          <p className="py-3 md:py-8 intro_description">
            <span className="fira-code font-normal">
              I'm a software developer with experience in{" "}
              <Stylish>JavaScript</Stylish>, <Stylish>TypeScript</Stylish>, and{" "}
              <Stylish>Python</Stylish>. I'm also exploring{" "}
              <Stylish>AI</Stylish> and <Stylish>machine learning</Stylish> to
              enhance my skills and stay up-to-date with new technologies.
            </span>
          </p>
          <a
            className="w-auto h-auto mt-8 md:mt-0 relative animate-bounce inline-block"
            href="#journey"
          >
            <img src={downArrow} className="w-12 h-12 blur-[4px] absolute" />
            <img src={downArrow} className="w-12 h-12" />
          </a>
        </div>
      </GridBox>
    </div>
  );
};

const GridBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;

  @media screen and (max-width: 600px) {
    justify-content: center;
    align-items: flex-start;
  }

  .intro_description {
    font-size: 0.8rem;
    font-weight: lighter;
    line-height: 1.7rem;
    margin: 0.5rem 0;
    overflow: hidden;
    max-width: 500px;
  }

  .intro_description > span {
    display: block;
    transform: translateY(-125%);
    animation: slide-from-top 0.4s ease 0.6s 1 normal forwards;
  }

  @keyframes slide-from-top {
    0% {
      opacity: 0;
      transform: translateY(-110%);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
`;

const Stylish = styled.span`
  font-style: italic;
  font-weight: bold;
  color: var(--base-color);
  font-weight: 700;
  white-space: nowrap;
`;

export default NewIntroSection;
