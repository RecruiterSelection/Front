import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../../schemas/loginSchema";
import { UserContext } from "../../providers/user/userProvider";
import { ILoginUser } from "../../providers/user/interface";
import { ButtonStyled, ErrorMessage, FormStyled } from "./style";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { RegisterForm } from "../RegisterPage";
import { ModalContext } from "../../providers/modal";

export const LoginForm = () => {
  const { loginUser } = useContext(UserContext);
  const { setModalOpen } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>({
    resolver: zodResolver(formSchema),
  });

  const submit: SubmitHandler<ILoginUser> = (data) => {
    loginUser(data);
    setModalOpen(null);
  };

  return (
    <FormStyled onSubmit={handleSubmit(submit)}>
      <h1>Login</h1>
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
      <Link to="">Esqueci minha senha</Link>
      <ButtonStyled type="submit">Entrar</ButtonStyled>
      <p>Ainda não possui conta?</p>
      <ButtonStyled
        type="button"
        onClick={() => setModalOpen(<RegisterForm />)}
      >
        Cadastrar
      </ButtonStyled>
    </FormStyled>
  );
};
