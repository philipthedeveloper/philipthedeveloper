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
import Contact from "../components/Contact";
import { BackToTop, ContactMe } from "../components/Buttons";
import { useEffect } from "react";
import Footer from "../components/Footer";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(() => false);
  const [isScrolled, setIsScrolled] = useState(() => false);
  const [isButtonShow, setIsShowButton] = useState(() => true);

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

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 700) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log("called here.");
    return () => {
      console.log("Clean up called");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isModalOpen && <CVModal hideModal={hideModal} />}
      {isScrolled && <BackToTop />}
      {isButtonShow && <ContactMe />}
      <Header showModal={showModal} toggleButton={setIsShowButton} />
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
      <ContactSection>
        <Contact />
      </ContactSection>
      <Footer />
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
const ContactSection = styled.section`
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
