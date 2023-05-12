// Basic
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// Back End
import { auth } from "./firebase";
// Protect Auth
import RequireUser from "./Setting/RequireUser";
import NotRequireUser from "./Setting/NotRequireUser";
// Context API
import { useAuth } from "./Context/GlobalState";
// Blur
import BlurProvider from "./Context/Blur/Blur";
// Components
import HeaderSection from "./Components/Header/HeaderSection";
import Register from "./Components/Auth/Register/Register";
import ForgotPassword from "./Components/Auth/ForgotPassword.js/ForgotPassword";
import SignIn from "./Components/Auth/SignIn/Signin";
import Error from "./Components/ErrorPage/Error";
import HomeSection from "./Components/HomePage/HomeSection";
import FooterSection from "./Components/Footer/FooterSection";
import CartSection from "./Components/CartPage/CartSection";
import PaymentSection from "./Components/PaymentPage/PaymentSection";
import ItemPageSection from "./Components/ItemPage/ItemPageSection";
import SearchSection from "./Components/SearchPage/SearchSection";

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
    <>
      <Routes>
        {/* Start Home Page*/}
        <Route
          path="/"
          element={
            <>
              <BlurProvider>
                <HeaderSection />
                <HomeSection />
              </BlurProvider>
              <FooterSection />
            </>
          }
        />
        {/* End Home Page */}

        {/* Start Search Page */}
        <Route
          path="/search"
          element={
            <>
              <BlurProvider>
                <HeaderSection />
                <SearchSection />
              </BlurProvider>
              <FooterSection />
            </>
          }
        />
        {/* End Search Page */}

        {/* Start SignIn Page*/}
        <Route
          path="/signin"
          element={
            <NotRequireUser>
              <SignIn />
            </NotRequireUser>
          }
        />
        {/* End SignIn Page*/}

        {/* Start Register Page */}
        <Route
          path="/register"
          element={
            <NotRequireUser>
              <Register />
            </NotRequireUser>
          }
        />
        {/* End Register Page */}

        {/* Start Cart Page */}
        <Route
          path="/cart"
          element={
            <>
              <BlurProvider>
                <HeaderSection />
                <CartSection />
              </BlurProvider>
              <FooterSection />
            </>
          }
        />
        {/* End Cart Page*/}

        {/* Start Forgot Password  Page */}
        <Route
          path="/forgot_password"
          element={
            <NotRequireUser>
              <ForgotPassword />
            </NotRequireUser>
          }
        />
        {/* End Forgot Password Page */}

        {/* Start Payment Page */}
        <Route
          path="/payment"
          element={
            <RequireUser>
              <BlurProvider>
                <HeaderSection />
                <PaymentSection />
              </BlurProvider>
              <FooterSection />
            </RequireUser>
          }
        />
        {/* End Payment Page */}

        {/* Start Item Page */}
        <Route
          path="/item_page"
          element={
            <>
              <BlurProvider>
                <HeaderSection />
                <ItemPageSection />
              </BlurProvider>
              <FooterSection />
            </>
          }
        />
        {/* End Item Page */}

        {/* Start Error Page */}
        <Route
          path="*"
          element={
            <>
              <BlurProvider>
                <HeaderSection />
                <Error />
              </BlurProvider>
            </>
          }
        />
        {/* End Error Page */}
      </Routes>
    </>
  );
};

export default App;
