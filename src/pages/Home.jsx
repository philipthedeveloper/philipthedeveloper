import React from "react";
import Header from "../components/Header";
import IntroLeft from "../components/IntroLeft";
import IntroRight from "../components/IntroRight";
import MyService from "../components/MyService";
import MyProject from "../components/MyProject";
import Certification from "../components/Certification";
import styled from "styled-components";

function Home() {
  return (
    <>
      <Header />
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
      {/* <CertificationSection>
        <Certification />
      </CertificationSection> */}
    </>
  );
}

const IntroSection = styled.section`
  display: flex;
  margin: 5rem 0rem;
  padding-bottom: 5rem;
  border-bottom: 2px solid var(--black);
  flex-wrap: wrap;
`;
const ServiceSection = styled.section`
  margin: 5rem auto;
  padding-bottom: 5rem;
  border-bottom: 2px solid var(--black);
`;
const ProjectSection = styled.section`
  margin: 5rem auto;
  padding-bottom: 5rem;
  border-bottom: 2px solid var(--black);
`;
const CertificationSection = styled.section`
  margin: 5rem auto;
  padding-bottom: 5rem;
  border-bottom: 2px solid var(--black);
`;

export default Home;
