import { z } from "zod";

export const formSchema = z.object({
  email: z
    .string()
    .email({ message: "E-mail inválido" })
    .min(1, { message: "Campo obrigatório" }),
  password: z
    .string()
    .min(6, { message: "Mínimo 6 caracteres" })
    .min(1, { message: "Campo obrigatório" }),
    account_type: z
    .string()
    .min(1, { message: "Campo obrigatório" })
    .refine(value => ["Recruiter", "Candidate"].includes(value), {
      message: "Selecione uma opção válida",
    }),
});
