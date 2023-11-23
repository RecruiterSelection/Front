import { HeaderComponents } from "../../components/Header";
import { VacanciesStyledContainer } from "./style";
import { IoSearch } from "react-icons/io5";
import { VacanciesComponent } from "../../components/Vacancies";
import { useState } from "react";

export const VacanciesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <HeaderComponents />
      <VacanciesStyledContainer>
        <form>
          <IoSearch style={{ color: "black" }} />
          <input
            placeholder="Sua busca aqui"
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Pesquisar</button>
        </form>
        <VacanciesComponent searchTerm={searchTerm} />
      </VacanciesStyledContainer>
    </>
  );
};
