import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ padding: "0rem 4rem 3rem", textAlign: "center" }}>
      <div className="logo_container">
        <Link to="/" id="home_link" style={{ justifyContent: "center" }}>
          <span id="logo">W</span>
          <p>philip</p>
        </Link>
      </div>
      <div className="connect">
        <div className="socials" style={{ justifyContent: "center" }}>
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
            href="https://www.linkedin.com/in/owolabi-philip-50223821b/"
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

      <p style={{ fontSize: "0.65rem", margin: "1rem 0" }}>
        UI Credit:{" "}
        <a
          href="https://www.behance.net/PixelsMove"
          target={"_blank"}
          rel="noreferrer"
          style={{ color: "var(--base-color)" }}
        >
          https://www.behance.net/PixelsMove
        </a>
      </p>
      <p style={{ fontSize: "0.65rem" }}>
        philipthedeveloper &copy; All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
