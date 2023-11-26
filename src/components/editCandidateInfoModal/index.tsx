import { CandidateContext } from "../../providers/user/perfilCandidato/candidatesProvider";
import {
  IPerfilCandidateWithEmail,
  TUpdatePerfilCandidate,
} from "../../providers/user/perfilCandidato/interface";
import { updateCandidateSchema } from "../../schemas/updateCandidateSchema";
import { StyledEditCandidateInfoModalContainer } from "./style";
import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ModalContext } from "../../providers/modal";
import { Input } from "../Input";

interface EditCandidateInfoModalProps {
  candidateWithEmail: IPerfilCandidateWithEmail | undefined;
}

type TUpdatePerfilCandidate = {
  [key: string]: string | undefined;
};

export const EditCandidateInfoModal: React.FC<EditCandidateInfoModalProps> = ({
  candidateWithEmail,
}) => {
  const { updateCandidateProfile } = useContext(CandidateContext);
  const { setModalOpen } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updateCandidateSchema),
  });

  const handleFormSubmit = async (data: TUpdatePerfilCandidate) => {
    if (data) {
      Object.keys(data).forEach((key: string) => {
        const value = data[key as keyof TUpdatePerfilCandidate];
        if (value === "") {
          delete data[key as keyof TUpdatePerfilCandidate];
        }
      });
      await updateCandidateProfile(data, Number(candidateWithEmail?.profileId));
      setModalOpen(null);
    }
  };

  return (
    <StyledEditCandidateInfoModalContainer>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="inputs_wrapper">
          <Input
            register={{ ...register("firstName") }}
            type="text"
            key={"firstName"}
            label="Primeiro nome"
            placeholder={candidateWithEmail!.firstName}
          />
          <Input
            type="text"
            label="Sobrenome"
            key={"lastName"}
            register={{ ...register("lastName") }}
            placeholder={candidateWithEmail!.lastName}
          />
          <Input
            type="text"
            key={"contactNumber"}
            label="Número de telefone"
            register={{ ...register("contactNumber") }}
            placeholder={candidateWithEmail!.contactNumber}
          />
          <Input
            type="text"
            key={"address"}
            register={{ ...register("address") }}
            label="Endereço"
            placeholder={candidateWithEmail!.address}
          />
          <Input
            type="text"
            key={"education"}
            register={{ ...register("education") }}
            label="Educação"
            placeholder={candidateWithEmail!.education}
          />
          <Input
            type="text"
            key={"experience"}
            register={{ ...register("experience") }}
            label="Experiência"
            placeholder={candidateWithEmail!.experience}
          />
          <Input
            type="text"
            key={"references"}
            register={{ ...register("references") }}
            label="Referências"
            placeholder={candidateWithEmail!.references}
          />
        </div>
        <div className="button_wrapper">
          <button type="submit">Atualizar informação</button>
        </div>
      </form>
    </StyledEditCandidateInfoModalContainer>
  );
};
