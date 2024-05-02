import React from "react";
import "./IntroRight.css";
import profileImg from "../assets/images/profile/transparent-p-3.png";

function MainRight() {
  return (
    <div className="right_intro_container">
      <div className="background">
        <div className="image-container">
          <img src={profileImg} alt="" />
        </div>
        {/* <img src="img/philip-profile-image-new.png" alt="" /> */}
      </div>
    </div>
  );
}

export default MainRight;
