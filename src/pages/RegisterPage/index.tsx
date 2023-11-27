import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../../schemas/registerSchema";
import { UserContext } from "../../providers/user/userProvider";
import { IRegisterUser } from "../../providers/user/interface";
import { Input } from "../../components/Input";
import { ModalContext } from "../../providers/modal";
import { DivInput, DivInputRadio, ErrorMessage, FormStyled } from "./style";
import { LoginForm } from "../LoginModal/loginForm";

export const RegisterForm = () => {
  const { createUser } = useContext(UserContext);
  const { setModalOpen } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({
    resolver: zodResolver(formSchema),
  });

  const submit: SubmitHandler<IRegisterUser> = (data) => {
    createUser(data);
    setModalOpen(<LoginForm />);
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
        register={register("passwordHash")}
      />
      {errors.passwordHash && (
        <ErrorMessage>{errors.passwordHash.message}</ErrorMessage>
      )}
      <DivInput>
        <p>Tipo de Conta</p>
        <DivInputRadio>
          <label>
            <input type="radio" value="RECRUITER" {...register("role")} />
            <span>Recrutador</span>
          </label>
          <label>
            <input type="radio" value="CANDIDATE" {...register("role")} />
            <span>Candidato</span>
          </label>
        </DivInputRadio>
        {errors.role && <ErrorMessage>{errors.role.message}</ErrorMessage>}
      </DivInput>
      <button type="submit">Cadastrar</button>
    </FormStyled>
  );
};
