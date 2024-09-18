import { useState } from "react";

// Firebase
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    signOut,
    sendPasswordResetEmail,
} from "firebase/auth";

// Schemas
import { SignUpFormSchema } from "../../schemas/signUpFormSchema";
import { RecoverPasswordFormSchema } from "../../schemas/recoverPasswordFormSchema";

export const useAuthentication = () => {
    const auth = getAuth();

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const createUser = async (data: SignUpFormSchema) => {
        setLoading(true);
        setError("");

        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );

            const user = res.user;

            await updateProfile(user, {
                displayName: data.name,
            });

            return user;
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        signOut(auth);
    };

    const sendPasswordReset = async (data: RecoverPasswordFormSchema) => {
        setLoading(true);
        setError("");

        try {
            await sendPasswordResetEmail(auth, data.email);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        createUser,
        logout,
        sendPasswordReset,
        loading,
        success,
        error,
    };
};
