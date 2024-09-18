import { Link } from "react-router-dom";

// CSS
import "./Homepage.css";

// Components
import BackgroundAnimated from "../../components/BackgroundAnimated/BackgroundAnimated";

const Homepage = () => {
    return (
        <div id="page-homepage">
            <BackgroundAnimated />
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="card">
                            <div className="card-header">
                                <i className="fa-solid fa-code"></i> Dev Chat
                            </div>
                            <div className="card-body">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Temporibus quidem expedita
                                    mollitia veritatis unde recusandae, animi
                                    voluptatibus eius odit iusto atque ipsum
                                    deleniti velit obcaecati soluta harum rem
                                    sed odio!
                                </p>
                                <div className="button-group">
                                    <Link
                                        className="btn btn-primary"
                                        to="/dev-chat/login"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        className="btn btn-primary"
                                        to="/dev-chat/register"
                                    >
                                        Register
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
