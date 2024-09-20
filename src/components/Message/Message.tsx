import { formatRelative } from "date-fns";

// CSS
import "./Message.css";

// Schema
import { MessageSchema } from "../../schemas/messageSchema";

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
    return (
        <div className="message">
            <img src={message.photoURL} alt="avatar" />
            <div>
                <div className="identification">
                    <span className="name">{message.displayName}</span>
                    <span className="date">
                        {formatDate(new Date(message.createdAt.seconds * 1000))}
                    </span>
                </div>
                <div className="text">{message.text}</div>
            </div>
        </div>
    );
};

export default Message;
