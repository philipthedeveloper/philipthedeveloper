import React, { useState } from "react";
import Header from "../components/Header";
import IntroLeft from "../components/IntroLeft";
import IntroRight from "../components/IntroRight";
import MyService from "../components/MyService";
import MyProject from "../components/MyProject";
import Certification from "../components/Certification";
import styled from "styled-components";
import CVModal from "../components/CVModal";
import ProcessingModal from "../components/ProcessModal";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { BackToTop, ContactMe } from "../components/Buttons";
import { useEffect } from "react";
import Footer from "../components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import MyJourney from "../components/MyJourney";
import Experience from "../components/experience/Experience";

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
      {isModalOpen && <CVModal hideModal={hideModal} />}
      {isProcess && <ProcessingModal hideModal={hideProcess} />}
      {isScrolled && <BackToTop />}
      {isButtonShow && <ContactMe />}
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Header showModal={showModal} toggleButton={setIsShowButton} />
      <IntroSection>
        <IntroLeft />
        <IntroRight />
      </IntroSection>
      <Section>
        <MyJourney />
      </Section>
      <Section>
        <Experience />
      </Section>
      {/* <Section>
        <MyService />
      </Section> */}
      <Section>
        <MyProject />
      </Section>
      {/* <Section>
        <Skills />
      </Section> */}
      <Section>
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
  margin: 5rem auto;
  padding-bottom: 5rem;
  border-bottom: 2px solid var(--black);
  width: 90%;
  max-width: 1100px;
`;

const IntroSection = styled(Section)`
  display: flex;
  flex-wrap: wrap;
`;
// const ServiceSection = styled.section`
//   margin: 5rem auto;
//   padding-bottom: 5rem;
//   border-bottom: 2px solid var(--black);
//   width: 90%;
//   max-width: 1100px;
// `;
// const ProjectSection = styled.section`
//   margin: 5rem auto;
//   padding-bottom: 5rem;
//   border-bottom: 2px solid var(--black);
//   width: 90%;
//   max-width: 1100px;
// `;
// const SkillSection = styled.section`
//   margin: 5rem auto;
//   padding-bottom: 5rem;
//   border-bottom: 2px solid var(--black);
//   width: 90%;
//   max-width: 1100px;
// `;
// const ContactSection = styled.section`
//   margin: 5rem auto;
//   padding-bottom: 5rem;
//   border-bottom: 2px solid var(--black);
//   width: 90%;
//   max-width: 1100px;
// `;
// const CertificationSection = styled.section`
//   margin: 5rem auto;
//   padding-bottom: 5rem;
//   border-bottom: 2px solid var(--black);
//   width: 90%;
//   max-width: 1100px;
// `;

export default Home;
