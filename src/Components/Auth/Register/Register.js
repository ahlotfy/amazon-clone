import React, { useState } from "react";
import logo from "../../../images/icon/logo-black.png";
import { Div, Button } from "./RegisterStyle";
import "../GlobalAuth.scss";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
const Register = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailIsError, setEmailIsError] = useState(false);
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordIsError, setPasswordIsError] = useState(false);
  const register = () => {
    setEmailIsError(false);
    setPasswordIsError(false);
    if (
      regex.test(email) &&
      password.length >= 6 &&
      password === confirmPassword
    ) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          if (auth) {
            Navigate("/", { replace: true });
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    }
    if (!regex.test(email)) {
      setEmailIsError(true);
    }
    if (password !== confirmPassword || password.length < 6) {
      setPasswordIsError(true);
    }
  };
  return (
    <>
      <Div className="auth-box">
        <Div className="top-floor">
          <Link to="/" className="header-logo">
            <img src={logo} alt="amazon" />
          </Link>
          <Div className="form-section">
            <h1 className="heading">Create account</h1>
            <form>
              <Div className="row-input">
                <label>Email</label>
                <input
                  className={emailIsError ? "error-input" : ""}
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailIsError ? (
                  <Div className="error-input-text">
                    <span>i</span> Email Not Valid.
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
                  placeholder="At least 6 characters"
                  value={password}
                  maxLength={20}
                  required
                  autoComplete=""
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordIsError ? (
                  <Div className="error-input-text">
                    <span>i</span> Password max length 6.
                  </Div>
                ) : (
                  <Div className="hint-password">
                    <span>i</span> Passwords must be at least 6 characters.
                  </Div>
                )}
              </Div>
              <Div className="row-input">
                <label>Re-enter password</label>
                <input
                  className={passwordIsError ? "error-input" : ""}
                  type="password"
                  autoComplete=""
                  value={confirmPassword}
                  maxLength={20}
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {passwordIsError ? (
                  <Div className="error-input-text">
                    <span>i</span> Password not match.
                  </Div>
                ) : (
                  ""
                )}
              </Div>
              <Button
                className="continue"
                onClick={(e) => {
                  register(e);
                  e.preventDefault();
                }}
              >
                Continue
              </Button>
              <p className="the-inner-conditions">
                By creating an account,, you agree to Amazon's <br />
                <span>Conditions of Use</span> and <span>Privacy Notice</span>.
              </p>
              <Div className="internal-line" />
              <Div className="already-have-an-account">
                <p>
                  Already have an account? <Link to="/signin">Sign In</Link>{" "}
                </p>
              </Div>
            </form>
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

export default Register;
