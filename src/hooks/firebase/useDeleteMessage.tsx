import { useState, useEffect, useReducer } from "react";

// Firebase
import { db } from "../../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

const initialState = {
    loading: null,
    error: null,
};

const deleteReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return { loading: true, error: null };
        case "DELETED_MESSAGE":
            return { loading: false, error: null };
        case "ERROR":
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const useDeleteMessage = () => {
    const [response, dispatch] = useReducer(deleteReducer, initialState);

    // deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    const checkCancelBeforeDispatch = (action) => {
        if (!cancelled) {
            dispatch(action);
        }
    };

    const deleteMessage = async (id: string) => {
        checkCancelBeforeDispatch({ type: "LOADING" });

        try {
            const deletedMessage = await deleteDoc(doc(db, "message", id));

            checkCancelBeforeDispatch({
                type: "DELETED_MESSAGE",
                payload: deletedMessage,
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

    return { deleteMessage, response };
};
