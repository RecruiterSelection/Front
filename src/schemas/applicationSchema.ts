import { z } from "zod";

export const ApplicationSchema = z
  .object({
    coverLetter: z.string().nonempty("Este campo é obrigatório"),
    resume: z.string().nonempty("Este campo é obrigatório"),
  })
  .required();
