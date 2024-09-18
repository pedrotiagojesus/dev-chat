import * as React from "react";
import { useEffect, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import { User } from "firebase/auth";
import { auth } from "../firebase/config";

type Props = {
    children?: React.ReactNode;
};

export const AuthProvider: React.FC = ({ children }: Props) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
            setUser(firebaseUser);
        });

        return unsubscribe;
    }, []);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
