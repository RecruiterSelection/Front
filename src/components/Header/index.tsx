import logo from "../../assets/logo.png";
import { HeaderContainerStyled, LogoLinkStyled, NavStyled } from "./style";
import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";

export const HeaderComponents = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const toggleMenu = () => {
    setMenuIsVisible(!menuIsVisible);
  };

  return (
    <HeaderContainerStyled>
      <LogoLinkStyled to="/">
        <img src={logo} alt="Logo" />
      </LogoLinkStyled>
      <RiMenuFill onClick={toggleMenu} className="mobile" />
      <NavStyled isVisible={menuIsVisible}>
        <button>SOBRE NÓS</button>
        <button>CONTATO</button>
        <button>ENTRAR</button>
      </NavStyled>
    </HeaderContainerStyled>
  );
};
