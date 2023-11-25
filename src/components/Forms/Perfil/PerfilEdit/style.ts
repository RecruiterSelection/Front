import styled from "styled-components";

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
    background-color: black;

    > div {
      border: 1px solid;
      border: solid 1px;
      border-radius: 6px;
    }
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
