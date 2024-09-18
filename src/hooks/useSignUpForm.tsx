import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// Schema
import {
    SignUpFormSchema,
    signUpFormSchema,
} from "../schemas/signUpFormSchema";

export const useSignUpForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpFormSchema>({
        resolver: zodResolver(signUpFormSchema),
    });

    return { register, handleSubmit, errors };
};
