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
  const [showJobInfo, setShowJobInfo] = useState(false);
  const [showApplicationInfo, setShowApplicationInfo] = useState(false);

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
            <span className="application_status">
              <span className={application.status}></span>
              <p>{application.status}</p>
            </span>
          </header>
          <div className="application_content_wrapper">
            <span
              className="show_job_info"
              onClick={() => setShowJobInfo(!showJobInfo)}>
              <h1>Informações da vaga</h1>
              <FaArrowDown />
            </span>
            <CSSTransition
              in={showJobInfo}
              timeout={250}
              classNames="info"
              unmountOnExit>
              <div className="info_content">
                <div>
                  <h1 className="subtitle">Descrição</h1>
                  <p>{application.jobListingJobId.description}</p>
                </div>
                <div>
                  <h1 className="subtitle">Requisitos</h1>
                  <p>{application.jobListingJobId.requirements}</p>
                </div>
                <div>
                  <h1 className="subtitle">Responsabilidades</h1>
                  <p>{application.jobListingJobId.responsibilities}</p>
                </div>
                <div>
                  <h1 className="subtitle">Benefícios</h1>
                  <p>{application.jobListingJobId.benefits}</p>
                </div>
                <div>
                  <h1 className="subtitle">Tipo de trabalho</h1>
                  <p>{jobTypeMapping[application.jobListingJobId.jobType]}</p>
                </div>
              </div>
            </CSSTransition>
          </div>
          <div>
            <span
              className="show_job_info"
              onClick={() => setShowApplicationInfo(!showApplicationInfo)}>
              <h1>Informações da candidatura</h1>
              <FaArrowDown />
            </span>
            <CSSTransition
              in={showApplicationInfo}
              timeout={250}
              classNames="info"
              unmountOnExit>
              <div className="info_content jobs_info_div">
                <div>
                  <h1 className="subtitle">Currículo</h1>
                  <p>{application.resume}</p>
                </div>
                <div>
                  <h1 className="subtitle">Carta de apresentação</h1>
                  <p>{application.coverLetter}</p>
                </div>
              </div>
            </CSSTransition>
          </div>
        </div>
      ))}
    </ApplicationModalContainer>
  );
};