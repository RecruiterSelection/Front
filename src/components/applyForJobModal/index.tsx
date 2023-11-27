import { IVacancie } from "../../providers/VacancieContext/types";
import { ApplyForJobContainer } from "./style";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ApplyFormComponent } from "./ApplyForm";

interface IApplyForJobModal {
  vacancies: IVacancie[];
  vacancyId: number;
}

const jobTypeMapping = {
  PART_TIME: "Meio Período",
  FULL_TIME: "Período Integral",
  FREELANCE: "Freelance",
};

export const ApplyForJobModal: React.FC<IApplyForJobModal> = ({
  vacancies,
  vacancyId,
}) => {
  const [showApplicationFields, setShowApplicationFields] = useState(false);

  const filteredJob = vacancies.filter(
    (vacancy) => vacancy.jobId === vacancyId
  );

  return (
    <ApplyForJobContainer>
      <div className="modal_wrapper">
        {filteredJob.map((vacancy) => (
          <div className="job_wrapper">
            <h1>{vacancy.title}</h1>
            <div className="job_small_wrapper">
              <small>
                <strong> {jobTypeMapping[vacancy.jobType]} </strong>
              </small>
              <small>{vacancy.location}</small>
            </div>
            <div className="job_inside_wrapper">
              <h1 className="subtitle">Descrição</h1>
              <p>{vacancy.description}</p>
            </div>
            <div className="job_inside_wrapper">
              <h1 className="subtitle">Requisitos</h1>
              <p>{vacancy.requirements}</p>
            </div>
            <div className="job_inside_wrapper">
              <h1 className="subtitle">Responsabilidades</h1>
              <p>{vacancy.responsibilities}</p>
            </div>
            <div className="job_inside_wrapper">
              <h1 className="subtitle">Benefícios</h1>
              <p>{vacancy.benefits}</p>
            </div>
            <div className="button_wrapper">
              <button
                onClick={() =>
                  setShowApplicationFields(!showApplicationFields)
                }>
                {showApplicationFields ? "Voltar " : "Candidatar-se"}
              </button>
            </div>
          </div>
        ))}
        <div>
          <CSSTransition
            in={showApplicationFields}
            timeout={600}
            classNames="info"
            unmountOnExit>
            <div>
              <ApplyFormComponent vacancyId={vacancyId} />
            </div>
          </CSSTransition>
        </div>
      </div>
    </ApplyForJobContainer>
  );
};
