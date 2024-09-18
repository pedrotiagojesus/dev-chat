import React from "react";
import ReactDOM from "react-dom/client";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

// Fontawesome
import "./assets/fontawesome-free-6.6.0-web/css/all.min.css";

// CSS
import "./index.css";
import "./theme.css";

// Pages
import App from "./App.tsx";

// Provider
import { AuthProvider } from "./provider/AuthProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.StrictMode>
);
