// Firebase
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signOut,
    signInWithPopup,
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
    const auth = getAuth();
    return await signOut(auth);
}

export const signInWithGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    // Start sign in process
    try {
        await signInWithPopup(auth, provider);
    } catch (error) {
        console.log(error.message);
    }
};
