// CSS
import "./Message.css";

// Schema
import { MessageSchema } from "../../schemas/messageSchema";

interface Props {
    message: MessageSchema;
}

const Message = ({ message }: Props) => {
    return (
        <div className="message">
            <img src="https://i.pravatar.cc/300" alt="avatar" />
            <div>
                <div className="identification">
                    <span className="name">Pedro Jesus</span>
                    <span className="date">Yesterday at 2:42</span>
                </div>
                <div className="text">{message.text}</div>
            </div>
        </div>
    );
};

export default Message;
