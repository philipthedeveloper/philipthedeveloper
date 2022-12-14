import React, { useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ showModal, toggleButton }) {
  const nav = useRef(null);
  const toggler = useRef(null);
  const handleToggle = () => {
    if (nav.current.classList.contains("show")) {
      nav.current.classList.remove("show");
      toggler.current.classList.remove("cross");
      toggleButton(true);
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    } else {
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      toggleButton(false);
      nav.current.classList.add("show");
      toggler.current.classList.add("cross");
    }
  };

  return (
    <header>
      <div className="logo_container">
        <Link to="/" id="home_link">
          <span id="logo">W</span>
          <p>philip</p>
        </Link>
      </div>
      <nav ref={nav}>
        <ul>
          <li onClick={handleToggle}>
            <Link to="/">HOME</Link>
          </li>
          <li onClick={handleToggle}>
            <a href="#services">SERVICES</a>
          </li>
          <li onClick={handleToggle}>
            <a href="#projects">PROJECTS</a>
          </li>
          <li onClick={handleToggle}>
            <a href="#skills">SKILLS</a>
          </li>
          <li onClick={handleToggle}>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
      <button id="download_cv" onClick={showModal}>
        DOWNLOAD CV
      </button>
      <div
        className="toggle-nav"
        onClick={(e) => handleToggle(e)}
        ref={toggler}
      >
        <span className="a"></span>
        <span className="b"></span>
        <span className="c"></span>
      </div>
    </header>
  );
}

export default Header;
