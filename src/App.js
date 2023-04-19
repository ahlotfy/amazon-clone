import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Register from "./Components/Auth/Register/Register";
import { auth } from "./firebase";
import { useAuth } from "./Context/GlobalState";
import ForgotPassword from "./Components/Auth/ForgotPassword.js/ForgotPassword";
import SignIn from "./Components/Auth/SignIn/Signin";
import RequireAuth from "./RequireAuth";
import Error from "./Components/Error/Error";
const App = () => {
  const { dispatch } = useAuth();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/signin"
          element={
            <RequireAuth>
              <SignIn />
            </RequireAuth>
          }
        />
        <Route
          path="/register"
          element={
            <RequireAuth>
              <Register />
            </RequireAuth>
          }
        />
        <Route
          path="/forgot_password"
          element={
            <RequireAuth>
              <ForgotPassword />
            </RequireAuth>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Header />
              <Error />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
