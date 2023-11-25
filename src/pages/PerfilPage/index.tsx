import { ContainerPerfilStyled } from "./style";
import { FormPerfilCandidate } from "../../components/Forms/Perfil/PerfilCandidate";
import { FormPerfilRecruiter } from "../../components/Forms/Perfil/PerfilRecruiter";
import { FooterComponent } from "../../components/Footer";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/user/userProvider";
import { PerfilStyleEdit } from "../../components/Forms/Perfil/PerfilEdit";

export const PerfilPage = () => {
  const { userData, getUserProfile } = useContext(UserContext);

  useEffect(() => {
    getUserProfile(1);
  }, []);

  return (
    <ContainerPerfilStyled>
      {userData!.firstAccess && (
        <>
          {userData!.role == "RECRUITER" ? (
            <FormPerfilRecruiter />
          ) : (
            <FormPerfilCandidate />
          )}
        </>
      )}

      {userData!.firstAccess == false && <PerfilStyleEdit />}
      <FooterComponent />
    </ContainerPerfilStyled>
  );
};
