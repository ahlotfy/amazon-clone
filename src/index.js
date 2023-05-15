// Basic
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
// Context API
import GlobalProvider from "./Context/GlobalState";
// Style
import "./Style/Main.scss";
import "./Style/GlobalValues.scss";
import "./Style/fontawesome-icon/css/all.css";
import "./Style/normalize.css";
import { Spin } from "antd";
// App
const App = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalProvider>
        <React.Suspense
          fallback={
            <div
              style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Spin />
            </div>
          }
        >
          <App />
        </React.Suspense>
      </GlobalProvider>
    </Router>
  </React.StrictMode>
);
