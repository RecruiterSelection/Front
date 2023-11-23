import { HeaderComponents } from "../../components/Header";
import home from "../../assets/home.svg";
import {
  ContainerButton,
  ContainerPhrase,
  MainStyled,
  SectionStyled,
} from "./style";
import { ModalContext } from "../../providers/modal";
import { useContext } from "react";
import { LoginForm } from "../LoginModal/loginForm";

export const HomePage = () => {
  const { setModalOpen} = useContext(ModalContext);

  return (
    <>
      <HeaderComponents />
      <MainStyled>
        <div className="inner_section_wrapper">
          <img src={home} alt="homem sentado com uma escrivaninha e computador" />
          <SectionStyled>
            <ContainerPhrase>
              <h2>DESCUBRA</h2>
              <p>as melhores vagas e faça sua carreira decolar</p>
            </ContainerPhrase>
            <ContainerButton>
              <button onClick={() => setModalOpen(<LoginForm />)}>ENTRAR</button>
            </ContainerButton>
          </SectionStyled>
        </div>
      </MainStyled>
    </>
  );
};
