// Firebase
import "./../firebase/config";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signOut,
    signInWithPopup,
} from "firebase/auth";

// Sweetalert 2
import Swal from "sweetalert2";

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
    const res = await signOut(auth);

    Swal.fire({
        title: "Success!",
        text: `Bye bye!`,
        icon: "success",
        confirmButtonText: "Ok",
        allowOutsideClick: false,
        allowEscapeKey: false,
        customClass: {
            confirmButton: "btn btn-primary",
        },
    });

    return res;
}

export const signInWithGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    // Start sign in process
    try {
        const res = await signInWithPopup(auth, provider);

        Swal.fire({
            title: "Success!",
            text: `Welcome ${res.user.displayName}`,
            icon: "success",
            confirmButtonText: "Ok",
            allowOutsideClick: false,
            allowEscapeKey: false,
            customClass: {
                confirmButton: "btn btn-primary",
            },
        });
    } catch (error) {
        console.log(error.message);
    }
};

export const auth = getAuth();
