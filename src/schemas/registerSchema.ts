import { z } from "zod";

export const formSchema = z.object({
  email: z
    .string()
    .email({ message: "E-mail inválido" })
    .min(1, { message: "Campo obrigatório" }),
  passwordHash: z
    .string()
    .min(4, { message: "Mínimo 4 caracteres" })
    .min(1, { message: "Campo obrigatório" }),
  role: z
    .string()
    .min(1, { message: "Campo obrigatório" })
    .refine((value) => ["RECRUITER", "CANDIDATE"].includes(value), {
      message: "Selecione uma opção válida",
    }),
});
