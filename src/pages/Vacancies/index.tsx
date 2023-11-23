import { HeaderComponents } from "../../components/Header";
import { VacanciesStyledContainer } from "./style";
import { IoSearch } from "react-icons/io5";
import { VacanciesComponent } from "../../components/Vacancies";
import { useState } from "react";

export const VacanciesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");

  const submitSearch = (event) => {
    event.preventDefault();
    console.log(searchTerm);
    setSearchTerm(inputValue);
  };

  return (
    <>
      <HeaderComponents />
      <VacanciesStyledContainer>
        <form onSubmit={submitSearch}>
          <IoSearch style={{ color: "black" }} />
          <input
            placeholder="Sua busca aqui"
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <button type="submit">Pesquisar</button>
        </form>
        <VacanciesComponent searchTerm={searchTerm} />
      </VacanciesStyledContainer>
    </>
  );
};
