import React from "react";
import styled from "styled-components";

const ContactCard = ({ data }) => {
  const { logo, info } = data;
  return (
    <CardComp
      className="card"
      // style={{
      //   opacity: 1,
      //   transform: "none",
      //   textAlign: "center",
      // }}
    >
      <i
        className={logo}
        style={{
          textAlign: "center",
          color: "var(--base-color)",
          fontSize: "1.5rem",
        }}
      ></i>
      <p id="service_desc" style={{ marginTop: "0.5rem" }}>
        {info}
      </p>
    </CardComp>
  );
};

const CardComp = styled.div`
  padding: 2rem;
  background-color: var(--main-background);
  box-shadow: 0px 0px 10px var(--black);
  border-radius: 0.5rem;
  cursor: pointer;
  opacity: 0;
  transform: scale(0.7);
  transition: transform 1s, opacity 1s ease;
  min-width: 250px;
  text-align: center;
  flex-grow: 1;
  @media (max-width: 779px) {
    flex-basis: 40%;
  }
  @media (max-width: 500px) {
    flex-basis: 0;
    flex-grow: 0;
  }
`;

export { CardComp };

export default ContactCard;
