import { z } from "zod";

export const updateCandidateSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  contactNumber: z.string().optional(),
  address: z.string().optional(),
  education: z.string().optional(),
  experience: z.string().optional(),
  references: z.string().optional(),
});
