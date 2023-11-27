import styled from "styled-components";

export const ApplyFormContainer = styled.div`
  max-width: 600px;
  width: 100%;

  border: var(--grey--scale--grey-7) solid 1px;
  padding: 15px 20px;
  border-radius: 12px;
  text-align: justify;

  margin-top: 2rem;

  form {
    margin: 2rem 0;
    max-width: 400px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .button_wrapper {
    button {
      color: var(--white-fixed);
      font-size: var(--text--body0);
      padding: 10px 30px;
      background-color: var(--random--random-1);
      border: none;
      border-radius: 4px;

      margin-left: 15px;

      button:hover {
        background-color: var(--random--random-2);
      }
    }
  }
`;

export const ErrorMessage = styled.span`
  font-size: var(--text--body0);
  color: var(--feedback--alert-1);
  margin-top: -8px;
  align-self: flex-start;
`;
