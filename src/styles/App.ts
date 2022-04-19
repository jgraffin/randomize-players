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

  .modal-container-title {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 3rem;
    text-align: center;
    z-index: 991;

    h2 {
      color: var(--ion-color-dark);
      font-family: var(--font-family-bold);
      font-size: 1.2rem;
    }
  }

  .wrapper {
    animation: ${slideIn} ease-in-out 0.4s forwards;
    background-color: var(--ion-color-primary-contrast);
    border-radius: 20px 20px 0 0;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    padding: 2rem;

    &.wrapper--shuffled {
      background-color: var(--ion-color-light);
      overflow-x: auto;
      overflow-y: hidden;
      padding: 0;
      animation: none;
      border-radius: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: 1;

      .list {
        display: block;
        padding: 0;
        position: relative;

        .list__image {
          position: relative;

          &::before {
            content: attr(data-player-name);
            color: var(--ion-color-dark);
            width: 2.5rem;
            height: 2rem;
            position: absolute;
            left: 0;
            bottom: -25px;
            display: flex;
            align-items: center;
            text-transform: uppercase;
            font-family: var(--font-family-bold);
            font-size: 0.6rem;
            justify-content: center;
          }
        }

        img {
          display: block;
          width: 40px;
        }

        h2 {
          color: black;
          font-size: 1rem;
        }

        li {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 18vw;
          margin: 2rem 0.5rem 2rem 0.5rem;
          position: relative;

          /* &:nth-child(2) {
            top: 4.6rem;
          } */

          &:nth-child(3) {
            margin-top: 11.2rem;
          }
        }

        // ------ Until 6 players
        &.list-6 {
          width: 600px;

          li {
            .lines-start {
              position: absolute;
              width: 5rem;
              height: 6rem;
              left: 100%;
              top: 20px;

              &::before,
              &::after {
                content: "";
                width: 100%;
                height: 2px;
                position: absolute;
                left: 0;
                top: -2px;
                background: var(--ion-color-dark);
              }

              &::after {
                width: 2px;
                height: 40%;
                left: 100%;
                right: auto;
              }
            }

            &:nth-child(2) {
              .lines-start {
                strong {
                  position: absolute;
                  top: -55%;
                  left: 81%;
                  z-index: 2;

                  &::before,
                  &::after {
                    content: "2";
                    width: 2rem;
                    height: 2rem;
                    background: var(--ion-color-dark);
                    position: absolute;
                    left: 0;
                    top: 0;
                    border-radius: 90px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 4;
                  }

                  &::after {
                    content: "";
                    width: 4rem;
                    height: 2px;
                    left: 25px;
                    top: 16px;
                    background: var(--ion-color-dark);
                  }
                }

                &::after {
                  bottom: 100%;
                  top: auto;
                }
              }
            }

            &:nth-child(3) {
              margin-left: 5rem;
              margin-top: 2rem;

              .lines-end {
                position: absolute;
                width: 10rem;
                height: 6rem;
                left: 0;
                top: -30px;

                strong {
                  position: absolute;
                  left: 80%;
                  margin: -3px 90px;
                  z-index: 2;

                  &::after {
                    content: "FINAL";
                    width: 4rem;
                    padding: 0.4rem;
                    background: var(--ion-color-dark);
                    position: absolute;
                    left: 0;
                    top: -12px;
                    border-radius: 90px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: var(--font-family-bold);
                    font-size: 0.9rem;
                  }

                  &:before {
                    content: "";
                    width: 5rem;
                    height: 12rem;
                    position: absolute;
                    left: 0;
                    top: -150px;
                    background: url("./assets/images/trophy.png") no-repeat
                      center center;
                    background-size: 33px;
                  }
                }

                &::after {
                  content: "";
                  width: 40%;
                  height: 2px;
                  background: var(--ion-color-dark);
                  left: 100%;
                  top: 0;
                  bottom: 6rem;
                  position: absolute;
                }
              }

              .lines-start {
                strong {
                  position: absolute;
                  top: -55%;
                  left: 81%;

                  &::before {
                    content: "";
                    width: 2px;
                    height: 3.5rem;
                    background: var(--ion-color-dark);
                    top: auto;
                    left: 15px;
                    bottom: 100%;
                    position: absolute;
                  }

                  &::after {
                    content: "5";
                    width: 2rem;
                    height: 2rem;
                    background: var(--ion-color-dark);
                    position: absolute;
                    left: 0;
                    top: -12px;
                    border-radius: 90px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 4;
                  }
                }

                &::after {
                  bottom: 100%;
                  top: auto;
                }
              }
            }

            &:nth-child(4),
            &:nth-child(5),
            &:nth-child(6) {
              position: absolute;
              right: -244px;
              top: -3px;

              .lines-start {
                left: auto;
                right: 100%;

                &::before,
                &::after {
                  background: var(--ion-color-dark);
                }

                &::after {
                  left: auto;
                  right: 100%;
                }
              }
            }

            &:nth-child(5) {
              top: 73px;

              .lines-start {
                strong {
                  position: absolute;
                  top: -55%;
                  left: auto;
                  right: 81%;
                  z-index: 2;

                  &::before,
                  &::after {
                    content: "3";
                    width: 2rem;
                    height: 2rem;
                    background: var(--ion-color-dark);
                    position: absolute;
                    left: -33px;
                    top: 0;
                    border-radius: 90px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 4;
                  }

                  &::after {
                    content: "";
                    width: 4rem;
                    height: 2px;
                    left: auto;
                    right: 25px;
                    top: 13px;
                    background: var(--ion-color-dark);
                  }
                }

                &::after {
                  bottom: 100%;
                  top: auto;
                }
              }
            }

            &:nth-child(6) {
              margin-right: 5rem;
              margin-top: 11rem;

              .lines-start {
                strong {
                  &::before {
                    content: "";
                    width: 2px;
                    height: 3.5rem;
                    background: var(--ion-color-dark);
                    top: -108px;
                    left: -2px;
                    bottom: 100%;
                    position: absolute;
                  }

                  &::after {
                    content: "6";
                    width: 2rem;
                    height: 2rem;
                    background: var(--ion-color-dark);
                    position: absolute;
                    left: -18px;
                    top: -63px;
                    border-radius: 90px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 4;
                  }
                }
                &::after {
                  top: auto;
                  bottom: 100%;
                }
              }

              .lines-end {
                strong {
                  position: absolute;
                  right: 80%;
                  margin: -3px 90px;
                }

                &::after {
                  content: "";
                  width: 100%;
                  height: 2px;
                  background: var(--ion-color-dark);
                  right: 154px;
                  top: -27px;
                  bottom: 0;
                  position: absolute;
                }
              }
            }
          }
        }
      }
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
  height: 15rem;
  justify-content: center;
  left: 0;
  position: fixed;
  padding-top: 3rem;
  width: 100%;
  z-index: 30;
`;

export const ButtonGoBack = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 8rem;
  position: fixed;
  left: 50%;
  margin-left: -4rem;
  bottom: 2rem;

  a {
    color: var(--ion-color-light);
    background: var(--ion-color-primary);
    border-radius: 90px;
    font-family: var(--font-family-bold);
    text-decoration: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.6rem;
    line-height: 1.4rem;
    font-size: 1.2rem;
  }
`;
