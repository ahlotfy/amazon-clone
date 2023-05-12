// Basic
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
// Context API
import GlobalProvider from "./Context/GlobalState";
// Style
import "./Style/Main.scss";
import "./Style/fontawesome-icon/css/all.css";
import "./Style/GlobalValues.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalProvider>
        <React.Suspense>
          <App />
        </React.Suspense>
      </GlobalProvider>
    </Router>
  </React.StrictMode>
);
