// CSS
import "./Homepage.css";

// Firebase
import { signInWithGoogle } from "../../utils/Firebase";

const Homepage = () => {
    return (
        <div id="page-homepage">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="card">
                            <div className="card-header">
                                <i className="fa-solid fa-code"></i> Dev Chat
                            </div>
                            <div className="card-body">
                                <p>
                                    Hi! This is a real-time chat app that I
                                    developed using React and Firebase. It
                                    allows instant conversations with a modern
                                    and responsive interface, leveraging the
                                    power of React for a dynamic experience and
                                    Firebase for real-time data management.
                                </p>
                                <div className="button-group">
                                    <button
                                        className="btn btn-primary"
                                        onClick={signInWithGoogle}
                                    >
                                        <i className="fa-brands fa-google me-2"></i>
                                        Sign in with Google
                                    </button>
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
