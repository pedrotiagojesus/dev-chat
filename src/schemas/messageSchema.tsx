export type MessageSchema = {
    id?: string;
    text: string;
    uid: string;
    displayName: string;
    photoURL: string | null;
    createdAt?: string;
};
