import React, { useState } from "react";
import logo from "../../../images/icon/logo-black.png";
import errorIcon from "../../../images/icon/error-icon.png";
import { Div, A, Button } from "./SigninStyle";
import "../GlobalAuth.scss";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
const SignIn = () => {
  const [promise, setPromise] = useState(null);
  const [email, setEmail] = useState("");
  const [emailIsError, setEmailIsError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordIsError, setPasswordIsError] = useState(false);
  const Navigate = useNavigate();
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const signIn = (e) => {
    e.preventDefault();
    setEmailIsError(false);
    setPasswordIsError(false);
    if (regex.test(email) && password.length >= 6) {
      signInWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          if (auth) {
            Navigate("/", { replace: true });
          }
        })
        .catch(() => {
          setPromise(false);
        });
    }
    if (!regex.test(email)) {
      setEmailIsError(true);
    }
    if (password.length < 6) {
      setPasswordIsError(true);
    }
  };
  return (
    <>
      <Div className="auth-box">
        <Link to="/" className="header-logo">
          <img src={logo} alt="amazon" />
        </Link>
        {promise === false ? (
          <Div className="box-error">
            <img src={errorIcon} alt="Error"></img>
            <Div className="title">
              <h4>There was a problem</h4>
              <p>We're sorry. Email or Password not found.</p>
            </Div>
          </Div>
        ) : (
          ""
        )}
        <Div className="form-section">
          <h1 className="heading">Sign in</h1>
          <form>
            <Div className="row-input">
              <label>Email</label>
              <input
                className={emailIsError ? "error-input" : ""}
                type="text"
                value={email}
                autoComplete=""
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailIsError ? (
                <Div className="error-input-text">
                  <span>i</span> Email Not Valid or Found.
                </Div>
              ) : (
                ""
              )}
            </Div>
            <Div className="row-input">
              <label>Password</label>
              <input
                className={passwordIsError ? "error-input" : ""}
                type="password"
                autoComplete=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordIsError ? (
                <Div className="error-input-text">
                  <span>i</span> Password Not Vaild.
                </Div>
              ) : (
                ""
              )}
            </Div>
            <Button className="sign-in" onClick={signIn}>
              Sign in
            </Button>
            <p className="the-inner-conditions">
              By continuing, you agree to Amazon's{" "}
              <span>Conditions of Use</span> and <span>Privacy Notice</span>.
            </p>
            <A as={Link} to="/forgot_password" className="help">
              Forgot your password?
            </A>
          </form>
        </Div>
        <Div className="user-status">
          <Div className="new-account">
            <hr />
            <span>New to Amazon?</span>
          </Div>
          <Div className="create-new-account">
            <Link to="/register">
              <Button className="create-new-account-btn">
                Create your Amazon account
              </Button>
            </Link>
          </Div>
        </Div>
      </Div>
      <Div className="external-line" />
      <Div className="the-external-conditions">
        <span> Conditions of Use </span>
        <span> Privacy Notice </span>
        <span> Help </span>
        <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
      </Div>
    </>
  );
};

export default SignIn;
