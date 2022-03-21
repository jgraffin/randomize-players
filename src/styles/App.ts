import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
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

  p {
    color: var(--ion-color-light);
    font-size: 1.4rem;
  }
`;

export const ModalContainer = styled.div`
  align-items: flex-end;
  background: rgba(0, 0, 0, 0.6);
  bottom: 0;
  display: flex;
  height: 100%;
  left: 0%;
  position: fixed;
  width: 100%;
  z-index: 999;
  transition: ease-in-out 0.3s;

  .wrapper {
    animation: ${slideIn} ease-in-out 0.4s forwards;
    background-color: var(--ion-color-primary-contrast);
    border-radius: 20px 20px 0 0;
    bottom: 0;
    left: 0;
    padding: 2rem;
    width: 100%;
    z-index: 99;

    &.wrapper--shuffled {
      animation: none;
      border-radius: 0;
      height: 100%;
    }
  }
`;

export const ModalContainerClose = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -1.4rem;
  border-radius: 90px;
  background: var(--ion-color-primary);
  z-index: 30;

  a {
    align-items: center;
    justify-content: center;
    display: flex;
    height: 2.5rem;
    width: 2.5rem;

    &::before {
      background: url("./assets/icon/icon-close.svg") no-repeat center center;
      display: block;
      content: "";
      height: 2.5rem;
      width: 2.5rem;
    }
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
    background-color: var(--ion-color-primary);
    color: var(--light);
    display: flex;
    font-size: 2rem;
    height: 4.2rem;
    justify-content: center;
    text-decoration: none;
    width: 4.2rem;

    &::before {
      background: url("./assets/icon/icon-plus.svg") no-repeat center center;
      content: "";
      height: 4.2rem;
      width: 4.2rem;
    }
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

  a {
    display: block;
    height: 4.2rem;
    width: 4.2rem;

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      background: url("./assets/icon/icon-random.svg") no-repeat center center;
    }
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
  height: 10rem;
  justify-content: center;
  left: 0;
  position: fixed;
  padding-top: 3rem;
  width: 100%;
  z-index: 30;
`;
