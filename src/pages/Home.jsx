import React, { useState } from "react";
import Header from "../components/Header";
import IntroLeft from "../components/IntroLeft";
import IntroRight from "../components/IntroRight";
import MyService from "../components/MyService";
import MyProject from "../components/MyProject";
import Certification from "../components/Certification";
import styled from "styled-components";
import CVModal from "../components/CVModal";
import Skills from "../components/Skills";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(() => false);
  const showModal = () => {
    setIsModalOpen(true);
    document.body.style.position = "fixed";
    document.body.style.top = `-${window.scrollY}px`;
  };
  const hideModal = () => {
    setIsModalOpen(false);
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  };

  return (
    <>
      {isModalOpen && <CVModal hideModal={hideModal} />}
      <Header showModal={showModal} />
      <IntroSection>
        <IntroLeft />
        <IntroRight />
      </IntroSection>
      <ServiceSection>
        <MyService />
      </ServiceSection>
      <ProjectSection>
        <MyProject />
      </ProjectSection>
      <SkillSection>
        <Skills />
      </SkillSection>
      {/* <CertificationSection>
        <Certification />
      </CertificationSection> */}
    </>
  );
}

const IntroSection = styled.section`
  display: flex;
  margin: 5rem auto;
  padding-bottom: 5rem;
  border-bottom: 2px solid var(--black);
  flex-wrap: wrap;
  width: 90%;
  max-width: 1100px;
`;
const ServiceSection = styled.section`
  margin: 5rem auto;
  padding-bottom: 5rem;
  border-bottom: 2px solid var(--black);
  width: 90%;
  max-width: 1100px;
`;
const ProjectSection = styled.section`
  margin: 5rem auto;
  padding-bottom: 5rem;
  border-bottom: 2px solid var(--black);
  width: 90%;
  max-width: 1100px;
`;
const SkillSection = styled.section`
  margin: 5rem auto;
  padding-bottom: 5rem;
  border-bottom: 2px solid var(--black);
  width: 90%;
  max-width: 1100px;
`;
const CertificationSection = styled.section`
  margin: 5rem auto;
  padding-bottom: 5rem;
  border-bottom: 2px solid var(--black);
  width: 90%;
  max-width: 1100px;
`;

export default Home;
