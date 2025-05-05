import { z } from 'zod';

export const studentAnswerSchema = z.object({
  name: z.string(),
  studentClass: z.string().min(3),
  state_1: z.string(),
  state_2: z.string(),
  state_3: z.string(),
  hypothesis_1: z.string(),
  hypothesis_2: z.string(),
  hypothesis_3: z.string(),
  table_p1_1: z.number(),
  table_p1_2: z.number(),
  table_p1_3: z.number(),
  table_p2_1: z.number(),
  table_p2_2: z.number(),
  table_p2_3: z.number(),
  conslusion: z.string()
});

export type StudentANswerInput = z.infer<typeof studentAnswerSchema>;

