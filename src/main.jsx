import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/common.css";
import { ToggleProvider } from "./context/ToggleContext.jsx";
import { StyleProvider } from "./context/StyleContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToggleProvider>
      <StyleProvider>
        <App />
      </StyleProvider>
    </ToggleProvider>
  </React.StrictMode>
);
