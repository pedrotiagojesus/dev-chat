import { useState, useEffect, useReducer } from "react";

// Firebase
import { db } from "../../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

// Schema
import { MessageSchema } from "../../schemas/messageSchema";

const initialState = {
    loading: null,
    error: null,
};

const insertReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return { loading: true, error: null };
        case "INSERTED_MESSAGE":
            return { loading: false, error: null };
        case "ERROR":
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const useInsertMessage = () => {
    const [response, dispatch] = useReducer(insertReducer, initialState);

    // deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    const checkCancelBeforeDispatch = (action) => {
        if (!cancelled) {
            dispatch(action);
        }
    };

    const insertMessage = async (message: MessageSchema) => {
        checkCancelBeforeDispatch({ type: "LOADING" });

        try {
            const newMessage = { ...message, createdAt: Timestamp.now() };

            const insertedMessage = await addDoc(
                collection(db, "message"),
                newMessage
            );

            checkCancelBeforeDispatch({
                type: "INSERTED_MESSAGE",
                payload: insertedMessage,
            });
        } catch (error) {
            checkCancelBeforeDispatch({
                type: "ERROR",
                payload: error.message,
            });
        }
    };

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return { insertMessage, response };
};
