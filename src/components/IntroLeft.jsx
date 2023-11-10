import React from "react";
import "./IntroLeft.css";

function IntroLeft() {
  return (
    <div className="left_intro_container">
      <div className="intro">
        <p id="intro_greeting">
          Hello,
          {/* <span>Hello,</span> */}
          {/* <span>Welcome,</span> */}
          <span> I'm</span>
        </p>
        <h2 id="intro_name">
          <span>Philip Owolabi</span>
          {/* <span>I'm an innovative</span>
          <span> Frontend Developer</span> */}
        </h2>
        <p id="intro_jobrole">
          {/* <span>Full Stack Web Developer</span> */}
          <span>An innovative Frontend Developer</span>
        </p>
        <p id="intro_description">
          {/* <span>
            Dependable Certified Full Stack Developer trained to develop
            accessible user interfaces. Seeking to leverage efficient backend
            and frontend design skills to help businesses, startups, and
            individuals create reusable user-centered interfaces, manage, track
            and organize development.
          </span> */}
          <span>
            With almost half a decade of experience in frontend development and
            expertise in modern frontend frameworks such as React and Angular.
          </span>
        </p>
      </div>
      <div className="connect">
        <p>find me on</p>
        <div className="socials">
          <a
            href="https://github.com/philipthedeveloper"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://twitter.com/POwolabi55029"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            // href="https://www.linkedin.com/in/owolabi-philip-50223821b/"
            href="https://www.linkedin.com/in/philip-owolabi-bb9b2929a/"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://instagram.com/philipthedeveloper?igshid=anh1MGp6emNvZ3Zo"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      <footer id="intro_footer">
        <div id="experience">
          <p className="number">3+</p>
          <p className="text">years of experience</p>
        </div>
        {/* <div id="clients">
          <p className="number">3</p>
          <p className="text">Startups</p>
        </div> */}
        <div id="clients">
          <p className="number">50+</p>
          <p className="text">Projects Completed</p>
        </div>
      </footer>
    </div>
  );
}

export default IntroLeft;
