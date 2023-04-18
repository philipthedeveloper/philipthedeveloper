import React from "react";
import styled from "styled-components";

const CVModal = ({ hideModal }) => {
  const handleHide = (e) => {
    if (e.target === e.currentTarget) {
      hideModal();
    }
  };

  return (
    <CVModalContainer onClick={(e) => handleHide(e)}>
      <ModalBox>
        <a
          href="docs/DEVELOPER_RESUME.pdf"
          download={"philipthedeveloper"}
          style={{ ...styles.a, backgroundColor: "var(--base-color)" }}
        >
          web development pdf format
        </a>
        <a
          href="docs/MOBILE_APP_RESUME.pdf"
          download={"philipthedeveloper"}
          style={{ ...styles.a, backgroundColor: "var(--base-color)" }}
        >
          mobile app pdf format
        </a>

        <a
          href="docs/DEVELOPER_RESUME.docx"
          download={"philipthedeveloper"}
          style={{ ...styles.a, backgroundColor: "blue" }}
        >
          web developer word format
        </a>
        <a
          href="docs/MOBILE_APP_RESUME.docx"
          download={"philipthedeveloper"}
          style={{ ...styles.a, backgroundColor: "blue" }}
        >
          mobile app word format
        </a>
      </ModalBox>
    </CVModalContainer>
  );
};

const CVModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ModalBox = styled.div`
  min-width: 200px;
  max-width: 300px;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--main-background);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  animation: slide-down 0.4s ease-in forwards;
`;

const styles = {
  a: {
    padding: "0.5rem 0.8rem",
    color: "#fff",
    display: "block",
    marginBottom: "1rem",
    textDecoration: "none",
    borderRadius: "0.4rem",
    fontVariant: "small-caps",
    textAlign: "center",
  },
};

export default CVModal;
