// Basic
import React from "react";
import { Link } from "react-router-dom";
// Context API
import { useAuth } from "../../../Context/GlobalState";
// Style
import { ButtonSignIn, Register, SignInSection } from "./AuthExternalStyle";

const AuthExternal = () => {
  const { user } = useAuth();
  return (
    <>
      {/*Check If Found User (Show) Or No (Hidden)*/}
      {!user ? (
        <SignInSection>
          <hr />
          <div>
            <p>See personalized recommendations</p>
            <Link to="/signin">
              <ButtonSignIn>Sign in</ButtonSignIn>
            </Link>
            <Register>
              New customer? <Link to="/register">Start here</Link>.
            </Register>
          </div>
          <hr />
        </SignInSection>
      ) : (
        ""
      )}
    </>
  );
};

export default AuthExternal;
