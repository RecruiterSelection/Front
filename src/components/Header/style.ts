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
  align-items: center;
  position: absolute;
  top: 67px;
  left: 0;
  right: 0;
  gap: 10px;
  padding: 10px;

  a {
    color: var(--white-fixed);
    font-size: var(--text--body0);
    transition: transform 0.3s;

    &:hover {

      transform: scale(1.2);
    }

    .home {
      font-size: 20px;

    }
  }

  button {
    font-size: var(--text--body0);
    color: var(--white-fixed);
    cursor: pointer;
    transition: transform 0.3s;


    &:nth-of-type(3) {

      background-color: var(--brand--brand2);
      padding: 5px;
      border-radius: 5px;
      width: 20%;
      align-self: center;

      &:hover {
        background-color: var(--brand--brand4);
        transform: scale(1);
        font-weight: 600;
      }
    }

    &:hover {
      transform: scale(1.2);
      transition: 0.2s;
    }
  }

  @media (min-width: 1024px) {
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: static;
    padding-right: 30px;
  }
`;
