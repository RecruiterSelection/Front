import styled from "styled-components";

export const MainStyled = styled.main`
  background-color: var(--brand--brand1);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

export const DivStyled = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin-top: 50px;

  img {
    height: 220px;
  }

  h1 {
    font-size: var(--text--body3);
    font-weight: 700;
    color: var(--white-fixed);
  }

  @media (min-width: 1024px) {
    width: 40%;

    img {
      height: 300px;
    }

    h1 {
      font-size: var(--text--body7);
    }
  }

  @media (min-width: 1439px) {
    img {
      height: auto;
    }
  }
`;

export const SectionStyled = styled.div`
  width: 90%;
  margin: 50px 0;

  p {
    font-size: var(--text--body6);
    color: var(--white-fixed);
  }

  @media (min-width: 1024px) {
    width: 40%;
    max-height: 500px;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--brand--brand2);
      border-radius: 4px;
      border: none;
    }
  }
`;
