import { Link } from "react-router-dom";
import styled from "styled-components";

interface NavStyledProps {
  isVisible: boolean;
}

export const HeaderContainerStyled = styled.header`
  background-color: var(--brand--brand1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;

  .mobile {
    display: initial;
    margin-right: 10px;
  }

  button {
    background-color: transparent;
    border: none;
  }

  @media (min-width: 1024px) {
    .mobile {
      display: none;
    }
  }
`;

export const LogoLinkStyled = styled(Link)`
  img {
    height: 63px;
  }
`;

export const NavStyled = styled.nav<NavStyledProps>`
  background-color: var(--brand--brand1);
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 67px;
  left: 0;
  right: 0;
  gap: 10px;
  padding: 10px;

  button {
    color: var(--white-fixed);
    cursor: pointer;

    &:nth-child(3) {
      background-color: var(--brand--brand2);
      padding: 5px;
      border-radius: 5px;
      width: 30%;
      align-self: center;

      :hover {
        background-color: var(--white-fixed);
      }
    }
  }

  @media (min-width: 1024px) {
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: static;
  }
`;
