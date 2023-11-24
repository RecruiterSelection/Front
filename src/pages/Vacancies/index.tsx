import { HeaderComponents } from "../../components/Header";
import { VacanciesStyledContainer } from "./style";
import { IoSearch } from "react-icons/io5";
import { VacanciesComponent } from "../../components/Vacancies";
import { FormEvent, useState } from "react";
import { FooterComponent } from "../../components/Footer";

export const VacanciesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
      <FooterComponent />
    </>
  );
};
