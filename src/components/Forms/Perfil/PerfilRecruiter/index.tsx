import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../../../Input";

export const FormPerfilRecruiter = () => {
  const schema = z.object({
    firstName: z.string().min(1, { message: "Obrigatório" }),
    lastName: z.string().min(1, { message: "Obrigatório" }),
    companyName: z.string().min(1, { message: "Obrigatório" }),
    contactNumber: z.string().min(1, { message: "Obrigatório" }),
    address: z.string().min(1, { message: "Obrigatório" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const creatNewProfile = (e) => {
    console.log(e);
  };

  return (
    <>
      <form className="formStyle" onSubmit={handleSubmit(creatNewProfile)}>
        <h2>Recrutador</h2>
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
          register={register("companyName")}
          placeholder="Empresa"
          type="text"
          key="Empresa"
          label="Empresa"
        />

        <Input
          register={register("contactNumber")}
          placeholder="Contato"
          type="text"
          key="Contato"
          label="Contato"
        />

        <Input
          register={register("address")}
          placeholder="Endereço"
          type="text"
          key="Endereço"
          label="Endereço"
        />

        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
};
