import { z } from "zod";

export const updateUserRolesSchema = z.object({
  roles: z.array(z.string().min(2)).min(1)
});

export type UpdateUserRolesInput = z.infer<typeof updateUserRolesSchema>;
