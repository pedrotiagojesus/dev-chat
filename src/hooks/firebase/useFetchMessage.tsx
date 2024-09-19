import { useState, useEffect } from "react";

// Firebase
import { db } from "../../firebase/config";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

// Schema
import { MessageSchema } from "../../schemas/messageSchema";

export const useFetchMessage = () => {
    const [messageArr, setMessageArr] = useState<Array<MessageSchema> | null>(
        null
    );
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean | null>(null);

    // deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {
        async function loadData() {
            if (cancelled) {
                return;
            }

            setLoading(true);

            const collectionRef = await collection(db, "message");

            try {
                let q = await query(
                    collectionRef,
                    orderBy("createdAt", "desc")
                );

                await onSnapshot(q, (querySnapshot) => {
                    setMessageArr(
                        querySnapshot.docs.map((message) => ({
                            id: message.id,
                            ...message.data(),
                        }))
                    );
                });
            } catch (error) {
                console.log(error);
                setError(error.message);
            }

            setLoading(false);
        }

        loadData();
    }, [cancelled]);

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return { messageArr, loading, error };
};
