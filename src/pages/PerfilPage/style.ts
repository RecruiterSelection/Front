import styled from "styled-components";

export const ContaiderPerfilStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  > form {
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

export const PerfilStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
  position: relative;
  gap: 50px;

  input {
    border-radius: 6px;
    border: none;
    font-size: 16px;
    padding: 5px 10px;
  }

  .flexRow {
    display: flex;
    gap: 20px;
    flex-direction: row;
  }

  > div {
    border: solid 1px;
    border-radius: 6px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    width: 500px;
    max-width: 90%;

    padding: 10px;
  }

  select {
    border-radius: 6px;
    padding: 2px;
  }

  img {
    width: 150px;
    border-radius: 50%;
    border: 1px solid;
  }

  button {
    width: 25px;
    height: 25px;

    position: relative;
    background: none;
    color: white;
    border: none;
  }

  button:hover {
    opacity: 1;
  }
`;
