import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { LoginForm } from "../../pages/LoginPage/loginForm";
import { ModalContext } from "../../providers/modal";
import { HeaderContainerStyled, LogoLinkStyled, NavStyled } from "./style";
import { useState, useContext } from "react";
import { RiMenuFill } from "react-icons/ri";
import { UserContext } from "../../providers/user/userProvider";

export const HeaderComponents = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const { setModalOpen } = useContext(ModalContext);
  const { logoutUser } = useContext(UserContext);

  const token = localStorage.getItem("@TOKEN");
  const isLoggedIn = !!token;

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
        {isLoggedIn ? (
          <>
            <button>EDITAR PERFIL</button>
            <button>DELETAR CONTA</button>
            <button onClick={() => logoutUser()}>Sair</button>
          </>
        ) : (
          <>
            <button>VAGAS</button>
            <Link to={"/AboutUs"}>SOBRE NÓS</Link>
            <button>CONTATO</button>
            <button onClick={() => setModalOpen(<LoginForm />)}>ENTRAR</button>
          </>
        )}
      </NavStyled>
    </HeaderContainerStyled>
  );
};
