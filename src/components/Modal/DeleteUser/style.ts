import styled from "styled-components";

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  h1 {
    font-size: var(--text--body6);
    font-weight: 500;
    color: var(--grey--scale--grey-0);
  }

  div {
    display: flex;
    justify-content: space-around;

    button {
      color: var(--white-fixed);
      font-size: var(--text--body1);
      font-weight: 500;
      border: none;
      border-radius: 4px;
      padding: 10px 20px;
      width: 40%;
      background-color: var(--brand--brand1);

      &:hover {
        background-color: var(--random--random-1);
      }
    }
  }
`;
