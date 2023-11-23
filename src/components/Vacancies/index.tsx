import { useContext, useEffect } from "react"
import { StyledVacanciesContainer, StyledVacancyBox } from "./style"
import { IVacanciesContext } from "../../providers/VacancieContext/types"
import { VacancieContext } from "../../providers/VacancieContext"

export const VacanciesComponent = () => {
 const {getAllVacancies, vacancies} = useContext<IVacanciesContext>(VacancieContext)
    
 useEffect(() => {
      getAllVacancies()
    }, [])

    const formatJobType = (jobType:string) => {
        return jobType.split("_").map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(" ")
    }

    const formatText = (text:string, maxLenght:number) =>{
        if(text.length > maxLenght){
            return text.substring(0, maxLenght) + "..."
        }
        return text;
    }
    
    return (
        <StyledVacanciesContainer>
        {vacancies.map((vacancy, index) => (
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
    )
}