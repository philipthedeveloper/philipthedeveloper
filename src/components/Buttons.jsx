import React from "react";
import styled from "styled-components";

const BackToTop = () => {
  const handleBackToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <Button className="back-to-top" onClick={handleBackToTop}>
      <i className="fa-solid fa-arrow-up"></i>
    </Button>
  );
};

const ContactMe = () => {
  return (
    <Contact className="contact-me" href="#contact">
      <i class="fa-solid fa-comments"></i>
    </Contact>
  );
};

const Button = styled.button`
  position: fixed;
  bottom: 5%;
  z-index: 300;
  right: 5%;
  background-color: var(--base-color);
  color: #fff;
  padding: 1rem;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Contact = styled.a`
  position: fixed;
  top: 40%;
  z-index: 300;
  transform: translateY(-50%);
  right: 5%;
  background-color: var(--base-color);
  color: #fff;
  padding: 1rem;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  text-decoration: none;
  transform: scale(0.5);
  animation: scaling 1s ease 0s infinite alternate forwards;

  &:hover {
    animation: none;
    transform: none;
  }
`;

export { BackToTop, ContactMe };
