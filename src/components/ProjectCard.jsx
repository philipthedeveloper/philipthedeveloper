import React from "react";
import styled from "styled-components";

function ProjectCard({
  info: { name, description, iconUrl, url, test, index },
}) {
  return (
    <div className="project_card_container">
      <ProjectCardComp className="card_cont">
        <div className="project_thumbnail_container">
          <img src={iconUrl} alt={`${name} project`} />
        </div>
        <div id="project_info">
          <p id="project_description">{description}</p>
          <a
            href={iconUrl}
            target="_blank"
            rel="noreferrer"
            className="view_snapshot"
          >
            <i className="fa-solid fa-image"></i>
          </a>
          <div className="project_links">
            {test && (
              <a href={test} target="_blank" rel="noreferrer">
                <i className="fa-solid fa-play"></i>
              </a>
            )}
            {/* <a href="/">Explore site</a> */}
            <a href={url} target={"_blank"} rel="noreferrer">
              Source Code
            </a>
          </div>
        </div>
      </ProjectCardComp>
      <p id="project_name">{name}</p>
    </div>
  );
}

const ProjectCardComp = styled.div`
  // padding: 2rem;
  background-color: var(--main-background);
  box-shadow: 0px 0px 15px var(--black);
  border-radius: 0.5rem;
  cursor: pointer;
  // opacity: 1;
  // transform: scale(0.7);
  transition: transform 1s, opacity 1s ease;
  // overflow: hidden;
  position: relative;
`;

export default ProjectCard;
