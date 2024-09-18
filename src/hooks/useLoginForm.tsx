import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormSchema, loginFormSchema } from "../schemas/loginFormSchema";

export const useLoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormSchema>({
        resolver: zodResolver(loginFormSchema),
    });

    return { register, handleSubmit, errors };
};
