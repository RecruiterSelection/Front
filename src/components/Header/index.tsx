import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { LoginForm } from "../../pages/LoginModal/loginForm";
import { ModalContext } from "../../providers/modal";
import { HeaderContainerStyled, LogoLinkStyled, NavStyled } from "./style";
import { useState, useContext } from "react";
import { RiMenuFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/user/userProvider";
import { DeleteUserModal } from "../Modal/DeleteUser";
import { IoHomeSharp } from "react-icons/io5";

export const HeaderComponents = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const { setModalOpen } = useContext(ModalContext);
  const { logoutUser } = useContext(UserContext);

  const token = localStorage.getItem("@TOKEN");
  const isLoggedIn = !!token;

  const toggleMenu = () => {
    setMenuIsVisible(!menuIsVisible);
  };
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path);
  };

  const handleDelete = () => {
    setModalOpen(<DeleteUserModal />);
  };

  const handleProfileClick = async () => {
    setTimeout(() => {
      navigate("/dashBoard");
    }, 0);
  };

  const renderHomeLink = () => {
    if (window.location.pathname === "/dashBoard") {
      return <IoHomeSharp className="home" />;
    } else if (window.location.pathname === "/") {
      return <span onClick={handleProfileClick}>PERFIL</span>;
    }
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
            <Link to="/" onClick={() => navigate("/")}>
              {renderHomeLink()}
            </Link>
            <button onClick={() => navigateTo("/vacancies")}>VAGAS</button>
            <button onClick={() => handleDelete()}>DELETAR CONTA</button>
            <button onClick={() => logoutUser()}>SAIR</button>
          </>
        ) : (
          <>
            <button onClick={() => navigateTo("/vacancies")}>VAGAS</button>
            <Link to={"/AboutUs"}>SOBRE NÓS</Link>
            <button onClick={() => navigateTo("/contact")}>CONTATO</button>
            <button onClick={() => setModalOpen(<LoginForm />)}>ENTRAR</button>
          </>
        )}
      </NavStyled>
    </HeaderContainerStyled>
  );
};
