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
  flex-direction: column;
  height: 80%;
  margin-top: 4rem;
  overflow-y: auto;
  padding-bottom: 10rem;
  position: relative;
  width: 100%;

  ion-item {
    margin-bottom: 1rem;
  }
`;

export const PlayersAmount = styled.div`
  position: fixed;
  left: 0;
  top: 10rem;
  width: 100%;
  text-align: center;
`;

export const ModalContainer = styled.div`
  animation: ${slideIn} ease-in-out 0.4s forwards;
  background-color: #d8d8d8;
  border-radius: 20px 20px 0 0;
  width: 100%;
  height: 300px;
  position: fixed;
  z-index: 999;
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
  border-radius: 90px;
  display: flex;
  height: 4.2rem;
  justify-content: center;
  overflow: hidden;
  width: 4.2rem;

  a {
    align-items: center;
    background-color: #781db9;
    color: var(--light);
    display: flex;
    font-size: 2rem;
    height: 100%;
    justify-content: center;
    text-decoration: none;
    width: 100%;
  }

  &.ripple-parent {
    position: relative;
    overflow: hidden;
  }
`;

export const RandomizePlayersButton = styled.div`
  align-items: center;
  background-color: #d00606;
  border-radius: 90px;
  color: var(--lighter);
  display: flex;
  height: 4.2rem;
  justify-content: center;
  width: 4.2rem;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background: url("./assets/icon/icon-random.svg") no-repeat center center;
  }

  &.ripple-parent {
    position: relative;
    overflow: hidden;
  }
`;

export const AreaButtons = styled.div`
  align-items: center;
  background: rgb(18, 3, 3);
  background: linear-gradient(
    0deg,
    rgba(18, 3, 3, 1) 70%,
    rgba(18, 3, 3, 0) 100%
  );
  bottom: 0;
  display: flex;
  grid-gap: 1rem;
  height: 8rem;
  justify-content: center;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 30;
`;
