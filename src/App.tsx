import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged, User } from "firebase/auth";

// CSS
import "./App.css";

// Context
import { AuthProvider } from "./contexts/AuthContext";

// Hooks
import { useAuthentication } from "./hooks/firebase/useAuthentication";

// Components
import Header from "./components/Header/Header";
import BackgroundAnimated from "./components/BackgroundAnimated/BackgroundAnimated";
import Loader from "./components/Loader/Loader";

// Pages
import Homepage from "./pages/Homepage/Homepage";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
    const [user, setUser] = useState<null | User>();
    const { auth } = useAuthentication();

    const loadingUser = user === undefined;

    useEffect(() => {
        onAuthStateChanged(auth, (user: User | null) => {
            setUser(user);
        });
    }, [auth]);

    if (loadingUser) {
        return <Loader />;
    }

    return <Loader />;

    return (
        <>
            <AuthProvider value={{ user }}>
                <BrowserRouter>
                    {user ? <Header /> : ""}
                    <main className={user ? "" : "no-header"}>
                        <BackgroundAnimated />
                        <div className="content">
                            <Routes>
                                <Route
                                    path="/dev-chat"
                                    element={
                                        !user ? (
                                            <Homepage />
                                        ) : (
                                            <Navigate to="/dev-chat/dashboard" />
                                        )
                                    }
                                ></Route>
                                <Route
                                    path="/dev-chat/dashboard"
                                    element={
                                        user ? (
                                            <Dashboard />
                                        ) : (
                                            <Navigate to="/dev-chat" />
                                        )
                                    }
                                ></Route>
                            </Routes>
                        </div>
                    </main>
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}

export default App;
