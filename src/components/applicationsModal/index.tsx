import { GetManyApplicationsResponse } from "../../providers/applicationsProvider/interfaces";
import { ModalContext } from "../../providers/modal";
import { ApplicationModalContainer } from "./style";
import { useContext, useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

type ApplicationModalProps = {
  applicationsData: GetManyApplicationsResponse;
  applicationModalId: number;
  getAllApplications: () => Promise<GetManyApplicationsResponse | undefined>;
};

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  applicationModalId,
  applicationsData,
  getAllApplications,
}) => {
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    console.log(applicationModalId);
    getAllApplications();
  }, [applicationModalId]);

  const { setModalOpen } = useContext(ModalContext);

  const filteredApplication = applicationsData.filter(
    (application) => application.applicationId === applicationModalId
  );

  const jobTypeMapping = {
    PART_TIME: "Meio Período",
    FULL_TIME: "Período Integral",
    FREELANCE: "Freelance",
  };

  return (
    <ApplicationModalContainer>
      {filteredApplication.map((application) => (
        <div key={application.applicationId} className="modal_wrapper">
          <header>
            <h1>{application.jobListingJobId.title}</h1>
            <small>{application.jobListingJobId.location}</small>
          </header>
          <div className="application_content_wrapper">
            <span
              className="show_job_info"
              onClick={() => setShowInfo(!showInfo)}>
              <h1>Informações da vaga</h1>
              <FaArrowDown />
            </span>
            <CSSTransition
              in={showInfo}
              timeout={250}
              classNames="info"
              unmountOnExit>
              <div className="info_content">
                <div>
                  <h1>Descrição</h1>
                  <p>{application.jobListingJobId.description}</p>
                </div>
                <div>
                  <h1>Requisitos</h1>
                  <p>{application.jobListingJobId.requirements}</p>
                </div>
                <div>
                  <h1>Responsabilidades</h1>
                  <p>{application.jobListingJobId.responsibilities}</p>
                </div>
                <div>
                  <h1>Benefícios</h1>
                  <p>{application.jobListingJobId.benefits}</p>
                </div>
                <div>
                  <h1>Tipo de trabalho</h1>
                  <p>{jobTypeMapping[application.jobListingJobId.jobType]}</p>
                </div>
              </div>
            </CSSTransition>
          </div>
        </div>
      ))}
    </ApplicationModalContainer>
  );
};

{
  /* <button onClick={() => setShowCandidateInfo(!showCandidateInfo)}>
              {showCandidateInfo ? "Ocultar Informações" : "Mostrar Informações"}
            </button> */
}
{
  /* <CSSTransition
              in={showCandidateInfo}
              timeout={250}
              classNames="info"
              unmountOnExit>
              <p></p>
            </CSSTransition> */
}
