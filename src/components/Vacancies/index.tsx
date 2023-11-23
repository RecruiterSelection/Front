import { useContext, useEffect } from "react";
import { StyledVacanciesContainer, StyledVacancyBox } from "./style";
import { IVacanciesContext } from "../../providers/VacancieContext/types";
import { VacancieContext } from "../../providers/VacancieContext";

interface IsearchTerm {
  searchTerm: string;
}

export const VacanciesComponent = (props: IsearchTerm) => {
  const { searchTerm } = props;
  const { getAllVacancies, vacancies, totalPages } =
    useContext<IVacanciesContext>(VacancieContext);

  useEffect(() => {
    getAllVacancies("1", totalPages?.toString());
  }, [searchTerm, getAllVacancies]);

  const formatJobType = (jobType: string) => {
    return jobType
      .split("_")
      .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
      .join(" ");
  };

  const formatText = (text: string, maxLenght: number) => {
    if (text.length > maxLenght) {
      return text.substring(0, maxLenght) + "...";
    }
    return text;
  };

  return (
    <>
      <StyledVacanciesContainer>
        {Array.isArray(vacancies) &&
          vacancies
            .filter((vacancy) => {
              if (!searchTerm) return true;
              return (
                vacancy.title
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                vacancy.jobType
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                vacancy.description
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              );
            })
            .map((vacancy, index) => (
              <StyledVacancyBox key={index}>
                <h2>{vacancy.title}</h2>
                <div className="jobType_wrapper">
                  <small>{formatJobType(vacancy.jobType)}</small>
                  <small>{vacancy.location}</small>
                </div>
                <div className="description_wrapper">
                  <h2>Descrição</h2>
                  <p>{formatText(vacancy.description, 100)}</p>
                </div>
                <div className="requirements_wrapper">
                  <h2>Requisitos</h2>
                  <p>{formatText(vacancy.responsibilities, 100)}</p>
                </div>
                <div className="button_wrapper">
                  <button className="vacancy_button"> Ver mais </button>
                </div>
              </StyledVacancyBox>
            ))}
      </StyledVacanciesContainer>
    </>
  );
};
