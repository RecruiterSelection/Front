import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../Input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormStyle } from "./style";

export const RegisterJob = () => {
  const schema = z.object({
    title: z.string().min(1, { message: "Obrigatório" }),
    description: z.string().min(1, { message: "Obrigatório" }),
    requirements: z.string().min(1, { message: "Obrigatório" }),
    responsibilities: z.string().min(1, { message: "Obrigatório" }),
    benefits: z.string().min(1, { message: "Obrigatório" }),
    location: z.string().min(1, { message: "Obrigatório" }),
    jobType: z.string().min(1, { message: "Obrigatório" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const creatNewProfile = (data) => {
    console.log(data);
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

        <Input
          register={register("jobType")}
          placeholder="Tipo de trabalho"
          type="text"
          key="Tipo de trabalho"
          label="Tipo de trabalho"
        />

        <button type="submit">Cadastrar</button>
      </FormStyle>
    </>
  );
};
