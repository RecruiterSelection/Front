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
});
