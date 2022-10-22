import React, { useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const nav = useRef(null);
  const toggler = useRef(null);
  const handleToggle = () => {
    if (nav.current.classList.contains("show")) {
      nav.current.classList.remove("show");
      toggler.current.classList.remove("cross");
    } else {
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
            <a href="#certifications">CERTIFICATIONS</a>
          </li>
          <li onClick={handleToggle}>
            <Link to="#contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
      <button id="download_cv">DOWNLOAD CV</button>
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
