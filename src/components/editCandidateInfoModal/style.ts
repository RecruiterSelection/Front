import styled from "styled-components";

const phoneBreakePoint = "740px";

export const StyledEditCandidateInfoModalContainer = styled.div`
  color: black;
  display: flex;
  gap: 1rem;
  width: 100%;
  min-width: 33vw;

  display: flex;
  gap: 1rem;
  flex-direction: column;

  @media (max-width: ${phoneBreakePoint}) {
    width: 100%;
    min-width: 250px;
  }

  form {
    width: inherit;
    min-width: inherit;

    .inputs_wrapper > fieldset {
      width: 90%;
    }
  }

  .button_wrapper {
    display: flex;
    justify-content: center;

    button {
      color: var(--white-fixed);
      font-size: var(--text--body0);
      padding: 10px 20px;
      background-color: var(--random--random-1);
      border: none;
      border-radius: 4px;
      align-self: center;

      margin-top: 1.5rem;
    }

    button:hover {
      background-color: var(--random--random-2);
      transition: 0.2s;
    }
  }
`;
