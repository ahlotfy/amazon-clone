// Basic
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
// Context API
import GlobalProvider from "./Context/GlobalState";
// Style
import "./Style/Main.css";
import "./Style/fontawesome-icon/css/all.css";
import "./Style/GlobalValues.css";
import "./Style/normalize.css";
// App
const App = React.lazy(() => import("./App"));

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
