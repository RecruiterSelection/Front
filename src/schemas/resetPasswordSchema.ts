import { z } from "zod";

export const formSchema = z
  .object({
    password: z
      .string()
      .min(5, { message: "Mínimo 5 caracteres" })
      .refine((data) => data.length > 0, { message: "Campo obrigatório" }),
    confirmPassword: z.string()});
