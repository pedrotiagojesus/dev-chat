import { useState, useEffect } from "react";

// Firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Schemas
import { LoginFormSchema } from "../../schemas/loginFormSchema";

const useLogin = (data: LoginFormSchema) => {
    // const auth = getAuth();

    console.log("A");

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    /*
    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true);
                setError(null);

                await signInWithEmailAndPassword(
                    auth,
                    data.email,
                    data.password
                );

                const user = res.user;
                await addDoc(collection(db, "users"), {
                    uid: user.uid,
                    name,
                    authProvider: "local",
                    email,
                });
                    
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);
    */

    return { error, loading };
};

export default useLogin;
