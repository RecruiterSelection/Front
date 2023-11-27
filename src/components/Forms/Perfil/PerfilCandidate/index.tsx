import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../../../Input";
import { useContext, useEffect } from "react";
import { TechSkillsContext } from "../../../../providers/techSkillsProvider";
import { UserContext } from "../../../../providers/user/userProvider";
import { CandidateContext } from "../../../../providers/user/perfilCandidato/candidatesProvider";

export const FormPerfilCandidate = () => {
  const { getTechSkills, techSkills } = useContext(TechSkillsContext);
  const { userData, setUserData } = useContext(UserContext);
  const { createPerfilCandidate } = useContext(CandidateContext);

  useEffect(() => {
    getTechSkills();
  }, []);

  const schema = z.object({
    firstName: z.string().min(1, { message: "Obrigatório" }),
    lastName: z.string().min(1, { message: "Obrigatório" }),
    contactNumber: z.string().min(1, { message: "Obrigatório" }),
    address: z.string().min(1, { message: "Obrigatório" }),
    education: z.string().min(1, { message: "Obrigatório" }),
    // skills: z.string(),
    experience: z.string().min(1, { message: "Obrigatório" }),
    references: z.string().min(1, { message: "Obrigatório" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const creatNewProfile = (perfilData) => {
    if (userData) {
      setUserData({ ...userData, firstAccess: false });
    }
    createPerfilCandidate(perfilData, Number(userData!.id));
  };

  return (
    <>
      <form className="formStyle" onSubmit={handleSubmit(creatNewProfile)}>
        <h2>Candidate</h2>

        <Input
          register={register("firstName")}
          placeholder="Primeiro nome"
          type="text"
          key="Primeiro nome"
          label="Primeiro nome"
        />
        {/*errors.firstName?.message && errors.firstName?.message*/}

        <Input
          register={register("lastName")}
          placeholder="Sobrenome"
          type="text"
          key="Sobrenome"
          label="Sobrenome"
        />

        <Input
          register={register("contactNumber")}
          placeholder="Telefone"
          type="text"
          key="Telefone"
          label="Telefone"
        />

        <Input
          register={register("address")}
          placeholder="Endereço"
          type="text"
          key="Endereço"
          label="Endereço"
        />

        <Input
          register={register("education")}
          placeholder="Educação"
          type="text"
          key="Educação"
          label="Educação"
        />

        {/* <Select
          label="skills"
          listOption={techSkills}
          key="Habilidades"
          register={register("skills")}
        /> */}

        <Input
          register={register("experience")}
          placeholder="Experiências"
          type="text"
          key="Experiências"
          label="Experiências"
        />

        <Input
          register={register("references")}
          placeholder="Referencias"
          type="text"
          key="Referencias"
          label="Referencias"
        />

        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
};
