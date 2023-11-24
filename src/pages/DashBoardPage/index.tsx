import { FooterComponent } from "../../components/Footer";
import { CandidateContext } from "../../providers/user/perfilCandidato/userProvider";
import { StyledDashboardContainer, StyledUserDataContainer } from "./style";
import { useContext, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import avatar from "../../assets/avator-img.jpg";
import { TechSkillsContext } from "../../providers/techSkillsProvider";

export const DashBoardPage = () => {
  const { candidateWithEmail, getCandidateByEmail } =
    useContext(CandidateContext);
  const { techSkills, getTechSkills } = useContext(TechSkillsContext);

  const [showCandidateInfo, setShowCandidateInfo] = useState(false);
  const userMail = localStorage.getItem("@userMail");

  useEffect(() => {
    if (userMail) {
      getCandidateByEmail(userMail);
    }
    console.log(userMail);
    getTechSkills();
  }, [userMail]);

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
          <div>{candidateWithEmail?.skills}</div>
          <div>
            <h1>Minhas Habilidades</h1>
          </div>
          {/* <button onClick={() => setShowCandidateInfo(!showCandidateInfo)}>
            {showCandidateInfo ? "Ocultar Informações" : "Mostrar Informações"}
          </button> */}
          {/* <CSSTransition
            in={showCandidateInfo}
            timeout={250}
            classNames="info"
            unmountOnExit>
            <p></p>
          </CSSTransition> */}
        </StyledUserDataContainer>
      </StyledDashboardContainer>
      <FooterComponent />
    </>
  );
};
