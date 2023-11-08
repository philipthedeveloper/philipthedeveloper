import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import "./MyProject.css";
import { projects } from "../data";
import { checkInViewPort } from "../utils/index.util";

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
    <div id="projects">
      <div className="project_header">
        <p id="recent_works">
          Recent <span>Works</span>
        </p>
      </div>

      <div className="projects_container">
        {/* <span id="left_arrow">
          <i class="fa-solid fa-angle-right"></i>
        </span> */}
        {projects.map((project, i) => {
          return (
            <ProjectCard info={{ ...project, index: i }} key={project.name} />
          );
        })}
        {/* <span id="right_arrow">
          <i class="fa-solid fa-angle-left"></i>
        </span> */}
      </div>

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
