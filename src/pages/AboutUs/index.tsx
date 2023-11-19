import aboutus from "../../assets/aboutus.svg";
import { HeaderComponents } from "../../components/Header";
import { DivStyled, MainStyled, SectionStyled } from "./style";

export const AboutUsPage = () => {
  return (
    <>
      <HeaderComponents />
      <MainStyled>
        <DivStyled>
          <h1>Quem somos nós</h1>
          <img
            src={aboutus}
            alt="homem sentado com uma escrivaninha e computador"
          />
        </DivStyled>
        <SectionStyled>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            enim non nisl lobortis ultricies. Etiam consequat condimentum
            tortor, vitae commodo nulla elementum at. Nullam aliquet pharetra
            nunc, aliquam interdum nisl. In a orci libero. In hac habitasse
            platea dictumst. Morbi non blandit nisi. Pellentesque vel lectus eu
            dolor tempus imperdiet. Etiam pellentesque risus a mi suscipit, at
            scelerisque eros efficitur. Nulla et posuere nibh, mollis lacinia
            eros. Curabitur et est tristique, ultricies lectus in, congue nisl.
            Donec quis ligula imperdiet, porttitor enim ac, ornare dui. Sed
            pulvinar, urna a blandit fermentum, nisi erat efficitur orci,
            interdum imperdiet elit tellus in dui. Vestibulum nunc libero,
            convallis feugiat placerat non, venenatis vitae mi. Praesent euismod
            facilisis dolor id luctus. Vivamus at accumsan massa, sit amet
            placerat urna. Maecenas fermentum, ligula sed interdum tempus, nisi
            mi sollicitudin mi, in aliquet quam tellus nec tortor. Vivamus in
            risus et mauris tristique eleifend sollicitudin a libero. Nam et
            nisi laoreet, maximus mi ac, commodo ligula. Etiam ultricies diam
            quis neque tincidunt vehicula. Praesent sed erat eget est
            pellentesque lacinia in vitae justo. Etiam porttitor tellus sed eros
            porta convallis. Praesent egestas urna et justo venenatis dictum.
            Duis a tellus arcu. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla vel enim non nisl lobortis ultricies. Etiam
            consequat condimentum tortor, vitae commodo nulla elementum at.
            Nullam aliquet pharetra nunc, aliquam interdum nisl. In a orci
            libero. In hac habitasse platea dictumst. Morbi non blandit nisi.
            Pellentesque vel lectus eu dolor tempus imperdiet. Etiam
            pellentesque risus a mi suscipit, at scelerisque eros efficitur.
            Nulla et posuere nibh, mollis lacinia eros. Curabitur et est
            tristique, ultricies lectus in, congue nisl. Donec quis ligula
            imperdiet, porttitor enim ac, ornare dui. Sed pulvinar, urna a
            blandit fermentum, nisi erat efficitur orci, interdum imperdiet elit
            tellus in dui. Vestibulum nunc libero, convallis feugiat placerat
            non, venenatis vitae mi. Praesent euismod facilisis dolor id luctus.
            Vivamus at accumsan massa, sit amet placerat urna. Maecenas
            fermentum, ligula sed interdum tempus, nisi mi sollicitudin mi, in
            aliquet quam tellus nec tortor. Vivamus in risus et mauris tristique
            eleifend sollicitudin a libero. Nam et nisi laoreet, maximus mi ac,
            commodo ligula. Etiam ultricies diam quis neque tincidunt vehicula.
            Praesent sed erat eget est pellentesque lacinia in vitae justo.
            Etiam porttitor tellus sed eros porta convallis. Praesent egestas
            urna et justo venenatis dictum. Duis a tellus arcu.
          </p>
        </SectionStyled>
      </MainStyled>
    </>
  );
};
