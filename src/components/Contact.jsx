import React from "react";
import styled from "styled-components";
import ContactData from "../constants/contactData";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

const Contact = ({ showProcessModal, hideProcess }) => {
  return (
    <div>
      <div className="header">
        <p id="service">WHAT'S NEXT?</p>
        <p id="what_i_do">Get In Touch</p>
      </div>
      <OverallCont className="w-full md:w-[90%] mx-auto">
        <ContactCardContainer className="contact-card-container">
          {ContactData.map((item, i) => (
            <ContactCard data={item} key={i.toString()} />
          ))}
        </ContactCardContainer>
        <ContactForm
          showProcessModal={showProcessModal}
          hideProcess={hideProcess}
        />
      </OverallCont>
    </div>
  );
};

const ContactCardContainer = styled.div`
  display: flex;
  // justify-content: space-evenly;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  @media (min-width: 800px) {
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: 0;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const OverallCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1rem;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export default Contact;
