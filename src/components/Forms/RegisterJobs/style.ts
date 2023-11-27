import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 8px;

  padding: 15px;

  width: 400px;

  button {
    width: 100%;
    padding: 10px;
  }

  span {
    color: red;
  }
`;
