import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    RecoverPasswordFormSchema,
    recoverPasswordFormSchema,
} from "../schemas/recoverPasswordFormSchema";

export const useRecoverPasswordForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RecoverPasswordFormSchema>({
        resolver: zodResolver(recoverPasswordFormSchema),
    });

    return { register, handleSubmit, errors };
};
