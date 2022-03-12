import styled from "styled-components";

export const ContainerList = styled.div`
  display: block;
  padding: 0 2rem;
  width: 100%;

  ion-item {
    background-color: #d8d8d8;
    border-radius: 1rem;
    width: 100%;
    --padding-end: 0px;
    --inner-padding-end: 0px;
  }

  h1,
  h5 {
    padding: 0;
    margin: 0;
  }
`;
