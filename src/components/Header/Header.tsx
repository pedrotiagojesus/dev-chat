// CSS
import "./Header.css";

// Utils
import { logOut } from "../../utils/Firebase";

const Header = () => {
    return (
        <header>
            <nav className="navbar fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <i className="fa-solid fa-code"></i>
                        <span>Dev Chat</span>
                    </a>
                    <button className="btn btn-logout" onClick={logOut}>
                        Logout
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
