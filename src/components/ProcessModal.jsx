import React from "react";
import styled from "styled-components";

const ProcessingModal = ({ hideModal }) => {
  //   const handleHide = (e) => {
  //     if (e.target === e.currentTarget) {
  //       hideModal();
  //     }
  //   };
  return (
    <ModalContainer>
      <div className="spinner-3"></div>
      <div className="classic-4"></div>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ProcessingModal;
