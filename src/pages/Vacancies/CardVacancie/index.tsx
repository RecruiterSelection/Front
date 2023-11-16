import { CardStyled } from "./style";
// title, type, time, Description, requireds

interface IVacancieProps {
  vacancie: any;
}
export const CardVacancie = ({ vacancie }: IVacancieProps) => {
  return (
    <CardStyled>
      <div>
        <h2>{vacancie.title}</h2>
        <span>{vacancie.time}</span>
        <span>{vacancie.type}</span>
      </div>
      <div>
        <h2>Descrição</h2>
        <span>{vacancie.description}</span>
      </div>
      <div>
        <h2>Requisitos</h2>
        <span>{vacancie.requireds}</span>
      </div>
    </CardStyled>
  );
};
