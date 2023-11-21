import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { LoginForm } from "../../pages/LoginPage/loginForm";
import { ModalContext } from "../../providers/modal";
import { HeaderContainerStyled, LogoLinkStyled, NavStyled } from "./style";
import { useState, useContext } from "react";
import { RiMenuFill } from "react-icons/ri";

export const HeaderComponents = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const { setModalOpen } = useContext(ModalContext);

  const toggleMenu = () => {
    setMenuIsVisible(!menuIsVisible);
  };

  // const handleOpenModal = () => {
  //   openModal("login");
  // };

  return (
    <HeaderContainerStyled>
      <LogoLinkStyled to="/">
        <img src={logo} alt="Logo" />
      </LogoLinkStyled>
      <RiMenuFill onClick={toggleMenu} className="mobile" />
      <NavStyled isVisible={menuIsVisible}>
        <button>VAGAS</button>
        <Link to={"/AboutUs"}>SOBRE NÓS</Link>
        <button>CONTATO</button>
        <button onClick={() => setModalOpen(<LoginForm />)}>ENTRAR</button>
      </NavStyled>
    </HeaderContainerStyled>
  );
};
