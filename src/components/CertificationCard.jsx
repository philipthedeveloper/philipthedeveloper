import React from "react";

function CertificationCard({ imgUrl, title }) {
  return (
    <div className="cert_card">
      <div className="cert_img_container">
        <img src={imgUrl} alt={title} className="myImg" />
      </div>
    </div>
  );
}

export default CertificationCard;
