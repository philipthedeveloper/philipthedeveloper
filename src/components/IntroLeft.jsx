import React from "react";
import "./IntroLeft.css";

function IntroLeft() {
  return (
    <div className="left_intro_container">
      <div className="intro">
        <p id="intro_greeting">
          Hello, <span>I'm</span>
        </p>
        <h2 id="intro_name">
          <span>Philip Owolabi</span>
        </h2>
        <p id="intro_jobrole">
          {/* <span>Full Stack Web Developer</span> */}
          <span>Frontend Developer</span>
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
            With almost half a decade of experience in frontend development, I
            have built a strong foundation in core web technologies. I am
            proficient in HTML, CSS, and JavaScript, and have expertise in
            modern frontend frameworks such as React and Angular.
            {/* ..{" "} */}
            {/* <button>read more</button> */}
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
            href="https://twitter.com/OwolabiPhilip2"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/owolabi-philip-50223821b/"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.instagram.com/philip_coder/"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      <footer id="intro_footer">
        <div id="experience">
          <p className="number">2+</p>
          <p className="text">years of experience</p>
        </div>
        <div id="clients">
          <p className="number">5+</p>
          <p className="text">working client</p>
        </div>
      </footer>
    </div>
  );
}

export default IntroLeft;
