import React from "react";

const StoryCard = ({ gridCol, gridRow, to, id, content, icon }) => {
  return (
    <div
      style={{
        gridColumn: gridCol,
        gridRow,
        transition: "transform 0.7s, opacity 1s ease",
      }}
      id={id}
      className={"story-card opacity-0 translate-y-20"}
    >
      <div className="flex gap-6">
        <a
          className="rounded-full w-[70px] h-[70px] aspect-square bg-[var(--base-color)] sm:flex justify-center items-center hidden "
          href={to}
        >
          {icon === "next" ? (
            <i className="fi fi-sr-forward flex text-white text-3xl rotate-45"></i>
          ) : (
            <i className="fi fi-sr-play flex text-white text-3xl"></i>
          )}
        </a>
        <p className="leading-[180%] font-light text-sm">{content}</p>
      </div>
    </div>
  );
};

export default StoryCard;
