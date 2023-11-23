import { z } from 'zod';

export const formSchema = z.object({
  email: z.string().min(1, { message: "Campo obrigatório" }).email({ message: "E-mail inválido" }),
});
