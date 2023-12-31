import styled from "styled-components";

export const VacanciesStyle = styled.main`
  background-color: var(--brand--brand1);
  min-height: calc(100vh - 87px);
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    opacity: 80%;
    display: flex;
    justify-content: center;

    background-color: white;
    padding: 10px;
    border-radius: 12px;

    width: 600px;
    max-width: 90%;

    svg {
      align-self: center;
      height: 30px;
      width: 30px;
    }

    input {
      border: none;
      background-color: white;
      width: 100%;
      margin: 0 10px;
      padding: 10px;
    }

    button {
      border-radius: 6px;
      border: 2px solid transparent;
    }

    button:hover {
      border: 2px solid;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    margin-top: 60px;
    max-width: 1000px;
    gap: 20px;
  }
`;
