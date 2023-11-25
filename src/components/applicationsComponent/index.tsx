import { ApplicationsContext } from "../../providers/applicationsProvider";
import { ModalContext } from "../../providers/modal";
import { ApplicationModal } from "../applicationsModal";
import { StyledApplicationsContainer } from "./style";
import { useContext, useEffect } from "react";

export const ApplicationsComponent: React.FC = () => {
  const { getAllApplications, applicationsData } =
    useContext(ApplicationsContext);

  const { setModalOpen } = useContext(ModalContext);

  useEffect(() => {
    getAllApplications();

    console.log(applicationsData, "applicationsData");
  }, []);

  return (
    <StyledApplicationsContainer>
      <header>
        <h1>Minhas candidaturas</h1>
      </header>
      <ul>
        {applicationsData.map((application) => (
          <li
            className="application_li"
            key={application.applicationId}
            id={application.applicationId.toString()}
            onClick={() =>
              setModalOpen(
                <ApplicationModal
                  applicationModalId={application.applicationId}
                  applicationsData={applicationsData}
                  getAllApplications={getAllApplications}
                />
              )
            }>
            <div className="application_title">
              <p>{application.jobListingJobId.title}</p>
              <small>{application.jobListingJobId.location}</small>
            </div>
            <div className="application_status">
              <span className={application.status}></span>
              <p>{application.status}</p>
            </div>
          </li>
        ))}
      </ul>
    </StyledApplicationsContainer>
  );
};
