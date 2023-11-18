import logo from "../../assets/logo.png";
import { LoginModal } from "../Modais/login";
import { HeaderContainerStyled, LogoLinkStyled, NavStyled } from "./style";
import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";

export const HeaderComponents = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsVisible(!menuIsVisible);
  };

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <HeaderContainerStyled>
      <LogoLinkStyled to="/">
        <img src={logo} alt="Logo" />
      </LogoLinkStyled>
      <RiMenuFill onClick={toggleMenu} className="mobile" />
      <NavStyled isVisible={menuIsVisible}>
        <button>VAGAS</button>
        <button>SOBRE NÓS</button>
        <button>CONTATO</button>
        <button onClick={openLoginModal}>ENTRAR</button>
      </NavStyled>

      <LoginModal open={loginModalOpen} onClose={closeLoginModal} />
    </HeaderContainerStyled>
  );
};
