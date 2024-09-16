import React, { useEffect } from "react";
import myStory from "../constants/my-story-data";
import StoryCard from "./StoryCard";
import { checkInViewPort } from "../utils/index.util";

const handleWindowScroll = () => {
  const allCards = document.querySelectorAll(".story-card");
  allCards.forEach((image) => {
    let inViewPort = checkInViewPort(image);
    inViewPort ? image.classList.add("opacityToggler") : void 0;
  });
};

const MyJourney = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);

    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);
  return (
    <div className="w-full">
      <div className="">
        <p className="text-[var(--base-color)] text-center">ABOUT ME</p>
        <p className="font-bold md:text-[3rem] mb-8 text-center text-[2.3rem]">
          My Journey
        </p>
      </div>
      <div className="flex flex-col md:grid gap-20 gap-y-8 sm:gap-y-11 md:gap-y-14 lg:gap-y-24 my-8 md:my-16 lg:grid-cols-2 md:grid-cols-3 w-[90%] mx-auto">
        {myStory.map((story, i) => {
          if (i % 2 === 0) {
            return (
              <StoryCard
                gridCol={"1 / 2"}
                gridRow={`${i + 1} / ${i + 2}`}
                {...story}
              />
            );
          } else {
            return (
              <StoryCard
                gridCol={"2 / -1"}
                gridRow={`${i + 1} / ${i + 2}`}
                {...story}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default MyJourney;
