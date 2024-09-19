// CSS
import "./Dashboard.css";

// Components
import Channel from "../../components/Channel/Channel";

const Dashboard = () => {
    return (
        <div id="dashboard">
            <div className="container">
                <Channel />
            </div>
        </div>
    );
};

export default Dashboard;
