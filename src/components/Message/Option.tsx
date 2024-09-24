// Sweetalert 2
import Swal from "sweetalert2";

// Hooks
import { useDeleteMessage } from "../../hooks/firebase/useDeleteMessage";

interface Props {
    id: string;
}

const Option = ({ id }: Props) => {
    const { deleteMessage } = useDeleteMessage();

    const handleDeleteClick = (id: string) => {
        Swal.fire({
            title: "Are you sure you want to send a message?",
            text: `Are you sure you want to send a message?`,
            icon: "question",
            confirmButtonText: "Yes, delete!",
            showCancelButton: true,
            cancelButtonText: "Cancel",
            allowOutsideClick: false,
            allowEscapeKey: false,
            customClass: {
                confirmButton: "btn btn-primary",
                cancelButton: "btn btn-secondary",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                deleteMessage(id);

                Swal.fire({
                    title: "Deleted!",
                    text: "Message has been deleted.",
                    icon: "success",
                    customClass: {
                        confirmButton: "btn btn-primary",
                    },
                });
            }
        });
    };

    return (
        <div className="dropdown option">
            <button className="btn " type="button" data-bs-toggle="dropdown">
                <i className="fa-solid fa-ellipsis"></i>
            </button>
            <ul className="dropdown-menu">
                <li>
                    <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handleDeleteClick(id)}
                    >
                        Apagar
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Option;
