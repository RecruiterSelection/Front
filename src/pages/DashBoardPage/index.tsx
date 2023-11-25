import { FooterComponent } from "../../components/Footer";
import { StyledDashboardContainer, StyledUserDataContainer } from "./style";
import { useContext, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import avatar from "../../assets/avator-img.jpg";
import { TechSkillsContext } from "../../providers/techSkillsProvider";
import { CandidateTechSkillsContext } from "../../providers/candidateTechSkillProvider";
import { CandidateContext } from "../../providers/user/perfilCandidato/candidatesProvider";
import { ModalContext } from "../../providers/modal";
import { SkillsModal } from "../../components/SkillsModal";
import { UserContext } from "../../providers/user/userProvider";
import { useNavigate } from "react-router";
import { FaEdit } from "react-icons/fa";
import { EditCandidateInfoModal } from "../../components/editCandidateInfoModal";
import { ApplicationsComponent } from "../../components/applications";

export const DashBoardPage = () => {
  const { candidateWithEmail, getCandidateByEmail } =
    useContext(CandidateContext);
  // const { techSkills, getTechSkills } = useContext(TechSkillsContext);
  const { getCandidateTechSkills } = useContext(CandidateTechSkillsContext);
  const { setModalOpen } = useContext(ModalContext);
  const { userData } = useContext(UserContext);

  const userMail = localStorage.getItem("@userMail");

  const navigate = useNavigate();

  if (userData?.firstAccess) {
    navigate("/perfil");
  }

  useEffect(() => {
    if (userMail) {
      getCandidateByEmail(userMail);
    }
    console.log(userMail);

    getCandidateTechSkills();
  }, [userMail, userData]);

  return (
    <>
      <StyledDashboardContainer>
        <StyledUserDataContainer>
          <div id="candidate_info_div">
            <div>
              <h1>
                {candidateWithEmail?.firstName} {candidateWithEmail?.lastName}
              </h1>
              <p>{candidateWithEmail?.user.email}</p>
            </div>
            <div>
              <img src={avatar} alt="user avatar" />
            </div>
          </div>

          <div className="other_infos_div">
            <div id="first_inside_other_infos_div">
              <div className="address_div">
                <h1>Endereço</h1>
                <p>{candidateWithEmail?.address}</p>
              </div>
              <div className="education_div">
                <h1>Educação</h1>
                <p>{candidateWithEmail?.education}</p>
              </div>
              <div className="experience_div">
                <h1>Experiência</h1>
                <p>{candidateWithEmail?.experience}</p>
              </div>
              <div className="references_div">
                <h1>Referências</h1>
                <p>{candidateWithEmail?.references}</p>
              </div>
            </div>
            <div
              id="icon_other_infos_div"
              onClick={() =>
                setModalOpen(
                  <EditCandidateInfoModal
                    candidateWithEmail={candidateWithEmail}
                  />
                )
              }>
              {<FaEdit size="24px" />}
            </div>
          </div>
          <div className="skills_div">
            <button
              onClick={() => {
                setModalOpen(<SkillsModal />);
              }}>
              Minhas Habilidades
            </button>
          </div>
        </StyledUserDataContainer>
        <ApplicationsComponent />
      </StyledDashboardContainer>

      <FooterComponent />
    </>
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
