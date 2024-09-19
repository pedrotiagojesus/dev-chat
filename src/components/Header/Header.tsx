// CSS
import "./Header.css";

// Hooks
import { useAuthentication } from "../../hooks/firebase/useAuthentication";

const Header = () => {
    const { logout } = useAuthentication();

    return (
        <header>
            <nav className="navbar fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <i className="fa-solid fa-code"></i>
                        <span>Dev Chat</span>
                    </a>
                    <button className="btn btn-logout" onClick={logout}>
                        Logout
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
