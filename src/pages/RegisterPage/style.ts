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
    color: var(--grey--scale--grey-0);
  }

  button {
    width: 100%;
    padding: 10px 20px;
    margin-top: 25px;
    margin-bottom: 10px;
    font-size: var(--text--body1);
    font-weight: 600;
    color: var(--white-fixed);
    background-color: var(--random--random12);
    border-radius: 4px;
    border: none;
  }
`;

export const DivInput = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  p {
    font-size: var(--text--body5);
    font-weight: 500;
    color: var(--grey--scale--grey-0);
  }
`;

export const DivInputRadio = styled.div`
  display: flex;
  justify-content: space-between;
  
  span {
    font-size: var(--text--body1);
    font-weight: 600;
    color: var(--white-fixed);
    background-color: var(--brand--brand1);
    border-radius: 4px;
    padding: 10px 20px;
  }

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked + span,
  input[type="radio"]:checked + label {
    background-color: var(--random--random-1);
    color: var(--white-fixed);
    border-radius: 4px;
    padding: 10px 20px;
  }
`;

export const ErrorMessage = styled.span`
  font-size: var(--text--body0);
  color: var(--feedback--alert-1);
  margin-top: -8px;
  align-self: end;
`;
