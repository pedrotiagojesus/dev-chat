import { z } from "zod";

export const signUpFormSchema = z
    .object({
        name: z
            .string()
            .min(1, "Field mandatory!")
            .min(3, "The minimum number of characters is 3."),
        email: z
            .string()
            .min(1, "Field mandatory!")
            .email("Use an valid email!"),
        password: z
            .string()
            .min(1, "Field mandatory")
            .min(6, "The minimum number of characters is 6."),
        confirmPassword: z
            .string()
            .min(1, "Field mandatory")
            .min(6, "The minimum number of characters is 6."),
    })
    .refine((field) => field.password === field.confirmPassword, {
        message: "passwords must be the same.",
        path: ["confirmPassword"],
    });

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;
