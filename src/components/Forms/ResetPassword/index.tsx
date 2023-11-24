import { useContext } from "react";
import { UserContext } from "../../../providers/user/userProvider";
import { useForm, SubmitHandler } from "react-hook-form";
import { IResetPassword, IToken } from "../../../providers/user/interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../Input";
import { ErrorMessage, FormStyled } from "./style";
import { formSchema } from "../../../schemas/resetPasswordSchema";

export const ResetPasswordForm = ({ token }: IToken) => {
  const { resetPassword } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IResetPassword>({
    resolver: zodResolver(formSchema),
  });

  const submit: SubmitHandler<IResetPassword> = (data) => {
    resetPassword(data, token);
  };

  return (
    <FormStyled onSubmit={handleSubmit(submit)}>
      <h1>Recuperação de senha</h1>
      <Input
        label="Nova senha"
        type="password"
        placeholder="Sua nova senha"
        register={register("password")}
      />
      {errors.password && (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      )}
      <Input
        label="Confirmar Senha"
        type="password"
        placeholder="Digite novamente a senha"
        register={register("confirmPassword")}
      />
      {errors.confirmPassword && (
        <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
      )}
      <button type="submit">Atualizar Senha</button>
    </FormStyled>
  );
};
