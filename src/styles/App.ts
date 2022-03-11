import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const ModalContainer = styled.div`
  animation: ${slideIn} ease-in-out 0.4s forwards;
  background-color: #d8d8d8;
  border-radius: 20px 20px 0 0;
  width: 100%;
  height: 300px;
  position: fixed;
  z-index: 20;
  left: 0;
  bottom: 0;
  padding: 20px;
`;

export const ModalContainerClose = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0;
  top: 0;
  background: #781db9;
  z-index: 30;

  &::before {
    content: "X";
  }
`;
