import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ProjectContextProvider } from "./context/ProjectContext";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProjectContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ProjectContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
