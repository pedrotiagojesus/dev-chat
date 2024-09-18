import { z } from "zod";

export const loginFormSchema = z.object({
    email: z.string().min(1, "Field mandatory!").email("Use an valid email!"),
    password: z.string().min(1, "Field mandatory"),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
