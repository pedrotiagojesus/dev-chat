// CSS
import "./Channel.css";

// Hooks
import { useFetchMessage } from "../../hooks/firebase/useFetchMessage";
import { useInsertMessage } from "../../hooks/firebase/useInsertMessage";

// Schema
import { MessageSchema } from "../../schemas/messageSchema";

// Components
import Message from "../Message/Message";
import { useState } from "react";
import { useAuthValue } from "../../contexts/AuthContext";

const Channel = () => {
    const { user } = useAuthValue();

    const { messageArr } = useFetchMessage();
    const { insertMessage, response } = useInsertMessage();

    const [newMessage, setNewMessage] = useState<string>("");
    const handleSubmit = (e: FormDataEvent) => {
        e.preventDefault();

        const trimmedMessage = newMessage.trim();

        if (trimmedMessage) {
            insertMessage({
                text: trimmedMessage,
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
            });

            // Clear input field
            setNewMessage("");
        }
    };

    return (
        <div id="channel" className="card">
            <div className="card-body">
                <div className="timeline">
                    <div className="beginning">
                        <h1>Welcome to Dev Chat</h1>
                        <p>This is beginning of this chat</p>
                    </div>
                    {messageArr &&
                        messageArr.map((message: MessageSchema) => (
                            <Message key={message.id} message={message} />
                        ))}
                </div>
            </div>
            <div className="card-footer">
                <form className="input-group" onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type="text"
                        className="form-control"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button
                        className="btn"
                        type="submit"
                        disabled={!newMessage}
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Channel;
