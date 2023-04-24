import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./GlobalValues.scss";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalProvider from "./Context/GlobalState";
import SlidesFun from "./Components/Home/SlidesFun";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </Router>
  </React.StrictMode>
);
