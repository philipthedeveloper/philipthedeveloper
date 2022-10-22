import React from "react";
import "./IntroLeft.css";
import { Link } from "react-router-dom";

function IntroLeft() {
  return (
    <div className="left_intro_container">
      <div className="intro">
        <p id="intro_greeting">
          Hello, <span>I'm</span>
        </p>
        <h2 id="intro_name">Philip Owolabi</h2>
        <p id="intro_jobrole">Full Stack Web Developer</p>
        <p id="intro_description">
          Dependable Certified Full Stack Developer trained to develop
          accessible user interfaces. Seeking to leverage efficient backend and
          frontend design skills to help businesses, startups, and individuals
          create reusable user-centered interfaces, manage, track and organize
          development.
        </p>
      </div>
      <div className="connect">
        <p>find me on</p>
        <div className="socials">
          <Link to="">
            <i className="fa-brands fa-facebook-f"></i>
          </Link>
          <Link to="">
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link to="">
            <i className="fa-brands fa-linkedin-in"></i>
          </Link>
          <Link to="">
            <i className="fa-brands fa-instagram"></i>
          </Link>
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
