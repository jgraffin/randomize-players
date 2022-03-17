import styled, { keyframes } from "styled-components";

const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ContainerList = styled.div`
  display: block;
  padding: 0 2rem;
  width: 100%;

  .content-item {
    animation-duration: 0.4s;
    animation-name: ${slideInUp};
    background: var(--ion-color-primary-contrast);
    --background: var(--ion-color-primary-contrast);
    border-radius: 0.8rem;
    width: 100%;
    display: flex;
    align-items: center;
    height: 5rem;
    padding: 0 1rem;
    --padding-end: 0;
    --inner-padding-end: 0;
    --inner-border-width: 0;
    transition: ease-in-out;

    &__image {
      display: flex;
      align-items: center;
      margin-right: 0.5rem;
      width: 6rem;
      overflow: hidden;

      img {
        flex-shrink: 0;
        width: 100%;
      }
    }

    &__text {
      width: 24rem;

      h1,
      h5 {
        line-height: normal;
        margin: 0;
        padding: 0;
      }

      h1 {
        font-size: 1.15rem;
        font-family: var(--font-family-bold);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 10rem;
      }

      h5 {
        font-size: 0.8rem;
      }
    }

    &__actions {
      align-items: center;
      display: flex;
      justify-content: space-between;
      width: 12rem;

      .content-item__actions__delete {
        --background: transparent;
        --box-shadow: none;
      }
    }

    &:nth-child(1) {
      animation-duration: 0.3s;
    }

    &:nth-child(2) {
      animation-duration: 0.6s;
    }

    &:nth-child(3) {
      animation-duration: 1s;
    }

    &:nth-child(4) {
      animation-duration: 1.2s;
    }

    &:nth-child(5) {
      animation-duration: 1.4s;
    }

    &:nth-child(6) {
      animation-duration: 2s;
    }

    &:nth-child(7) {
      animation-duration: 2.2s;
    }

    &:nth-child(8) {
      animation-duration: 2.4s;
    }

    &:nth-child(9) {
      animation-duration: 2.6s;
    }
  }

  p {
    color: var(--ion-color-light);
    display: block;
    font-size: 1.25rem;
    left: 0;
    line-height: 1.8rem;
    margin-top: -3rem;
    padding: 0 2rem;
    padding: 0 2rem;
    position: fixed;
    text-align: center;
    top: 50%;
    width: 100%;

    strong {
      font-family: var(--font-family-bold);
    }
  }
`;
