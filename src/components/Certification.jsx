import React from "react";
import "./Certification.css";
import "./modal.css";
import { Link } from "react-router-dom";
// import { certifications } from "../data";
// import CertificationCard from "./CertificationCard";

function Certification() {
  return (
    <div id="certifications">
      <div className="header">
        <p id="certification">CERTIFICATIONS</p>
        <p id="cert_from_platform">From Trusted Platforms</p>
      </div>
      <div className="cert_cont">
        <div className="certification_container">
          <p>
            <span id="logo_in">
              <span className="logo">Linked </span>
              <span id="in">in</span>
            </span>
            <span id="learning">Learning</span>
          </p>
          <Link to="certification" id="to_certificates">
            View All Certifications
          </Link>
        </div>
        <div className="certification_container">
          <p>
            <span className="logo">FreeCodeCamp</span>
          </p>
          <Link to="certification" id="to_certificates">
            View All Certifications
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Certification;
