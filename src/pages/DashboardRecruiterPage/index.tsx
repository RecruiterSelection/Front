import { DashboardRecruiterContainer, StyledUserDataContainer } from "./style";
import avatar from "../../assets/avator-img.jpg";
import { FaEdit } from "react-icons/fa";
import { FooterComponent } from "../../components/Footer";

export const DashboardRecruiter: React.FC = () => {
  return (
    <>
      <DashboardRecruiterContainer>
        <StyledUserDataContainer>
          <div id="recruiter_info_div">
            <div>
              <h1>Nome</h1>
              <p>Email</p>
            </div>
            <div>
              <img src={avatar} alt="user avatar" />
            </div>
          </div>
          <div className="other_infos_div">
            <div id="first_inside_other_infos_div">
              <div className="address_div">
                <h1>Endereço</h1>
                <p>Endereço</p>
              </div>
              <div className="education_div">
                <h1>Educação</h1>
                <p>Educação</p>
              </div>
              <div className="experience_div">
                <h1>Experiência</h1>
                <p>Experiência</p>
              </div>
              <div className="references_div">
                <h1>Referências</h1>
                <p>Referências</p>
              </div>
              <div className="phone_div">
                <h1>Telefone</h1>
                <p>Telefone</p>
              </div>
            </div>
            <div id="icon_other_infos_div">{<FaEdit size="24px" />}</div>
          </div>
        </StyledUserDataContainer>
      </DashboardRecruiterContainer>
      <FooterComponent />
    </>
  );
};
