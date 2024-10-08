import React, { useEffect } from "react";
// import ProjectCard from "./ProjectCard";
import "./MyProject.css";
import { projects } from "../data";
import { checkInViewPort } from "../utils/index.util";
import ProjectCard from "./project/ProjectCard";

function MyProject() {
  useEffect(() => {
    const serviceContainer = document.querySelectorAll(
      ".project_card_container"
    );
    window.addEventListener("scroll", (e) => {
      serviceContainer.forEach((image) => {
        let inViewPort = checkInViewPort(image);
        inViewPort ? image.classList.add("opacityToggler") : void 0;
        // : image.classList.remove("opacityToggler");
      });
    });
  }, []);

  return (
    <div className="relative z-10">
      <div className="project_header">
        <p className="text-[var(--base-color)] text-center">PROJECTS</p>
        <p id="recent_works">
          Some Things I've <span>built</span>
        </p>
      </div>
      <div className="my-16 flex flex-col md:grid grid-cols-2 gap-6 md:gap-8 max-w-5xl w-full md:w-[90%] mx-auto">
        {projects.map((project, i) => (
          <ProjectCard {...project} index={i} />
        ))}
      </div>

      {/* <div className="projects_container"> */}
      {/* <span id="left_arrow">
          <i class="fa-solid fa-angle-right"></i>
        </span> */}
      {/* {projects.map((project, i) => {
          return (
            <ProjectCard info={{ ...project, index: i }} key={project.name} />
          );
        })} */}
      {/* <span id="right_arrow">
          <i class="fa-solid fa-angle-left"></i>
        </span> */}
      {/* </div> */}

      {/* <div className="prev_next_btn_container">
        <button id="prev">
          <span>Prev</span>
        </button>
        <button id="next">
          <span>Next</span>
        </button>
      </div> */}
      <div className="all_works">
        <a
          href="https://github.com/philipthedeveloper?tab=repositories"
          id="view_all_works"
          target={"_blank"}
          rel="noreferrer"
        >
          View All Works<i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}

export default MyProject;
