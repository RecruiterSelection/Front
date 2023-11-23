import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: var(--text--body6);
    font-weight: 500;
    color: var(--grey--scale--grey-0);
    margin-bottom: 20px;
  }

  button {
    width: 30%;
    padding: 5px 20px;
    color: var(--white-fixed);
    font-size: var(--text--body1);
    font-weight: 500;
    border: none;
    border-radius: 4px;
    background-color: var(--brand--brand1);

    &:hover {
      background-color: var(--brand--brand2);
    }
  }
`;

export const ErrorMessage = styled.span`
  font-size: var(--text--body0);
  color: var(--feedback--alert-1);
  margin-top: -8px;
  align-self: end;
`;
