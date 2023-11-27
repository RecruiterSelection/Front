import { styled } from "styled-components";

export const SelectStyle = styled.select`
  display: flex;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid var(--random--random-1);
  border-radius: 4px;
  transition: border-color 0.3s ease-in-out;
  &:focus {
    border-color: var(--brand--brand2);
  }
`;
