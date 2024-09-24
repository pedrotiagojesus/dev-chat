import { formatRelative } from "date-fns";

// CSS
import "./Message.css";

// Schema
import { MessageSchema } from "../../schemas/messageSchema";

// Context
import { useAuthValue } from "../../contexts/AuthContext";
import Option from "./Option";

interface Props {
    message: MessageSchema;
}

const formatDate = (date) => {
    let formattedDate = "";
    if (date) {
        // Convert the date in words relative to the current date
        formattedDate = formatRelative(date, new Date());
        // Uppercase the first letterz
        formattedDate =
            formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    }
    return formattedDate;
};

const Message = ({ message }: Props) => {
    const { user } = useAuthValue();

    return (
        <div className={`message ${user.uid === message.uid ? "owner" : ""}`}>
            <div className="avatar">
                <img src={message.photoURL} alt="avatar" />
            </div>
            <div className="content">
                <div className="header">
                    <span className="name">{message.displayName}</span>
                    {user.uid === message.uid ? <Option id={message.id} /> : ""}
                </div>
                <div className="body">{message.text}</div>
                <div className="footer">
                    <span className="date">
                        {formatDate(new Date(message.createdAt.seconds * 1000))}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Message;
