import React from "react";

const ProjectCard = ({
  name,
  description,
  imageUrl,
  sourceCodeUrl,
  liveDemoUrl,
  index,
  stackUsed,
}) => {
  const isOdd = index % 2 === 1;
  return (
    <div className="grid grid-cols-12 gap-[10px] min-h-[400px] items-center">
      <div
        className={`${
          isOdd ? "md:col-start-6 md:col-end-13" : "md:col-start-1 md:col-end-8"
        } row-span-full h-full md:h-[80%] rounded-lg overflow-hidden col-start-1 col-end-13`}
      >
        <div className="h-full w-full relative cursor-pointer">
          <a
            className="block w-full h-full before:content-[''] before:block before:absolute before:w-full before:h-full before:bg-[var(--card-background)] before:opacity-80 md:before:opacity-60 hover:before:opacity-0 before:transition-opacity before:duration-300"
            href={liveDemoUrl}
            target="_blank"
          >
            <img src={imageUrl} className="w-full h-full object-cover" />
          </a>
        </div>
      </div>
      <div
        className={`${
          isOdd
            ? "md:col-start-1 md:col-end-7 md:items-start"
            : "md:col-start-7 md:col-end-13 md:items-end"
        } flex flex-col gap-3 h-full row-span-full z-10 col-start-1 col-end-13 p-8 md:p-0 items-start justify-center `}
        onClick={(e) => {
          window.innerWidth < 768 && window.open(liveDemoUrl, "_blank");
        }}
      >
        <p className="text-sm text-[var(--base-color)]">Featured Project</p>
        <h2 className="font-semibold opacity-90 text-[1.3rem] md:text-2xl">
          {name}
        </h2>
        <div className="p-0 md:p-5 bg-none md:bg-[var(--card-background)] rounded-lg my-5 md:my-4">
          <p
            className={`leading-7 sm:leading-7 text-xs sm:text-sm ${
              isOdd ? "md:text-left" : "md:text-right"
            } text-left`}
          >
            {description}
          </p>
        </div>
        <div className={`flex gap-2 flex-wrap sm:flex-nowrap items-baseline`}>
          {/* p-2 px-4 rounded-2xl bg-[var(--card-background-dimmed)] md:bg-[var(--black)] */}
          {stackUsed.map((stack) => (
            <p className="text-xs text-[var(--white)] whitespace-nowrap opacity-80 ">
              {stack}
            </p>
          ))}
        </div>
        <div className="flex gap-4 mt-4">
          <a
            href={sourceCodeUrl}
            onClick={(e) => {
              e.stopPropagation();
            }}
            target="_blank"
          >
            <i className="fi fi-brands-github text-2xl"></i>
          </a>
          <a
            href={liveDemoUrl}
            onClick={(e) => {
              e.stopPropagation();
            }}
            target="_blank"
          >
            <i className="fi fi-rr-arrow-up-right-from-square text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
