import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../../schemas/registerSchema";
import { UserContext } from "../../providers/user/userProvider";
import { IRegisterUser } from "../../providers/user/interface";
import { Input } from "../../components/Input";
import { ModalContext } from "../../providers/modal";
import { DivInput, DivInputRadio, ErrorMessage, FormStyled } from "./style";

export const RegisterForm = () => {
  const { createUser } = useContext(UserContext);
  const { closeModal } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({
    resolver: zodResolver(formSchema),
  });

  const submit: SubmitHandler<IRegisterUser> = (data) => {
    createUser(data);
    closeModal();
  };

  return (
    <FormStyled onSubmit={handleSubmit(submit)}>
      <h1>Cadastro</h1>
      <Input
        label="Email"
        type="email"
        placeholder="Digitar email"
        register={register("email")}
      />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      <Input
        label="Senha"
        type="password"
        placeholder="Digitar senha"
        register={register("password")}
      />
      {errors.password && (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      )}
      <DivInput>
        <p>Tipo de Conta</p>
        <DivInputRadio>
          <label>
            <input type="radio" value="Recruiter" {...register("account_type")} />
            <span>Recrutador</span>
          </label>
          <label>
            <input
              type="radio"
              value="Candidate"
              {...register("account_type")}
            />
            <span>Candidato</span>
          </label>
        </DivInputRadio>
        {errors.account_type && <ErrorMessage>{errors.account_type.message}</ErrorMessage>}
      </DivInput>
      <button type="submit">Cadastrar</button>
    </FormStyled>
  );
};
