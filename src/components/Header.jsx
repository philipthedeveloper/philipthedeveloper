import React, { useRef, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SideNav from "./redesign/SideNav";
import classNames from "classnames";

function Header({ showModal, toggleButton }) {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const onOpen = () => {
    toggleButton(true);
    setIsSidenavOpen(true);
  };

  const onClose = () => {
    toggleButton(false);
    setIsSidenavOpen(false);
  };

  const nav = useRef(null);
  const toggler = useRef(null);
  const handleToggle = () => {
    if (nav.current.classList.contains("show")) {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    } else {
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
    }
  };

  const handleNavLink = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 992) {
      handleToggle();
    }
  };

  return (
    <header className="page-header relative z-30">
      <div className="logo_container">
        <Link to="/" id="home_link" className="hidden lg:flex">
          {/* <span id="logo">W</span> */}
          <p className="satisfy-regular">philip</p>
        </Link>
      </div>
      <SideNav onClose={onClose} isOpen={isSidenavOpen} showModal={showModal} />

      <nav ref={nav} className="hidden md:block main-nav">
        <ul>
          <li onClick={handleNavLink}>
            <Link to="/">HOME</Link>
          </li>
          <li onClick={handleNavLink}>
            {/* <a href="#services">SERVICES</a> */}
            <a href="#journey">MY JOURNEY</a>
          </li>
          <li onClick={handleNavLink}>
            <a href="#work-experience">EXPERIENCE</a>
          </li>
          <li onClick={handleNavLink}>
            <a href="#projects">PROJECTS</a>
          </li>
          <li onClick={handleNavLink}>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
      <button id="download_cv" onClick={showModal}>
        DOWNLOAD MY CV
      </button>
      <div
        className={classNames("toggle-nav", { cross: isSidenavOpen })}
        onClick={onOpen}
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
