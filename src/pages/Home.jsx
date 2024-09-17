import React, { useState } from "react";
import Header from "../components/Header";
import IntroLeft from "../components/IntroLeft";
import IntroRight from "../components/IntroRight";
import MyService from "../components/MyService";
import MyProject from "../components/MyProject";
import styled from "styled-components";
import CVModal from "../components/CVModal";
import ProcessingModal from "../components/ProcessModal";
import Contact from "../components/Contact";
import { BackToTop, ContactMe } from "../components/Buttons";
import { useEffect } from "react";
import Footer from "../components/Footer";
import MyJourney from "../components/MyJourney";
import Experience from "../components/experience/Experience";
import HeroUnderLay from "../components/HeroUnderLay";
import NewIntroSection from "../components/redesign/NewIntroSection";
import Social from "../components/redesign/Social";
import noiseBg from "../assets/imgs/noise-bg.png";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(() => false);
  const [isProcess, setIsProcess] = useState(() => false);
  const [isScrolled, setIsScrolled] = useState(() => false);
  const [isButtonShow, setIsShowButton] = useState(() => true);

  const showModal = () => {
    setIsModalOpen(true);
    afterEffect();
  };

  const showProcessModal = () => {
    setIsProcess(true);
    document.body.style.overflowY = "hidden";
  };

  const afterEffect = () => {
    let scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = 0;
    document.body.style.right = 0;
    document.body.style.overflowY = "scroll";
  };
  const hideModal = () => {
    setIsModalOpen(false);
    reverseAfterEffect();
  };

  const hideProcess = () => {
    setIsProcess(false);
    reverseAfterEffect();
  };

  const reverseAfterEffect = () => {
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollBy(0, parseInt(scrollY || "0") * -1);
    document.body.style.overflow = "auto";
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
      <div
        className="w-full h-full absolute z-0 opacity-[0.013] top-0 left-0"
        style={{ background: `url(${noiseBg})` }}
      ></div>
      {isModalOpen && <CVModal hideModal={hideModal} />}
      {isProcess && <ProcessingModal hideModal={hideProcess} />}
      {isScrolled && <BackToTop />}
      {isButtonShow && <ContactMe />}
      <HeroUnderLay />
      <Header showModal={showModal} toggleButton={setIsShowButton} />
      <Social />
      {/* <IntroSection>
        <IntroLeft />
        <IntroRight />
      </IntroSection> */}
      <NewIntroSection />
      <Section id="journey">
        <MyJourney />
      </Section>
      <Section id="work-experience">
        <Experience />
      </Section>
      {/* <Section>
        <MyService />
      </Section> */}
      <Section id="projects">
        <MyProject />
      </Section>
      {/* <Section>
        <Skills />
      </Section> */}
      <Section id="contact">
        <Contact
          showProcessModal={showProcessModal}
          hideProcess={hideProcess}
        />
      </Section>
      <Footer />
      {/* <CertificationSection>
        <Certification />
      </CertificationSection> */}
    </>
  );
}

const Section = styled.section`
  // margin: 5rem auto;
  // padding-bottom: 5rem;
  padding: 5rem 0;
  margin: 0rem auto;
  border-bottom: 2px solid var(--black);
  width: 85%;
  max-width: 1100px;

  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

const IntroSection = styled(Section)`
  display: flex;
  flex-wrap: wrap;
  min-height: 90dvh;
`;
// const ServiceSection = styled.section`
//   margin: 5rem auto;
//   padding-bottom: 5rem;
//   border-bottom: 2px solid var(--black);
//   width: 85%;;
//   max-width: 1100px;
// `;
// const ProjectSection = styled.section`
//   margin: 5rem auto;
//   padding-bottom: 5rem;
//   border-bottom: 2px solid var(--black);
//   width: 85%;;
//   max-width: 1100px;
// `;
// const SkillSection = styled.section`
//   margin: 5rem auto;
//   padding-bottom: 5rem;
//   border-bottom: 2px solid var(--black);
//   width: 85%;;
//   max-width: 1100px;
// `;
// const ContactSection = styled.section`
//   margin: 5rem auto;
//   padding-bottom: 5rem;
//   border-bottom: 2px solid var(--black);
//   width: 85%;;
//   max-width: 1100px;
// `;
// const CertificationSection = styled.section`
//   margin: 5rem auto;
//   padding-bottom: 5rem;
//   border-bottom: 2px solid var(--black);
//   width: 85%;;
//   max-width: 1100px;
// `;

export default Home;
