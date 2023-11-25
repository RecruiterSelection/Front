import styled from "styled-components";

export const ContainerPerfilStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .formStyle {
    padding: 20px 15px;
    border-radius: 8px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-self: center;
    background-color: white;
    border: 1px solid;

    h2 {
      color: var(--brand--brand1);
      text-align: center;
      font-size: 22px;
    }

    fieldset {
      box-sizing: border-box;
    }

    button {
      align-self: center;
      border: solid 1px transparent;
      width: 95%;
      opacity: 0.9;
      border-radius: 8px;
      margin: 15px 10px;
      font-size: 18px;
      padding: 15px;
      background-color: var(--brand--brand1);
      color: var(--brand--brand4);
    }

    button:hover {
      border: solid 1px var(--brand--brand3);
      opacity: 1;
    }
  }
`;
