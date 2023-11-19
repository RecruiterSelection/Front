import styled from "styled-components";

export const MainStyled = styled.main`
  background-color: var(--brand--brand1);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding-bottom: 50px;

  img {
    height: 355px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;

    img {
      height: 550px;
    }
  }
`;

export const ContainerPhrase = styled.div`
  h2 {
    font-size: var(--text--body2);
    font-weight: 700;
    color: var(--white-fixed);
  }
  p {
    font-size: var(--text--body1);
    font-weight: 600;
    color: var(--white-fixed);
  }
`;

export const SectionStyled = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (min-width: 1024px) {
    width: 22%;
  }
`;

export const ContainerButton = styled.div`
  button {
    color: var(--white-fixed);
    font-size: var(--text--body0);
    padding: 5px 25px;
    background-color: var(--random--random-1);
    border: none;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.55);
    cursor: pointer;
  }
`;
