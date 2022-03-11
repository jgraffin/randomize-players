import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const UsersContainer = styled.div`
  align-items: flex-start;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
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

export const AddUserButton = styled.div`
  align-items: center;
  display: flex;
  height: 5.8rem;
  justify-content: center;
  width: 5.8rem;
  position: fixed;
  left: 50%;
  margin-left: -2.5rem;
  bottom: 2rem;
  z-index: 10;

  a {
    background-color: #781db9;
    border-radius: 90px;
    color: #ffffff;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-decoration: none;
    font-size: 2rem;
  }
`;
