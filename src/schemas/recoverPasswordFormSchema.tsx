import { z } from "zod";

export const recoverPasswordFormSchema = z.object({
    email: z.string().min(1, "Field mandatory!").email("Use an valid email!"),
});

export type RecoverPasswordFormSchema = z.infer<
    typeof recoverPasswordFormSchema
>;
