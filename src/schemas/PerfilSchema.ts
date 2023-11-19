import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Campo obrigatório" })
    .min(2, { message: "Pelomenos 2 letras" }),

  endereco: z
    .string()
    .min(1, { message: "Campo obrigatório" })
    .min(2, { message: "Pelomenos 2 letras" }),

  educacao: z
    .string()
    .min(1, { message: "Campo obrigatório" })
    .min(2, { message: "Pelomenos 2 letras" }),

  habilidades_1: z
    .string()
    .min(1, { message: "Campo obrigatório" })
    .min(2, { message: "Pelomenos 2 letras" }),

  exoeriencia: z.string().min(1, { message: "Campo obrigatório" }),
});
