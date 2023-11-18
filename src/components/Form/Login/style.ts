import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: var(--text--body4);
    font-weight: 500;
    align-self: flex-start;
    margin-bottom: 20px;
  }

  a {
    align-self: flex-end;
    font-size: var(--text--body5);
    font-weight: 500;
    color: var(--grey--scale--grey-2);
  }

  p {
    font-size: var(--text--body5);
  }
`;

export const ButtonStyled = styled.button`
  width: 100%;
  font-size: var(--text--body1);
  font-weight: 600;
  color: var(--white-fixed);
  border: none;
  border-radius: 4px;
  padding: 10px;
  margin-top: 30px;

  &:nth-of-type(1) {
    background-color: var(--random--random-1);
    margin-bottom: 25px;
  }

  &:nth-of-type(2) {
    background-color: var(--brand--brand2);
  }
`;

export const ErrorMessage = styled.span`
  font-size: var(--text--body0);
  color: var(--feedback--alert-1);
  margin-top: -8px;
  align-self: end;
`;
