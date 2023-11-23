import { useContext } from "react";
import { UserContext } from "../../../providers/user/userProvider";
import { useForm, SubmitHandler } from "react-hook-form";
import { ISendEmail } from "../../../providers/user/interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../../../schemas/sendEmailSchema";
import { Input } from "../../Input";
import { ErrorMessage, FormStyled } from "./style";

export const SendEmailForm = () => {
  const { sendEmail } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISendEmail>({
    resolver: zodResolver(formSchema),
  });

  const submit: SubmitHandler<ISendEmail> = (data) => {
    sendEmail(data);
  };

  return (
    <FormStyled onSubmit={handleSubmit(submit)}>
      <h1>Informe um e-mail para a recuperação de senha</h1>
      <Input
        label="Email"
        type="email"
        placeholder="Ex: samuel@mail.com"
        register={register("email")}
      />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      <button type="submit">Enviar</button>
    </FormStyled>
  );
};
