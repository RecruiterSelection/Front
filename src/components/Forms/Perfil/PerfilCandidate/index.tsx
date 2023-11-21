import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../../../Input";

export const FormPerfilCandidate = () => {
  const schema = z.object({
    firstName: z.string().min(1, { message: "Obrigatório" }),
    lastName: z.string().min(1, { message: "Obrigatório" }),
    contactNumber: z.string().min(1, { message: "Obrigatório" }),
    address: z.string().min(1, { message: "Obrigatório" }),
    education: z.string().min(1, { message: "Obrigatório" }),
    skills: z.string().min(1, { message: "Obrigatório" }),
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

  const creatNewProfile = () => {
    console.log("newProfileData");
  };

  return (
    <>
      <form onSubmit={handleSubmit(creatNewProfile)}>
        <Input
          register={register("firstName")}
          placeholder="Primeiro nome"
          type="text"
          key="Primeiro nome"
          label="Primeiro nome"
        />

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

        <Input
          register={register("skills")}
          placeholder="Habilidades"
          type="text"
          key="Habilidades"
          label="Habilidades"
        />

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
