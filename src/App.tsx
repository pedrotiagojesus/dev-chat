import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// CSS
import "./App.css";

// Context
import { AuthContext } from "./context/AuthContext";

// Pages
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import RecoverPassword from "./pages/RecoverPassword/RecoverPassword";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
    const user = useContext(AuthContext);

    return (
        <>
            <BrowserRouter>
                <main>
                    <Routes>
                        <Route path="/dev-chat" element={<Homepage />}></Route>
                        <Route
                            path="/dev-chat/login"
                            element={
                                !user ? (
                                    <Login />
                                ) : (
                                    <Navigate to="/dev-chat/dashboard" />
                                )
                            }
                        ></Route>
                        <Route
                            path="/dev-chat/sign-up"
                            element={
                                !user ? (
                                    <SignUp />
                                ) : (
                                    <Navigate to="/dev-chat/dashboard" />
                                )
                            }
                        ></Route>
                        <Route
                            path="/dev-chat/recover-password"
                            element={
                                !user ? (
                                    <RecoverPassword />
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
                                    <Navigate to="/dev-chat/login" />
                                )
                            }
                        ></Route>
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    );
}

export default App;
