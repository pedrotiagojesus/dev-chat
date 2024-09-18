// Firebase
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    signOut,
    sendPasswordResetEmail,
} from "firebase/auth";

export async function createNewUser(email: string, password: string) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
}

export async function signIn(email: string, password: string) {
    const auth = getAuth();
    return await signInWithEmailAndPassword(auth, email, password);
}

export async function logOut() {
    // const auth = getAuth();
    return await signOut();
}
