import { HeaderComponents } from "../../components/Header";
import { CardVacancie } from "./CardVacancie";
import { VacanciesStyle } from "./style";
import { IoSearch } from "react-icons/io5";

export const VacanciesPage = () => {
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
          <CardVacancie />
          <CardVacancie />
          <CardVacancie />
          <CardVacancie />
        </ul>
      </VacanciesStyle>
    </>
  );
};
