// CSS
import "./Dashboard.css";

// Hooks
import { useAuthentication } from "../../hooks/firebase/useAuthentication";

const Dashboard = () => {
    const { logout } = useAuthentication();

    return (
        <div>
            <button className="btn btn-danger" onClick={logout}>
                Logout
            </button>
        </div>
    );
};

export default Dashboard;
