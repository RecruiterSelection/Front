import {
  AllRightsReservedWrapper,
  ButtonWrapper,
  StyledFooter as FooterWrapper,
  LogoWrapper,
  StyledFooterContainer,
} from "./style";
import logo from "../../assets/logo-removebg-preview (1).png";
import { FaArrowUp } from "react-icons/fa";

export const FooterComponent = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterWrapper>
      <StyledFooterContainer>
        <LogoWrapper>
          <img src={logo} alt="Talent Hub logo" id="logo" />
        </LogoWrapper>
        <AllRightsReservedWrapper>
          <h4> {currentYear} - Talent Hub - Todos os direitos reservados</h4>
        </AllRightsReservedWrapper>
        <ButtonWrapper>
          <button onClick={scrollToTop}>
            <FaArrowUp style={{ color: "white" }} />
          </button>
        </ButtonWrapper>
      </StyledFooterContainer>
    </FooterWrapper>
  );
};
