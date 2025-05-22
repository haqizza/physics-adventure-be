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
  table_q_1: z.string(),
  table_q_2: z.string(),
  table_q_3: z.string(),
  conslusion: z.string()
});

export type StudentANswerInput = z.infer<typeof studentAnswerSchema>;

