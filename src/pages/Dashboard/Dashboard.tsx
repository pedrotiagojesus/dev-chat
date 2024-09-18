// CSS
import "./Dashboard.css";

// Components
import BackgroundAnimated from "../../components/BackgroundAnimated/BackgroundAnimated";
import Channel from "../../components/Channel/Channel";

const Dashboard = () => {
    return (
        <div id="dashboard">
            <BackgroundAnimated />
            <div className="container">
                <Channel />
            </div>
        </div>
    );
};

export default Dashboard;
