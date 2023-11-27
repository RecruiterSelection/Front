import { useContext, useEffect } from "react";
import { ApplyFormContainer, ErrorMessage } from "./style";
import { CandidateContext } from "../../../providers/user/perfilCandidato/candidatesProvider";
import { ApplicationsContext } from "../../../providers/applicationsProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { ApplicationSchema } from "../../../schemas/applicationSchema";
import { Input } from "../../Input";
import { FieldValues, useForm } from "react-hook-form";
import { ApplicationData } from "../../../providers/applicationsProvider/interfaces";
import { ModalContext } from "../../../providers/modal";

interface ApplyFormProps {
  vacancyId: number;
}

export const ApplyFormComponent: React.FC<ApplyFormProps> = ({ vacancyId }) => {
  const { getCandidateByEmail, candidateWithEmail } =
    useContext(CandidateContext);
  const { createNewApplication } = useContext(ApplicationsContext);
  const { setModalOpen } = useContext(ModalContext);
  const candidateEmail = localStorage.getItem("@userMail");

  useEffect(() => {
    if (candidateEmail) {
      getCandidateByEmail(candidateEmail);
    }
    console.log(candidateWithEmail);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ApplicationSchema),
  });

  const handleApply = async (formData: FieldValues) => {
    const applicationData = formData as ApplicationData;
    if (candidateWithEmail) {
      await createNewApplication(
        applicationData,
        candidateWithEmail.profileId,
        vacancyId
      );
      setModalOpen(null);
    }
  };

  return (
    <ApplyFormContainer>
      <form onSubmit={handleSubmit(handleApply)}>
        <Input
          register={register("coverLetter")}
          placeholder="Insira seu texto aqui"
          type="text"
          key="coverLetter"
          label="Carta de apresentação"
        />
        {errors.coverLetter && (
          <ErrorMessage>{errors.coverLetter.message}</ErrorMessage>
        )}
        <Input
          register={register("resume")}
          placeholder="Insira seu texto aqui"
          type="text"
          key="resume"
          label="Currículo"
        />
        {errors.resume && <ErrorMessage>{errors.resume.message}</ErrorMessage>}

        <div className="button_wrapper">
          <button type="submit">Candidatar-se</button>
        </div>
      </form>
    </ApplyFormContainer>
  );
};
