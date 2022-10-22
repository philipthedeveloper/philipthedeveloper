import React from "react";
import styled from "styled-components";

function Card({ info: { name, description, iconUrl } }) {
  return (
    <CardComp className="card">
      <ServiceIcon className="service_icon_container">
        <Icon src={iconUrl} alt="" />
      </ServiceIcon>
      <p id="service_name">{name}</p>
      <p id="service_desc">{description}</p>
    </CardComp>
  );
}

const ServiceIcon = styled.div`
  width: 40px;
  height: 40px;
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const CardComp = styled.div`
  padding: 2rem;
  background-color: var(--main-background);
  box-shadow: 0px 0px 10px var(--black);
  border-radius: 0.5rem;
  cursor: pointer;
  opacity: 0;
  transform: scale(0.7);
  transition: transform 1s, opacity 1s ease;
`;

export default Card;
export { CardComp };
