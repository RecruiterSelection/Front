import { HeaderComponents } from "../../components/Header";
import home from "../../assets/home.svg";
import { ContainerButton, ContainerPhrase, MainStyled, SectionStyled } from "./style";

export const HomePage = () => {
  return (
    <>
      <HeaderComponents />
      <MainStyled>
        <img src={home} alt="homem sentado com uma escrivaninha e computador" />
        <SectionStyled>
          <ContainerPhrase>
            <h2>DESCUBRA</h2>
            <p>as melhores vagas e faça sua carreira decolar</p>
          </ContainerPhrase>
          <ContainerButton>
            <button>ENTRAR</button>
          </ContainerButton>
        </SectionStyled>
      </MainStyled>
    </>
  );
};
