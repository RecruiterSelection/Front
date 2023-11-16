import styled from "styled-components";

export const CardStyled = styled.li`
  border-radius: 6px;
  padding: 15px 20px;
  width: 400px;
  min-height: 250px;
  background-color: white;

  h2 {
    margin: 10px 0;
  }

  span {
    font-size: 12px;
    display: block;
    padding: 2px 0px;
  }

  button {
    margin-top: 10px;
    padding: 15px 45px;
    border-radius: 12px;
    border: none;
    opacity: 0.9;
    background-color: var(--random--random-1);
    color: white;
  }

  button:hover {
    opacity: 1;
  }
`;
