import { z } from 'zod';

export const studentSchema = z.object({
  name: z.string().min(1),
  studentClass: z.string().min(3),
  uuid: z.string()
});

export type StudentInput = z.infer<typeof studentSchema>;
