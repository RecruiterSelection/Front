import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../Input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormStyle } from "./style";
import { useContext } from "react";
import { UserContext } from "../../../providers/user/userProvider";
import { RecruiterContext } from "../../../providers/user/perfilRecruiter/userProvider";
import { VacancieContext } from "../../../providers/VacancieContext";
import { ICreateVacancie } from "../../../providers/VacancieContext/types";
import { Select } from "../../select";
import { useNavigate } from "react-router-dom";

export const RegisterJob = () => {
  const navigate = useNavigate();

  const { userData } = useContext(UserContext);
  const { getRecruiterProfileAll } = useContext(RecruiterContext);
  const { createVacancie } = useContext(VacancieContext);

  const schema = z.object({
    title: z.string().min(1, { message: "Obrigatório" }),
    description: z.string().min(1, { message: "Obrigatório" }),
    requirements: z.string().min(1, { message: "Obrigatório" }),
    responsibilities: z.string().min(1, { message: "Obrigatório" }),
    benefits: z.string().min(1, { message: "Obrigatório" }),
    location: z.string().min(1, { message: "Obrigatório" }),
    jobType: z
      .string()
      .min(1, { message: "teste" })
      .refine(
        (value) => ["FULL_TIME", "PART_TIME", "FREELANCE"].includes(value),
        {
          message: "Selecione uma opção válida",
        }
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const creatNewProfile = async (data) => {
    console.log(data);

    const allProfiles = await getRecruiterProfileAll();

    const profile = allProfiles.filter((profile) => {
      return profile.userId == Number(localStorage.getItem("@userId"));
    });

    createVacancie(data, profile[0].recruiterId);

    navigate("/dashboard");
  };

  return (
    <>
      <FormStyle onSubmit={handleSubmit(creatNewProfile)}>
        <h2>Criar Vaga</h2>

        <Input
          register={register("title")}
          placeholder="Titulo"
          type="text"
          key="Primeiro nome"
          label="Titulo"
        />

        <Input
          register={register("description")}
          placeholder="Derscrição"
          type="text"
          key="Derscrição"
          label="Derscrição"
        />

        <Input
          register={register("requirements")}
          placeholder="Requisitos"
          type="text"
          key="Primeiro nome"
          label="Primeiro nome"
        />

        <Input
          register={register("responsibilities")}
          placeholder="Responsabilidades"
          type="text"
          key="Responsabilidades"
          label="Responsabilidades"
        />

        <Input
          register={register("benefits")}
          placeholder="Beneficios"
          type="text"
          key="Beneficios"
          label="Beneficios"
        />

        <Input
          register={register("location")}
          placeholder="Localidade"
          type="text"
          key="Localidade"
          label="Localidade"
        />

        <Select
          listOption={["FULL_TIME", "PART_TIME", "FREELANCE"]}
          register={register("jobType")}
          key={"Tipo de trabalho"}
          label="Tipo de trabalho"
        />

        {/* <Input
          register={register("jobType")}
          placeholder="Tipo de trabalho"
          type="text"
          key="Tipo de trabalho"
          label="Tipo de trabalho"
        /> */}

        <button type="submit">Cadastrar</button>
      </FormStyle>
    </>
  );
};
