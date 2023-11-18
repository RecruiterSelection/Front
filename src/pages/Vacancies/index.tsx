import { HeaderComponents } from "../../components/Header";
import { CardVacancie } from "./CardVacancie";
import { VacanciesStyle } from "./style";
import { IoSearch } from "react-icons/io5";
import { useContext } from "react";
import { VacancieContext } from "../../providers/VacancieContext";

export const VacanciesPage = () => {
  const { vacancies } = useContext(VacancieContext);

  return (
    <>
      <HeaderComponents />
      <VacanciesStyle>
        <form>
          <IoSearch />
          <input placeholder="Sua busca aqui" type="text" />
          <button type="submit">Pesquisar</button>
        </form>
        <ul>
          {vacancies.map((vacancie: any) => (
            <CardVacancie vacancie={vacancie} />
          ))}
        </ul>
      </VacanciesStyle>
    </>
  );
};
