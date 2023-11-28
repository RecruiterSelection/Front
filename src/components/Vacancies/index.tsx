import { useContext, useEffect } from "react";
import { StyledVacanciesContainer, StyledVacancyBox } from "./style";
import {
  IVacancie,
  IVacanciesContext,
} from "../../providers/VacancieContext/types";
import { VacancieContext } from "../../providers/VacancieContext";
import { LoginForm } from "../../pages/LoginModal/loginForm";
import { ModalContext } from "../../providers/modal";
import { ApplyForJobModal } from "../applyForJobModal";

interface IsearchTerm {
  searchTerm: string;
}

export const VacanciesComponent = (props: IsearchTerm) => {
  const { searchTerm } = props;
  const { getAllVacancies, vacancies, totalPages } =
    useContext<IVacanciesContext>(VacancieContext);

  const { setModalOpen } = useContext(ModalContext);

  const token = localStorage.getItem("@TOKEN");
  const isLoggedIn = !!token;

  useEffect(() => {
    getAllVacancies("1", "100");
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

  const handleClickLoggedIn = (vacancies: IVacancie[], vacancyId: number) => {
    setModalOpen(
      <ApplyForJobModal vacancies={vacancies} vacancyId={vacancyId} />
    );
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
              <StyledVacancyBox key={index} id={vacancy.jobId.toString()}>
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
                  {isLoggedIn ? (
                    <button
                      className="vacancy_button"
                      onClick={() =>
                        handleClickLoggedIn(vacancies, vacancy.jobId)
                      }>
                      {" "}
                      Candidatar-se{" "}
                    </button>
                  ) : (
                    <button
                      className="vacancy_button"
                      onClick={() => setModalOpen(<LoginForm />)}>
                      Ver mais
                    </button>
                  )}
                </div>
              </StyledVacancyBox>
            ))}
      </StyledVacanciesContainer>
    </>
  );
};
