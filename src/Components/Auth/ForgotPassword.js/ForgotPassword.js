// Basic
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Back End
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase";
// Images
import logo from "../../../images/icon/logo-black.png";
import errorIcon from "../../../images/icon/error-icon.png";
import validIcon from "../../../images/icon/valid-icon.png";
// Style
import { Hint, UserStatus, ContinueBtn, Check } from "./ForgotPasswordStyle";
// Global Style
import {
  AuthBox,
  Logo,
  CaptionBox,
  PromiseBox,
  Heading,
  FormSection,
  InputRow,
  InnerConditions,
  RequiredHeading,
  RequiredInput,
  ExternalLine,
  ExternalConditions,
} from "../GlobalAuth.js";

const ForgotPassword = () => {
  const Navigate = useNavigate();
  const [promise, setPromise] = useState(null);
  const [email, setEmail] = useState("");
  const [emailIsError, setEmailIsError] = useState(false);

  // Valid Email
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
      <AuthBox>
        <div className="top-floor">
          <Logo as={Link} to="/" className="header-logo">
            <img src={logo} alt="amazon" />
          </Logo>
          {promise === true ? (
            <PromiseBox className="box-valid">
              <img src={validIcon} alt="valid"></img>
              <div className="title">
                <h4>There was a problem</h4>
                <p>Check your inbox for reset password.</p>
              </div>
            </PromiseBox>
          ) : promise === false ? (
            <PromiseBox className="box-error">
              <img src={errorIcon} alt="Error"></img>
              <CaptionBox>
                <h4>There was a problem</h4>
                <Check>
                  We're sorry. We weren't able to identify you given the
                  information provided.
                </Check>
              </CaptionBox>
            </PromiseBox>
          ) : (
            ""
          )}
          <FormSection>
            <Heading>Password assistance</Heading>
            <Hint>
              <Check>
                Enter the email address associated with your Amazon account.
              </Check>
            </Hint>
            <form>
              <InputRow>
                <RequiredHeading>Email</RequiredHeading>
                <RequiredInput
                  className={emailIsError ? "error-input" : ""}
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {emailIsError ? (
                  <div className="error-input-text">
                    <span>i</span> Email Not Valid.
                  </div>
                ) : (
                  ""
                )}
              </InputRow>
              <ContinueBtn
                className="continue"
                onClick={(e) => resetPassword(e)}
              >
                Continue
              </ContinueBtn>
            </form>
          </FormSection>
          <UserStatus>
            <h4>Has your email or mobile number changed?</h4>
            <InnerConditions>
              If you no longer use the email address associated with your Amazon
              account, you may contact <span>Customer Service</span> for help
              restoring access to your account.
            </InnerConditions>
          </UserStatus>
        </div>
      </AuthBox>
      <ExternalLine />
      <ExternalConditions>
        <span> Conditions of Use </span>
        <span> Privacy Notice </span>
        <span> Help </span>
        <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
      </ExternalConditions>
    </>
  );
};

export default ForgotPassword;
