import { z } from 'zod';

export const resetPasswordSchema = z.object({
  password: z
    .string()
    .min(8, { message: "Mínimo 8 caracteres" })
    .refine(data => data.length > 0, { message: "Campo obrigatório" }),
  confirmPassword: z
    .string()
    .refine((data, context) => data === context.data.password, { message: "As senhas devem ser iguais" }),
});
