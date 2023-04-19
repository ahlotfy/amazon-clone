import React, { useState } from "react";
import logo from "../../../images/icon/logo-black.png";
import errorIcon from "../../../images/icon/error-icon.png";
import validIcon from "../../../images/icon/valid-icon.png";
import { Div, Button } from "./ForgotPasswordStyle";
import "../GlobalAuth.scss";
import { Link, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase";
const ForgotPassword = () => {
  const Navigate = useNavigate();
  const [promise, setPromise] = useState(null);
  const [email, setEmail] = useState("");
  const [emailIsError, setEmailIsError] = useState(false);
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const resetPassword = (e) => {
    e.preventDefault();
    setPromise(null);
    if (regex.test(email)) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          setPromise(true);
        })
        .catch(() => {
          setPromise(false);
        });
      setEmailIsError(false);
      setPromise(null);
      setTimeout(() => {
        Navigate("/signin", { replace: true });
      }, 5000);
    } else {
      setEmailIsError(true);
    }
  };
  return (
    <>
      <Div className="auth-box">
        <Div className="top-floor">
          <Link to="/" className="header-logo">
            <img src={logo} alt="amazon" />
          </Link>
          {promise === true ? (
            <Div className="box-valid">
              <img src={validIcon} alt="valid"></img>
              <Div className="title">
                <h4>There was a problem</h4>
                <p>Check your inbox for reset password.</p>
              </Div>
            </Div>
          ) : promise === false ? (
            <Div className="box-error">
              <img src={errorIcon} alt="Error"></img>
              <Div className="title">
                <h4>There was a problem</h4>
                <p>
                  We're sorry. We weren't able to identify you given the
                  information provided.
                </p>
              </Div>
            </Div>
          ) : (
            ""
          )}
          <Div className="form-section">
            <h1 className="heading">Password assistance</h1>
            <Div className="hint-forgot-password">
              <p>
                Enter the email address associated with your Amazon account.
              </p>
            </Div>
            <form>
              <Div className="row-input input-email-forgot">
                <label>Email</label>
                <input
                  className={emailIsError ? "error-input" : ""}
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {emailIsError ? (
                  <Div className="error-input-text">
                    <span>i</span> Email Not Valid.
                  </Div>
                ) : (
                  ""
                )}
              </Div>
              <Button className="continue" onClick={(e) => resetPassword(e)}>
                Continue
              </Button>
            </form>
          </Div>
          <Div className="user-status">
            <h4>Has your email or mobile number changed?</h4>
            <p>
              If you no longer use the email address associated with your Amazon
              account, you may contact <span>Customer Service</span> for help
              restoring access to your account.
            </p>
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

export default ForgotPassword;
