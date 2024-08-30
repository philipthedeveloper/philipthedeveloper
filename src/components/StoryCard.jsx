import React from "react";
import styled from "styled-components";

const StoryCard = ({ gridCol, gridRow, to, id, content, icon }) => {
  return (
    <div
      style={{
        gridColumn: gridCol,
        gridRow,
        transition: "transform 0.5s, opacity 0.7s ease",
      }}
      id={id}
      className="story-card opacity-0 translate-y-20 max-w-lg mx-auto md:max-w-none md:mx-0 delay-200"
    >
      <StoryCardGrid className="grid gap-6">
        <a
          className="rounded-full w-[40px] md:w-[70px] h-[40px] md:h-[70px] bg-[var(--base-color)] sm:flex justify-center items-center hidden flex-1"
          href={to}
        >
          {icon === "next" ? (
            <i className="fi fi-sr-forward flex text-white text-sm md:text-3xl rotate-45"></i>
          ) : (
            <i className="fi fi-sr-play flex text-white text-xm md:text-3xl"></i>
          )}
        </a>
        <p className="leading-[180%] font-light text-sm">{content}</p>
      </StoryCardGrid>
    </div>
  );
};

const StoryCardGrid = styled.div`
  grid-template-columns: 40px 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: 70px 1fr;
  }
`;

export default StoryCard;
