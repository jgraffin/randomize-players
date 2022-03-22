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

      .list {
        list-style-type: ordinal;
        padding: 0;
        position: relative;

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
          width: 4rem;
          margin: 2rem 0.5rem 2rem 0.5rem;
          position: relative;
        }

        &.list-3 {
          li {
            &:nth-child(3) {
              margin-left: 5rem;
            }

            &:nth-child(4),
            &:nth-child(5),
            &:nth-child(6) {
              position: absolute;
              right: 0;
              top: 0;
            }

            &:nth-child(5) {
              top: 3rem;
            }

            &:nth-child(6) {
              top: 6rem;
              right: 5rem;
            }
          }
        }

        &.list-4 {
          li {
            &:nth-child(3),
            &:nth-child(4) {
              position: absolute;
              right: 0;
              top: 0;
            }

            &:nth-child(3) {
              top: 0;
            }

            &:nth-child(4) {
              top: 3rem;
            }
          }
        }

        &.list-5 {
          li {
            &:nth-child(3) {
              margin-left: 5rem;
            }

            &:nth-child(4),
            &:nth-child(5) {
              position: absolute;
              right: 0;
              top: 0;
            }

            &:nth-child(4) {
              top: 0;
            }

            &:nth-child(5) {
              top: 3rem;
            }
          }
        }

        &.list-6 {
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
                background: red;
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
                    background: red;
                    position: absolute;
                    left: 0;
                    top: 0;
                    border-radius: 90px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  }

                  &::after {
                    content: "";
                    width: 4rem;
                    height: 2px;
                    left: 25px;
                    top: 16px;
                    background: red;
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

                  &::after {
                    content: "FINAL";
                    width: 4rem;
                    padding: 0.4rem;
                    background: red;
                    position: absolute;
                    left: 0;
                    top: -12px;
                    border-radius: 90px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  }

                  &:before {
                    content: "";
                    width: 5rem;
                    height: 12rem;
                    position: absolute;
                    left: 0;
                    top: -160px;
                    background: url("./assets/images/trophy.png") no-repeat
                      center center;
                    background-size: 38%;
                  }
                }

                &::after {
                  content: "";
                  width: 30%;
                  height: 2px;
                  background: red;
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
                    background: red;
                    top: auto;
                    left: 15px;
                    bottom: 100%;
                    position: absolute;
                  }

                  &::after {
                    content: "5";
                    width: 2rem;
                    height: 2rem;
                    background: red;
                    position: absolute;
                    left: 0;
                    top: -12px;
                    border-radius: 90px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  }
                }

                &::after {
                  bottom: 100%;
                  top: auto;
                }
              }
            }

            /* + li {
              .list__pseudo--before__inner {
                position: absolute;
                height: 7rem;
                right: -23px;
                top: -38px;
                left: 100%;
                width: 18%;

                strong {
                  width: 2.5rem;
                  height: 2.5rem;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  position: absolute;
                  right: auto;
                  left: -19px;
                  top: 0;
                  background: red;
                  border-radius: 90px;
                }

                &::before,
                &::after {
                  content: "";
                  width: 100%;
                  height: 2px;
                  position: absolute;
                  left: 100%;
                  top: 20px;
                  background: red;
                }

                &::after {
                  width: 2px;
                  height: 100%;
                  right: 0;
                  left: 200%;
                }
              }
            } */

            /* &:nth-child(2) {
              .list__pseudo {
                &::after {
                  top: 0;
                }
              }
            } */

            /* &:nth-child(3) {
              margin-left: 3.4rem;

              .list__pseudo.list__pseudo--before {
                &::after {
                  display: none;
                }

                .list__pseudo--before__inner {
                  top: -55px;

                  &::before {
                    width: 500%;
                  }

                  &::after {
                    display: none;
                  }
                }
              }
            } */

            /* &:nth-child(4),
            &:nth-child(5),
            &:nth-child(6) {
              position: absolute;
              right: 0;
              top: 0;
            } */

            /* &:nth-child(4) {
              top: 0;

              .list__pseudo--before {
                &::before {
                  left: auto;
                  right: 100%;
                  top: 20px;
                }
              }
            }

            &:nth-child(5) {
              top: 3rem;

              .list__pseudo--before {
                &::before {
                  left: auto;
                  right: 100%;
                  top: 20px;
                }
              }
            }

            &:nth-child(6) {
              top: 6rem;
              right: 5rem;

              .list__pseudo--before {
                &::before {
                  left: auto;
                  right: 100%;
                  top: 20px;
                }
              }
            } */
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
  height: 10rem;
  justify-content: center;
  left: 0;
  position: fixed;
  padding-top: 3rem;
  width: 100%;
  z-index: 30;
`;
