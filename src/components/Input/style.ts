import { styled } from "styled-components";

export const FieldStyled = styled.fieldset`
  width: 100%;
  border-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-size: var(--text--body5);
    font-weight: 500;
    color: var(--grey--scale--grey-0);
  }

  input {
    border-radius: 0.25rem;
    border: 1px solid var(--random--random-1);
    padding: 0.5rem;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s ease-in-out;

    &:focus {
      border-color: var(--brand--brand2);
    }

    ::placeholder {
      font-size: 1rem;
      outline: none;
    }
  }
`;
