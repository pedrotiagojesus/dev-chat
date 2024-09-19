// CSS
import "./Channel.css";

// Hooks
import { useFetchMessage } from "../../hooks/firebase/useFetchMessage";

// Schema
import { MessageSchema } from "../../schemas/messageSchema";

// Components
import Message from "../Message/Message";

const Channel = () => {
    const { messageArr } = useFetchMessage();

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
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                    />
                    <button className="btn" type="submit">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Channel;
